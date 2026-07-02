import { useEffect, useRef } from 'react'

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
}) {
  const inputRef = useRef(null)
  const itiRef = useRef(null)

  useEffect(() => {
    let cancelled = false

    loadIntlTelInput().then(() => {
      if (cancelled || !inputRef.current || !window.intlTelInput) {
        return
      }

      itiRef.current = window.intlTelInput(inputRef.current, {
        initialCountry,
        utilsScript: '/assets/js/utils.min_4d12c3a5.js',
        containerClass: 'cfefp-intl-container',
        useFullscreenPopup: false,
        fixDropdownWidth: false,
        formatOnDisplay: false,
        formatAsYouType: true,
        showFlags: true,
        customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => {
          if (!selectedCountryData?.dialCode) {
            return placeholder
          }

          let example = selectedCountryPlaceholder || placeholder
          if (selectedCountryData.iso2 === 'in') {
            example = example.replace(/^0+/, '')
          }

          return `+${selectedCountryData.dialCode} ${example}`
        },
      })
    })

    return () => {
      cancelled = true
      itiRef.current?.destroy()
      itiRef.current = null
    }
  }, [initialCountry, placeholder])

  return (
    <input
      ref={inputRef}
      autoComplete="off"
      className={`elementor-field elementor-size-${size} elementor-field-textual`}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      title="Only numbers and phone characters (#, -, *, etc) are accepted."
      type="tel"
    />
  )
}
