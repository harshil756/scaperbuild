import { useEffect, useRef } from 'react'
import {
  PHONE_DIGITS_LENGTH,
  applyPhoneInputValidity,
} from '../utils/phoneNumber.js'

let scriptPromise = null

function loadIntlTelInput() {
  if (window.intlTelInput) {
    return Promise.resolve()
  }

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = '/assets/js/intlTelInput_d88d428f.js'
      script.async = false
      script.onload = () => resolve()
      script.onerror = reject
      document.body.appendChild(script)
    })
  }

  return scriptPromise
}

export default function PhoneNumberInput({
  id,
  name = 'form_fields[mobile_number]',
  size = 'lg',
  placeholder = 'Mobile Number',
  required = true,
  initialCountry = 'au',
  className,
}) {
  const inputRef = useRef(null)
  const itiRef = useRef(null)

  useEffect(() => {
    let cancelled = false
    const input = inputRef.current
    if (!input) return undefined

    const handleInput = () => applyPhoneInputValidity(input)

    input.addEventListener('input', handleInput)
    input.addEventListener('blur', handleInput)

    loadIntlTelInput().then(() => {
      if (cancelled || !inputRef.current || !window.intlTelInput) {
        return
      }

      itiRef.current = window.intlTelInput(inputRef.current, {
        initialCountry,
        onlyCountries: ['au'],
        utilsScript: '/assets/js/utils.min_4d12c3a5.js',
        containerClass: 'cfefp-intl-container',
        useFullscreenPopup: false,
        fixDropdownWidth: false,
        formatOnDisplay: false,
        formatAsYouType: false,
        showFlags: true,
        customPlaceholder: () => placeholder,
      })

      applyPhoneInputValidity(inputRef.current)
    })

    return () => {
      cancelled = true
      input.removeEventListener('input', handleInput)
      input.removeEventListener('blur', handleInput)
      itiRef.current?.destroy()
      itiRef.current = null
    }
  }, [initialCountry, placeholder])

  const fieldClassName = [
    'elementor-field',
    `elementor-size-${size}`,
    'elementor-field-textual',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <input
      ref={inputRef}
      autoComplete="tel-national"
      className={fieldClassName}
      id={id}
      inputMode="numeric"
      maxLength={PHONE_DIGITS_LENGTH}
      name={name}
      pattern={`\\d{${PHONE_DIGITS_LENGTH}}`}
      placeholder={placeholder}
      required={required}
      title={`Enter a ${PHONE_DIGITS_LENGTH}-digit mobile number (without the leading 0).`}
      type="tel"
    />
  )
}
