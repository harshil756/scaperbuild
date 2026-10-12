import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuotePopup } from './QuotePopupProvider.jsx'
import { submitLead } from '../utils/submitLead.js'

function setSubmitting(form, submitting) {
  const button = form.querySelector('button[type="submit"]')
  if (!button) return

  button.disabled = submitting
  button.setAttribute('aria-busy', submitting ? 'true' : 'false')

  const textEl = button.querySelector('.elementor-button-text')
  if (textEl) {
    if (!textEl.dataset.defaultText) {
      textEl.dataset.defaultText = textEl.textContent
    }
    textEl.textContent = submitting ? 'Submitting…' : textEl.dataset.defaultText
  }
}

function showFormError(form, message) {
  let el = form.querySelector('.react-form-error')
  if (!el) {
    el = document.createElement('div')
    el.className = 'react-form-error'
    el.setAttribute('role', 'alert')
    el.style.cssText = 'color:#b91c1c;margin:0 0 12px;font-size:14px;'
    form.prepend(el)
  }
  el.textContent = message
}

function clearFormError(form) {
  form.querySelector('.react-form-error')?.remove()
}

/** Intercept Elementor quote/contact/newsletter forms and store leads/dev API. */
export default function FormSubmissionHandler() {
  const navigate = useNavigate()
  const quotePopup = useQuotePopup()

  useEffect(() => {
    async function handleSubmit(event) {
      const form = event.target
      if (!(form instanceof HTMLFormElement) || !form.classList.contains('elementor-form')) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      clearFormError(form)
      setSubmitting(form, true)

      try {
        const result = await submitLead(form)
        form.reset()
        quotePopup?.closePopup?.()
        const redirect = result?.data?.redirect_url || '/thank-you'
        navigate(redirect)
      } catch (error) {
        showFormError(form, error.message || 'Unable to submit the form. Please try again.')
      } finally {
        setSubmitting(form, false)
      }
    }

    document.addEventListener('submit', handleSubmit, true)
    return () => document.removeEventListener('submit', handleSubmit, true)
  }, [navigate, quotePopup])

  return null
}
