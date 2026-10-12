import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pagesDir = path.resolve(__dirname, '../src/pages/location')

function splitCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
}

function parseLocationName(filename) {
  // e.g. LocationPointCookPage.jsx -> Point Cook
  const base = filename.replace(/^Location/, '').replace(/Page\.jsx$/, '')
  return splitCamelCase(base)
}

function extractFaqs(content) {
  const faqs = []
  const cardRegex = /<div className="elementskit-card\s*[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g
  // Alternative extraction using titles and bodies
  const titleRegex = /<span className="ekit-accordion-title">\s*([^<]+)<\/span>/g
  const bodyRegex = /<div[^>]*className="[^"]*ekit-accordion--content"[^>]*>([\s\S]*?)<\/div>/g

  const titles = [...content.matchAll(titleRegex)].map((m) => m[1].trim())
  const bodies = [...content.matchAll(bodyRegex)].map((m) => m[1].trim())

  for (let i = 0; i < titles.length; i++) {
    const q = titles[i]
    let a = bodies[i] || ''
    // Clean up html entities and inner p tags if simple string
    a = a
      .replace(/<p>&nbsp;/g, '<p>')
      .replace(/&nbsp;/g, ' ')
      .replace(/<\/p>/g, '')
      .replace(/<p>/g, '')
      .trim()

    faqs.push({
      question: q,
      answer: a,
    })
  }

  return faqs
}

function extractMoreContent(content) {
  const marker = '<div id="moreContent" className="readmore-content">'
  const startIdx = content.indexOf(marker)
  if (startIdx === -1) return ''

  const contentStart = startIdx + marker.length
  // Find matching closing </div> before <button className="readmore-btn"
  const btnIdx = content.indexOf('<button className="readmore-btn"', contentStart)
  if (btnIdx === -1) return ''

  const lastDivIdx = content.lastIndexOf('</div>', btnIdx)
  if (lastDivIdx === -1) return ''

  return content.slice(contentStart, lastDivIdx).trim()
}

function extractIntroContent(content) {
  // Extract text from inside the first elementor-widget-text-editor
  const editorMarker = 'elementor-widget-text-editor'
  const startIdx = content.indexOf(editorMarker)
  if (startIdx === -1) return ''

  const containerMarker = '<div className="elementor-widget-container">'
  const containerStart = content.indexOf(containerMarker, startIdx)
  if (containerStart === -1) return ''

  // Look for where readmore div starts
  const readMoreMarker = 'elementor-widget-html'
  const endIdx = content.indexOf(readMoreMarker, containerStart)
  if (endIdx === -1) return ''

  const editorContent = content.slice(containerStart + containerMarker.length, endIdx)
  return editorContent.trim()
}

function cleanJsxFragment(jsx) {
  return jsx
    .replace(/<span style=\{\{fontWeight: 400\}\}>/g, '<span>')
    .replace(/<span style=\{\{fontWeight: '400'\}\}>/g, '<span>')
    .replace(/<br \/>\s*<br \/>/g, '<br />')
}

