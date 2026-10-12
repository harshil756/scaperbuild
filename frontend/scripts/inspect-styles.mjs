import puppeteer from 'puppeteer-core'

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true
})
const page = await browser.newPage()
await page.goto('http://localhost:4173/location/geelong', { waitUntil: 'networkidle2' })

const styles = await page.evaluate(() => {
  const el = document.querySelector('.loc-hero-title')
  if (!el) return { error: 'No .loc-hero-title found' }
  const s = window.getComputedStyle(el)
  return {
    color: s.color,
    fontFamily: s.fontFamily,
    fontSize: s.fontSize,
    webkitTextFillColor: s.webkitTextFillColor,
    matchedRules: Array.from(document.styleSheets).flatMap(sheet => {
      try {
        return Array.from(sheet.cssRules).filter(rule => rule.selectorText && el.matches(rule.selectorText)).map(r => ({
          selector: r.selectorText,
          cssText: r.cssText
        }))
      } catch (e) {
        return []
      }
    })
  }
})

console.log(JSON.stringify(styles, null, 2))
await browser.close()
