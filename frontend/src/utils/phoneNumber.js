export const PHONE_DIGITS_LENGTH = 9

export function normalizePhoneDigits(value) {
  let digits = String(value ?? '').replace(/\D/g, '')
  if (digits.startsWith('0')) {
    digits = digits.slice(1)
  }
  return digits.slice(0, PHONE_DIGITS_LENGTH)
}

export function isValidPhoneNumber(value) {
  return normalizePhoneDigits(value).length === PHONE_DIGITS_LENGTH
}

export function phoneValidationMessage(value) {
  const digits = normalizePhoneDigits(value)
  if (!digits) return ''
  if (digits.length < PHONE_DIGITS_LENGTH) {
    return `Please enter a ${PHONE_DIGITS_LENGTH}-digit mobile number.`
  }
  return ''
}

export function applyPhoneInputValidity(input) {
  if (!(input instanceof HTMLInputElement)) return

  const digits = normalizePhoneDigits(input.value)
  if (input.value !== digits) {
    input.value = digits
  }

  if (!digits) {
    input.setCustomValidity('')
    return
  }

  input.setCustomValidity(phoneValidationMessage(digits))
}
