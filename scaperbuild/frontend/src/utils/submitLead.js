import { apiUrl } from './api.js'

function fieldValue(formData, ...keys) {
  for (const key of keys) {
    const value = formData.get(key)
    if (value != null && String(value).trim() !== '') {
      return String(value).trim()
    }
  }
  return ''
}

export function detectFormType(form) {
  const name = (form.getAttribute('name') || '').toLowerCase()
  const id = (form.id || '').toLowerCase()

  if (name.includes('newsletter')) return 'newsletter'
  if (id.includes('popup') || form.closest('.elementor-location-popup')) return 'popup'
  if (window.location.pathname.replace(/\/$/, '') === '/contact-us') return 'contact'
  return 'quote'
}

export function buildLeadPayload(form) {
  const formData = new FormData(form)

  return {
    name: fieldValue(formData, 'form_fields[first_name]', 'form_fields[name]'),
    email: fieldValue(formData, 'form_fields[user_email]', 'form_fields[email]'),
    phone: fieldValue(formData, 'form_fields[mobile_number]', 'form_fields[phone]'),
    message: fieldValue(formData, 'form_fields[message]'),
    form_type: detectFormType(form),
    post_id: fieldValue(formData, 'post_id') || null,
    form_id: fieldValue(formData, 'form_id') || null,
    referer_title: fieldValue(formData, 'referer_title') || document.title,
    referrer: window.location.href,
  }
}

export async function submitLead(form) {
  const payload = buildLeadPayload(form)

  const response = await fetch(apiUrl('/api/leads'), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message = data.message || 'Unable to submit the form. Please try again.'
    const errors = data.errors ? Object.values(data.errors).flat().join(' ') : ''
    throw new Error(errors || message)
  }

  return data
}
