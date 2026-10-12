import useSiteContact from '../hooks/useSiteContact.jsx'

/**
 * Renders a tel: link using Filament Contact Us phone (site-wide).
 */
export default function SitePhoneLink({
  children,
  bold = false,
  suffix = '',
  className,
  ...rest
}) {
  const { phoneNumber, phoneUrl } = useSiteContact()
  const label = children ?? `${phoneNumber}${suffix}`

  return (
    <a href={phoneUrl} className={className} {...rest}>
      {bold ? <b>{label}</b> : label}
    </a>
  )
}
