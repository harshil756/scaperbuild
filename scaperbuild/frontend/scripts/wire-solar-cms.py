#!/usr/bin/env python3
"""Safely wire SolarPanelBirdProofingPage to Laravel CMS."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
FILE = ROOT / 'frontend/src/pages/services/SolarPanelBirdProofingPage.jsx'


def container_bounds(content: str, element_id: str, from_pos: int = 0) -> tuple[int, int]:
    needle = f'<div className="elementor-element elementor-element-{element_id}'
    start = content.find(needle, from_pos)
    if start == -1:
        raise SystemExit(f'Container {element_id} not found')
    depth = 0
    i = start
    n = len(content)
    while i < n:
        if content.startswith('<div', i):
            depth += 1
            i = content.find('>', i) + 1
        elif content.startswith('</div>', i):
            depth -= 1
            i += 6
            if depth == 0:
                return start, i
        else:
            i += 1
    raise SystemExit(f'Unbalanced div for {element_id}')


def replace_elementor_container(content: str, element_id: str, replacement: str, from_pos: int = 0) -> str:
    start, end = container_bounds(content, element_id, from_pos)
    return content[:start] + replacement + content[end:]


def replace_range(content: str, start_id: str, end_id: str, replacement: str) -> str:
    start, _ = container_bounds(content, start_id)
    _, end = container_bounds(content, end_id, start)
    return content[:start] + replacement + content[end:]


def main():
    src = FILE.read_text()
    if 'usePageCms(' in src:
        print('Already wired')
        return

    imports = """import CmsHtml from '../../components/home/CmsHtml.jsx'
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
"""
    src = src.replace(
        "import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'\n",
        "import PhoneNumberInput from '../../components/PhoneNumberInput.jsx'\n" + imports,
    )
    src = src.replace(
        "export default function SolarPanelBirdProofingPage() {\n  usePageMeta('solar_panel_bird_proofing')",
        "export default function SolarPanelBirdProofingPage() {\n  const { page, content: c } = usePageCms('solar-panel-bird-proofing')\n  usePageMeta('solar_panel_bird_proofing', page)",
    )
    src = src.replace(
        'return (\n    <>\n',
        'return (\n    <>\n      <SolarPanelCmsStyles content={c} />\n      <SolarPanelCmsBinder content={c} />\n',
    )

    # Hero text fields
    src = src.replace(
        '<span className="elementor-icon-list-text">Get Affordable Bird Removal Service</span>',
        "<span className=\"elementor-icon-list-text\">{cmsText(c?.hero?.breadcrumb, 'Get Affordable Bird Removal Service')}</span>",
    )
    src = src.replace(
        '<h2 className="elementor-heading-title elementor-size-default">Solar Panel Bird Protection Services</h2>',
        "<h2 className=\"elementor-heading-title elementor-size-default\">{cmsText(c?.hero?.title, 'Solar Panel Bird Protection Services')}</h2>",
    )
    src = src.replace(
        '<h1 className="elementor-heading-title elementor-size-default">Get Affordable Bird Removal Services in Melbourne</h1>',
        "<h1 className=\"elementor-heading-title elementor-size-default\">{cmsText(c?.hero?.heading, 'Get Affordable Bird Removal Services in Melbourne')}</h1>",
    )
    src = re.sub(
        r'(<div className="elementor-element elementor-element-7a605c4 elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)\s*<p>Expert bird pest control[\s\S]*?</p>\s*(</div>)',
        r'\1\n                  <CmsHtml html={c?.hero?.intro} />\n                \2',
        src,
        count=1,
    )

    src = src.replace(
        '<h2 className="elementor-heading-title elementor-size-default">Complete Solar Panel Bird Protection Services </h2>',
        "<h2 className=\"elementor-heading-title elementor-size-default\">{cmsText(c?.services?.title, 'Complete Solar Panel Bird Protection Services')}</h2>",
    )
    src = re.sub(
        r'(<div className="elementor-element elementor-element-3440d1b elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)\s*<p>Keep your solar panels[\s\S]*?</p>\s*(</div>)',
        r'\1\n                  <CmsHtml html={c?.services?.intro} />\n                \2',
        src,
        count=1,
    )
    src = re.sub(
        r'(<div className="elementor-element elementor-element-6be9f35 elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)\s*<p>Invest in long-term[\s\S]*?</p>\s*(</div>)',
        r'\1\n                  <CmsHtml html={c?.services?.footer} />\n                \2',
        src,
        count=1,
    )
    src = src.replace(
        '<h2 className="elementor-heading-title elementor-size-default">Why Bird Pest Control in Melbourne is Essential for Protecting Your Property?</h2>',
        "<h2 className=\"elementor-heading-title elementor-size-default\">{cmsText(c?.why_essential?.title, 'Why Bird Pest Control in Melbourne is Essential for Protecting Your Property?')}</h2>",
    )
    src = re.sub(
        r'(<div className="elementor-element elementor-element-879c572 elementor-widget elementor-widget-text-editor"[^>]*>\s*<div className="elementor-widget-container">)\s*<p>Birds on your roof[\s\S]*?</p>\s*(</div>)',
        r'\1\n                  <CmsHtml html={c?.why_essential?.intro} />\n                \2',
        src,
        count=1,
    )
    src = src.replace(
        '<h2 className="elementor-heading-title elementor-size-default">Frequently Asked Questions</h2>',
        "<h2 className=\"elementor-heading-title elementor-size-default\">{cmsText(c?.faq?.title, 'Frequently Asked Questions')}</h2>",
    )

    # Card sections — replace from end to start so indices stay valid
    src = replace_range(src, '62fdcad', 'e86bf87', '<SolarAdvantagesCards items={c?.advantages?.items ?? []} />\n            ')
    src = replace_range(src, '3d668ca', 'cb13aae', '<SolarSignsCards items={c?.signs?.items ?? []} />\n            ')
    src = replace_range(src, '8f02689', '6b3e7c4', '<SolarWhyEssentialCards items={c?.why_essential?.items ?? []} />\n            ')
    src = replace_range(src, '5602f2b', '9f28e19', '<SolarServiceCards items={c?.services?.items ?? []} />\n            ')
    src = replace_elementor_container(src, '2583f30', '<SolarWhyChooseCards items={c?.why_choose?.items ?? []} />\n            ')
    src = replace_elementor_container(src, 'c190105', '<SolarBlogPosts blog={c?.blog} />\n                ')
    src = replace_elementor_container(src, '5a3541e', '<SolarFaqSection faq={c?.faq} />\n                ')

    FILE.write_text(src)
    print('Wired solar-panel-bird-proofing')


if __name__ == '__main__':
    main()
