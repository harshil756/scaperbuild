#!/usr/bin/env node
/** Wire SolarPanelBirdProofingPage to Laravel CMS via dedicated solar components. */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, '../src/pages/services/SolarPanelBirdProofingPage.jsx')

let src = fs.readFileSync(filePath, 'utf8')
if (src.includes('usePageCms(')) {
  console.log('Solar page already wired')
  process.exit(0)
}

const imports = `import CmsHtml from '../../components/home/CmsHtml.jsx'
import SolarAdvantagesCards from '../../components/solar/SolarAdvantagesCards.jsx'
import SolarBlogPosts from '../../components/solar/SolarBlogPosts.jsx'
import SolarFaqSection from '../../components/solar/SolarFaqSection.jsx'
import SolarPanelCmsBinder from '../../components/solar/SolarPanelCmsBinder.jsx'
import SolarPanelCmsStyles from '../../components/solar/SolarPanelCmsStyles.jsx'
import SolarServiceCards from '../../components/solar/SolarServiceCards.jsx'
import SolarSignsCards from '../../components/solar/SolarSignsCards.jsx'
import SolarWhyChooseCards from '../../components/solar/SolarWhyChooseCards.jsx'
import SolarWhyEssentialCards from '../../components/solar/SolarWhyEssentialCards.jsx'
import usePageCms from '../../hooks/usePageCms.js'
import { cmsText } from '../../utils/cmsMedia.js'
`

src = src.replace(
  /import PhoneNumberInput from '\.\.\/\.\.\/components\/PhoneNumberInput\.jsx'\n/,
  `import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'\n${imports}`,
)