export function processLocationPage(filename) {
  const filePath = path.join(pagesDir, filename)
  const content = fs.readFileSync(filePath, 'utf8')

  const metaMatch = content.match(/usePageMeta\(['"]([^'"]+)['"]\)/)
  const metaKey = metaMatch ? metaMatch[1] : ''
  const locationName = parseLocationName(filename)

  const rawMore = extractMoreContent(content)
  const faqs = extractFaqs(content)

  // Default fallback signs for locations
  const signsList = [
    'Tiny dark droppings in drawers, pantries or along skirting boards',
    'Thin mud lines running up a wall or under the house',
    'Timber that sounds hollow when you tap it',
    'A stale, oily smell in a cupboard that never goes away',
    'Chewed packaging, gnawed wiring or shredded paper',
    'A pet scratching far more than usual',
  ]

  // Default 5 benefits
  const whyBenefits = [
    { num: '01', text: 'Experienced and certified technicians' },
    { num: '02', text: 'Eco-friendly and safe pest control treatments' },
    { num: '03', text: 'Custom pest management plans tailored to your property' },
    { num: '04', text: 'Affordable pricing without compromising on quality' },
    { num: '05', text: 'Fast, responsive, and friendly customer service' },
  ]

  // Default fallback FAQs if none extracted
  const finalFaqs =
    faqs.length > 0
      ? faqs
      : [
          {
            question: `1. What makes 7 States Pest Control the best pest control service in ${locationName}?`,
            answer: `7 States Pest Control provides top-rated pest control service in ${locationName}, using advanced techniques and eco-friendly products to eliminate pests quickly and safely. Our experienced team handles all types of infestations, ensuring long-term protection.`,
          },
          {
            question: `2. How quickly can your technicians attend to pests in ${locationName}?`,
            answer: `We offer fast response and urgent call-outs across ${locationName} for homes and businesses. Call us today to check current technician availability.`,
          },
          {
            question: `3. Are your pest control treatments safe for children and pets?`,
            answer: `Yes, we use modern, environmentally conscious products that are thoroughly tested and safe for your family, pets, and property when used as directed.`,
          },
          {
            question: `4. Do you offer warranties or guarantees for pest treatments in ${locationName}?`,
            answer: `Yes, our treatments are backed by results and return checks where required to ensure the infestation is completely cleared.`,
          },
          {
            question: `5. Why should I invest in professional pest control rather than DIY sprays?`,
            answer: `Store-bought sprays usually only kill surface pests, leaving breeding nests hidden. Professional treatments eliminate the colony at the source and seal entry points for long-term prevention.`,
          },
        ]

  // Create preview and expanded JSX
  const previewJsx = `
      <p>
        Are you searching for reliable and affordable pest control services in ${locationName}? At{' '}
        <Link to="/"><b>7 States Pest Control</b></Link>, we understand how frustrating and stressful it can be to deal with unwanted pests in your home or business.
      </p>
      <p>
        From tiny ants and cockroaches to destructive termites, rodents, and bed bugs, pests can quickly disrupt your peace of mind and cause serious property damage if not addressed on time. That’s why our mission is simple — to create a safe, clean, and pest-free environment for you, your family, and your customers.
      </p>
      <p>
        With years of experience in the industry, our professional pest control team offers tailor-made solutions for every situation. Whether you are facing a sudden infestation or want to safeguard your property with preventative measures, we’ve got you covered.
      </p>
  `.trim()

  const expandedJsx = rawMore
    ? cleanJsxFragment(rawMore)
    : `
      <h3>Our Comprehensive Pest Control Services in ${locationName}</h3>
      <p>We provide a wide range of pest management solutions for homes, offices, restaurants, warehouses, and more. Our services include general pest control for common invaders as well as specialized treatments for stubborn infestations.</p>
      <h4>Ant Control & Termite Treatment</h4>
      <p>Ants target kitchens, pantries, and workplaces. Our expert ant control services eliminate nests at the source, while our termite inspections safeguard your structural timber from silent destruction.</p>
      <h4>Rodent Control in ${locationName}</h4>
      <p>Rats and mice chew wires, damage insulation, and contaminate surfaces. Our <Link to="/rodent-control-in-melbourne"><b>rodent control</b></Link> removes pests and seals entry points.</p>
      <h4>Spider & Cockroach Removal</h4>
      <p>We provide targeted treatments for redbacks, huntsmans, and cockroaches in kitchens, bathrooms, and garages.</p>
      <h4>Protect Your Property with 7 States Pest Control</h4>
      <p>Call us at <SitePhoneLink bold /> or <Link to="/contact-us"><b>request a free quote</b></Link> today for reliable pest control in ${locationName}.</p>
    `.trim()

  const newCode = `import { Link } from 'react-router-dom'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function ${filename.replace(/\.jsx$/, '')}() {
  const data = {
    metaKey: '${metaKey}',
    locationName: '${locationName}',
    heroHeadline: 'Pest control in ${locationName}, done right the first time.',
    heroSubhead:
      'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.',
    localHeading: 'Local pest control for ${locationName} homes and businesses.',
    localLeadParagraphs: [
      'Are you searching for reliable and affordable pest control services in ${locationName}? At 7 States Pest Control, we understand how frustrating and stressful it can be to deal with unwanted pests in your home or business.',
      'From tiny ants and cockroaches to destructive termites, rodents, and bed bugs, pests can quickly disrupt your peace of mind and cause serious property damage if not addressed on time. We create a safe, clean, and pest-free environment backed by proven results.',
    ],
    signsTitle: 'Small Signs That Something Has Already Moved In',
    signsSubtitle: 'Pests rarely announce themselves. The clues are usually small:',
    signsList: ${JSON.stringify(signsList, null, 6)},
    whyHeading: 'Why Choose 7 States Pest Control in ${locationName}?',
    whyParagraphs: [
      'When it comes to pest management, one-size-fits-all solutions simply do not work. Every property and every infestation is unique. At 7 States Pest Control, we take the time to carefully assess your pest issues and develop a customized treatment plan that delivers long-term results.',
      'Our approach focuses not just on eliminating existing pests but also on preventing them from returning.',
    ],
    whyTrustSubtext: "Here's why ${locationName} residents and businesses trust us:",
    whyBenefits: ${JSON.stringify(whyBenefits, null, 6)},
    servicesTitle: 'Pest treatments we offer in ${locationName}',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Pest Control Services in ${locationName} for Homes and Businesses',
    previewContent: (
      <>
        ${previewJsx}
      </>
    ),
    expandedContent: (
      <>
        ${expandedJsx}
      </>
    ),
    faqs: ${JSON.stringify(finalFaqs, null, 6)},
  }

  return <LocationPageLayout {...data} />
}
`

  fs.writeFileSync(filePath, newCode, 'utf8')
  console.log(`Updated ${filename} (${locationName})`)
}

export function run() {
  const files = fs
    .readdirSync(pagesDir)
    .filter(
      (f) =>
        f.startsWith('Location') &&
        f.endsWith('Page.jsx') &&
        f !== 'LocationArchivePage.jsx' &&
        f !== 'LocationGeelongPage.jsx' &&
        f !== 'LocationBrightonPage.jsx'
    )

  console.log(`Found ${files.length} location pages to update.`)
  for (const file of files) {
    processLocationPage(file)
  }
  console.log('All location pages successfully updated!')
}

run()
