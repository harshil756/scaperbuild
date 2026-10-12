import { useEffect } from 'react'

function patchIconList(widgetId, items) {
  if (!items?.length) return
  const list = document.querySelector(`.elementor-element-${widgetId} .elementor-icon-list-items`)
  if (!list) return

  const lis = list.querySelectorAll('.elementor-icon-list-item')
  items.forEach((text, index) => {
    const span = lis[index]?.querySelector('.elementor-icon-list-text')
    if (span && text) span.textContent = text
  })
}

function patchProcessSteps(containerId, steps) {
  const container = document.querySelector(`.elementor-element-${containerId}`)
  if (!container || !steps?.length) return

  const cards = container.querySelectorAll('.elementor-icon-box-wrapper')
  steps.forEach((step, index) => {
    const card = cards[index]
    if (!card) return
    const title = card.querySelector('.elementor-icon-box-title span')
    const desc = card.querySelector('.elementor-icon-box-description')
    if (title) title.textContent = step.title ?? ''
    if (desc) desc.textContent = step.description ?? ''
  })
}

function applyContent(content) {
  if (!content) return

  const sustainable = content.sustainable
  if (sustainable?.list?.length) {
    patchIconList('fd8c2a0', sustainable.list)
  }

  const process = content.process
  if (process?.steps?.length) {
    patchProcessSteps('ea5638f', process.steps)
  }

  const cost = content.cost
  if (cost?.list?.length) {
    patchIconList('37691df', cost.list)
  }
}

/** Bind list/process CMS fields not rendered as React components. */
export default function SolarPanelCmsBinder({ content }) {
  useEffect(() => {
    if (!content) return
    const id = requestAnimationFrame(() => applyContent(content))
    return () => cancelAnimationFrame(id)
  }, [content])

  return null
}