src = src.replace(
  /export default function SolarPanelBirdProofingPage\(\) \{\n  usePageMeta\('solar_panel_bird_proofing'\)/,
  `export default function SolarPanelBirdProofingPage() {
  const { page, content: c } = usePageCms('solar-panel-bird-proofing')
  usePageMeta('solar_panel_bird_proofing', page)`,
)

src = src.replace(
  /return \(\n    <>\n/,
  `return (
    <>
      <SolarPanelCmsStyles content={c} />
      <SolarPanelCmsBinder content={c} />
`,
)

function replaceBlock(src, startId, endBeforeId, replacement) {
  const re = new RegExp(
    `<div className="elementor-element elementor-element-${startId}[\\s\\S]*?(?=<div className="elementor-element elementor-element-${endBeforeId})`,
  )
  return src.replace(re, `${replacement}\n            `)
}

src = replaceBlock(
  src,
  '5602f2b',
  '972e1d3',
  '<SolarServiceCards items={c?.services?.items ?? []} />',
)

src = replaceBlock(
  src,
  '8f02689',
  '1f6db9f',
  '<SolarWhyEssentialCards items={c?.why_essential?.items ?? []} />',
)

// why essential section ends before next top container - fix: end before a047a50 section
src = src.replace(
  /<SolarWhyEssentialCards items=\{c\?\.why_essential\?\.items \?\? \[\]\} \/>[\s\S]*?(?=<section className="elementor-section elementor-top-section elementor-element elementor-element-a047a50)/,
  '<SolarWhyEssentialCards items={c?.why_essential?.items ?? []} />\n        ',
)

src = replaceBlock(
  src,
  '3d668ca',
  '62fdcad',
  '<SolarSignsCards items={c?.signs?.items ?? []} />',
)

src = src.replace(
  /<SolarSignsCards items=\{c\?\.signs\?\.items \?\? \[\]\} \/>[\s\S]*?(?=<div className="elementor-element elementor-element-62fdcad)/,
  '<SolarSignsCards items={c?.signs?.items ?? []} />\n            ',
)

src = replaceBlock(
  src,
  '62fdcad',
  '1f6db9f',
  '<SolarAdvantagesCards items={c?.advantages?.items ?? []} />',
)

// advantages section - end before process section; find next unique id after advantages
src = src.replace(
  /<SolarAdvantagesCards items=\{c\?\.advantages\?\.items \?\? \[\]\} \/>[\s\S]*?(?=<div className="elementor-element elementor-element-[a-f0-9]+ e-flex e-con-boxed e-con e-parent[^>]*data-id="(?!62fdcad)[a-f0-9]+"[^>]*>\s*<div className="e-con-inner">\s*<div className="elementor-element elementor-element-[a-f0-9]+ elementor-widget elementor-widget-heading"[^>]*>\s*<div className="elementor-widget-container">\s*<h2 className="elementor-heading-title elementor-size-default">Solar Panel Bird Proofing and Cleaning Process)/,
  '<SolarAdvantagesCards items={c?.advantages?.items ?? []} />\n        ',
)

src = replaceBlock(
  src,
  '2583f30',
  'c190105',
  '<SolarWhyChooseCards items={c?.why_choose?.items ?? []} />',
)

src = src.replace(
  /<div className="elementor-element elementor-element-c190105 elementor-widget elementor-widget-elementskit-blog-posts"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
  '<SolarBlogPosts blog={c?.blog} />\n        </section>',
)

src = src.replace(
  /<div className="elementor-element elementor-element-5a3541e elementor-widget elementor-widget-elementskit-accordion"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/,
  '<SolarFaqSection faq={c?.faq} />\n              </div>\n            </div>\n          </div>\n        </section>',
)

// Hero
src = src.replace(
  /<span className="elementor-icon-list-text">Get Affordable Bird Removal Service<\/span>/,
  `<span className="elementor-icon-list-text">{cmsText(c?.hero?.breadcrumb, 'Get Affordable Bird Removal Service')}</span>`,
)
src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Solar Panel Bird Protection Services<\/h2>/,
  `<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.title, 'Solar Panel Bird Protection Services')}</h2>`,
)
src = src.replace(
  /<h1 className="elementor-heading-title elementor-size-default">Get Affordable Bird Removal Services in Melbourne<\/h1>/,
  `<h1 className="elementor-heading-title elementor-size-default">{cmsText(c?.hero?.heading, 'Get Affordable Bird Removal Services in Melbourne')}</h1>`,
)

src = src.replace(
  /(<div className="elementor-element elementor-element-7a605c4 elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)[\s\S]*?(<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>)/,
  '$1\n                  <CmsHtml html={c?.hero?.intro} />\n                $2',
)

src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Complete Solar Panel Bird Protection Services <\/h2>/,
  `<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.services?.title, 'Complete Solar Panel Bird Protection Services')}</h2>`,
)

src = src.replace(
  /(<div className="elementor-element elementor-element-3440d1b elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)\s*<p>Keep your solar panels[\s\S]*?<\/p>(\s*<\/div>)/,
  '$1\n                  <CmsHtml html={c?.services?.intro} />$2',
)

src = src.replace(
  /(<div className="elementor-element elementor-element-6be9f35 elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)\s*<p>Invest in long-term[\s\S]*?<\/p>(\s*<\/div>)/,
  '$1\n                  <CmsHtml html={c?.services?.footer} />$2',
)

src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Why Bird Pest Control in Melbourne is Essential for Protecting Your Property\?<\/h2>/,
  `<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.why_essential?.title, 'Why Bird Pest Control in Melbourne is Essential for Protecting Your Property?')}</h2>`,
)

src = src.replace(
  /(<div className="elementor-element elementor-element-879c572 elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)\s*<p>Birds on your roof[\s\S]*?<\/p>(\s*<\/div>)/,
  '$1\n                  <CmsHtml html={c?.why_essential?.intro} />$2',
)

src = src.replace(
  /<h2 className="elementor-heading-title elementor-size-default">Frequently Asked Questions<\/h2>/,
  `<h2 className="elementor-heading-title elementor-size-default">{cmsText(c?.faq?.title, 'Frequently Asked Questions')}</h2>`,
)

fs.writeFileSync(filePath, src)
console.log('Wired solar-panel-bird-proofing')
