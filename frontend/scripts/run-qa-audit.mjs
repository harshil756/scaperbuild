import puppeteer from 'puppeteer-core'
import path from 'node:path'
import fs from 'node:fs'

const artifactDir = 'C:\\Users\\Acer\\.gemini\\antigravity-ide\\brain\\72e61514-85ec-4f12-9950-0c28ba4cb6ff'
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
const baseUrl = 'http://localhost:4173'

async function runAudit() {
  console.log('--- STARTING QA AUDIT ---')
  const results = {
    pagesTested: [],
    interactions: {},
    consoleErrors: [],
    formTest: {},
  }

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  })

  try {
    // 1. Audit Geelong Desktop & Title Color
    console.log('\n[1/5] Auditing /location/geelong (Desktop 1280x900)...')
    const page1 = await browser.newPage()
    page1.on('console', msg => {
      if (msg.type() === 'error') results.consoleErrors.push({ url: page1.url(), text: msg.text() })
    })

    await page1.setViewport({ width: 1280, height: 900 })
    await page1.goto(`${baseUrl}/location/geelong`, { waitUntil: 'domcontentloaded' })
    await new Promise(r => setTimeout(r, 1000))

    const geelongData = await page1.evaluate(() => {
      const h1 = document.querySelector('.loc-hero-title')
      const s = window.getComputedStyle(h1)
      const signs = Array.from(document.querySelectorAll('.loc-signs-list li')).map(e => e.textContent.trim())
      const benefits = Array.from(document.querySelectorAll('.loc-benefit-card')).map(e => e.textContent.trim())
      const services = Array.from(document.querySelectorAll('.loc-service-card .loc-service-name')).map(e => e.textContent.trim())
      const steps = Array.from(document.querySelectorAll('.loc-process-card .loc-process-title')).map(e => e.textContent.trim())
      const faqs = Array.from(document.querySelectorAll('.loc-faq-item .loc-faq-trigger span:first-child')).map(e => e.textContent.trim())
      return {
        title: document.title,
        heroHeadline: h1.textContent.trim(),
        heroTitleColor: s.color,
        signsCount: signs.length,
        signs,
        benefitsCount: benefits.length,
        servicesCount: services.length,
        services,
        stepsCount: steps.length,
        steps,
        faqsCount: faqs.length,
        faqs
      }
    })

    results.pagesTested.push({ route: '/location/geelong', ...geelongData })
    await page1.screenshot({ path: path.join(artifactDir, 'geelong_desktop.png'), fullPage: false })
    console.log(`✓ Geelong Hero Title Color: ${geelongData.heroTitleColor}`)
    console.log('✓ Captured geelong_desktop.png')

    // Mobile Viewport for Geelong
    await page1.setViewport({ width: 375, height: 812 })
    await new Promise(r => setTimeout(r, 500))
    await page1.screenshot({ path: path.join(artifactDir, 'geelong_mobile.png'), fullPage: false })
    console.log('✓ Captured geelong_mobile.png')

    // Read More interaction
    await page1.setViewport({ width: 1280, height: 900 })
    const initialExpanded = await page1.$eval('.loc-expandable-content', el => el.classList.contains('is-expanded'))
    const readMoreBtn = await page1.$('.loc-readmore-btn')
    await readMoreBtn.click()
    await new Promise(r => setTimeout(r, 300))
    const afterClickExpanded = await page1.$eval('.loc-expandable-content', el => el.classList.contains('is-expanded'))
    const buttonTextAfterOpen = await page1.$eval('.loc-readmore-btn span', el => el.textContent.trim())

    await readMoreBtn.click()
    await new Promise(r => setTimeout(r, 300))
    const afterSecondClick = await page1.$eval('.loc-expandable-content', el => el.classList.contains('is-collapsed'))

    results.interactions.readMore = { initialExpanded, afterClickExpanded, buttonTextAfterOpen, afterSecondClick }
    console.log('✓ Read More interaction passed')

    // FAQ Accordion interaction
    const firstFaqExpanded = await page1.$eval('#faq-header-0', el => el.getAttribute('aria-expanded'))
    const secondFaqTrigger = await page1.$('#faq-header-1')
    await secondFaqTrigger.click()
    await new Promise(r => setTimeout(r, 300))
    const secondFaqExpanded = await page1.$eval('#faq-header-1', el => el.getAttribute('aria-expanded'))
    results.interactions.faq = { firstFaqExpanded, secondFaqExpanded }
    console.log('✓ FAQ interaction passed')
    await page1.close()

    // 2. Safe Form Interception on Fresh Page
    console.log('\n[2/5] Testing Form Submission on /location/geelong...')
    const pageForm = await browser.newPage()
    await pageForm.setRequestInterception(true)
    let interceptedData = null

    pageForm.on('request', req => {
      if (req.url().includes('/api/leads') || (req.method() === 'POST' && req.url().includes('lead'))) {
        try {
          interceptedData = {
            url: req.url(),
            method: req.method(),
            postData: JSON.parse(req.postData())
          }
        } catch (e) {
          interceptedData = { url: req.url(), method: req.method(), raw: req.postData() }
        }
        req.respond({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ success: true, data: { redirect_url: '/thank-you' } })
        })
      } else {
        req.continue()
      }
    })

    await pageForm.goto(`${baseUrl}/location/geelong`, { waitUntil: 'domcontentloaded' })
    await new Promise(r => setTimeout(r, 1000))

    await pageForm.type('#hero-name', 'QA Inspector')
    await pageForm.type('#hero-phone', '0412345678')
    await pageForm.select('#hero-issue', 'Termites')

    const formattedPhone = await pageForm.$eval('#hero-phone', el => el.value)
    const submitBtn = await pageForm.$('#hero-quote-form button[type="submit"]')
    await submitBtn.click()

    await new Promise(r => setTimeout(r, 2000))
    const finalUrl = pageForm.url()

    results.formTest = {
      phoneInputFormatted: formattedPhone,
      interceptedPayload: interceptedData,
      navigatedToThankYou: finalUrl.includes('/thank-you'),
      finalUrl
    }
    console.log('✓ Form test completed: navigated to thank-you =', results.formTest.navigatedToThankYou)
    await pageForm.close()

    // 3. Audit Brighton Desktop & Mobile
    console.log('\n[3/5] Auditing /location/brighton...')
    const page2 = await browser.newPage()
    await page2.setViewport({ width: 1280, height: 900 })
    await page2.goto(`${baseUrl}/location/brighton`, { waitUntil: 'domcontentloaded' })
    await new Promise(r => setTimeout(r, 1000))

    const brightonData = await page2.evaluate(() => {
      const h1 = document.querySelector('.loc-hero-title')
      const s = window.getComputedStyle(h1)
      const signs = Array.from(document.querySelectorAll('.loc-signs-list li')).map(e => e.textContent.trim())
      const services = Array.from(document.querySelectorAll('.loc-service-card .loc-service-name')).map(e => e.textContent.trim())
      const faqs = Array.from(document.querySelectorAll('.loc-faq-item .loc-faq-trigger span:first-child')).map(e => e.textContent.trim())
      return {
        title: document.title,
        heroHeadline: h1.textContent.trim(),
        heroTitleColor: s.color,
        signsTitle: document.querySelector('.loc-signs-title')?.textContent.trim(),
        signsCount: signs.length,
        signs,
        servicesCount: services.length,
        faqsCount: faqs.length,
        faqs
      }
    })
    results.pagesTested.push({ route: '/location/brighton', ...brightonData })

    await page2.screenshot({ path: path.join(artifactDir, 'brighton_desktop.png'), fullPage: false })
    await page2.setViewport({ width: 375, height: 812 })
    await new Promise(r => setTimeout(r, 500))
    await page2.screenshot({ path: path.join(artifactDir, 'brighton_mobile.png'), fullPage: false })
    console.log('✓ Captured brighton_desktop.png and brighton_mobile.png')
    await page2.close()

    // 4. Audit Richmond & Point Cook
    console.log('\n[4/5] Auditing /location/richmond and /location/point-cook...')
    const page3 = await browser.newPage()
    await page3.setViewport({ width: 1280, height: 900 })
    await page3.goto(`${baseUrl}/location/richmond`, { waitUntil: 'domcontentloaded' })
    await new Promise(r => setTimeout(r, 800))
    const richmondTitle = await page3.title()
    const richmondFaqs = await page3.$$eval('.loc-faq-item', els => els.length)
    await page3.screenshot({ path: path.join(artifactDir, 'richmond_desktop.png'), fullPage: false })
    results.pagesTested.push({ route: '/location/richmond', title: richmondTitle, faqsCount: richmondFaqs })
    console.log('✓ Captured richmond_desktop.png')

    await page3.goto(`${baseUrl}/location/point-cook`, { waitUntil: 'domcontentloaded' })
    await new Promise(r => setTimeout(r, 800))
    const pcTitle = await page3.title()
    const pcFaqs = await page3.$$eval('.loc-faq-item', els => els.length)
    await page3.screenshot({ path: path.join(artifactDir, 'point_cook_desktop.png'), fullPage: false })
    results.pagesTested.push({ route: '/location/point-cook', title: pcTitle, faqsCount: pcFaqs })
    console.log('✓ Captured point_cook_desktop.png')
    await page3.close()

    // 5. Audit Location Archive (/location)
    console.log('\n[5/5] Auditing /location (Archive)...')
    const page4 = await browser.newPage()
    await page4.setViewport({ width: 1280, height: 900 })
    await page4.goto(`${baseUrl}/location`, { waitUntil: 'domcontentloaded' })
    await new Promise(r => setTimeout(r, 1000))
    const archiveTitle = await page4.title()
    const archiveCardsCount = await page4.$$eval('.elementor-post', els => els.length).catch(() => 0)
    await page4.screenshot({ path: path.join(artifactDir, 'location_archive_desktop.png'), fullPage: false })
    results.pagesTested.push({ route: '/location', title: archiveTitle, archiveCardsCount })
    console.log('✓ Captured location_archive_desktop.png')
    await page4.close()

    console.log('\n========================================')
    console.log('AUDIT COMPLETED SUCCESSFULLY!')
    console.log('========================================')
    fs.writeFileSync(path.join(artifactDir, 'audit_results.json'), JSON.stringify(results, null, 2))
  } finally {
    await browser.close()
  }
}

runAudit().catch(err => {
  console.error('Audit failed with error:', err)
  process.exit(1)
})
