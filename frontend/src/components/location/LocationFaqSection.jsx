import { useState } from 'react'

export default function LocationFaqSection({
  title = 'Frequently Asked Questions',
  subtitle,
  faqs = [],
  /** When false, FAQ JSON-LD is expected from page head SEO instead. */
  injectJsonLd = true,
}) {
  const [openIndexes, setOpenIndexes] = useState([0]) // First FAQ open by default

  function toggleFaq(index) {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  if (!faqs || faqs.length === 0) return null

  return (
    <section className="loc-faq-section" aria-label="Frequently Asked Questions">
      <div className="loc-container">
        <div className="loc-section-header">
          <h2 className="loc-section-title">{title}</h2>
          {subtitle && <p className="loc-section-subtitle">{subtitle}</p>}
        </div>

        <div className="loc-faq-accordion" role="region">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index)
            const headerId = `faq-header-${index}`
            const panelId = `faq-panel-${index}`

            return (
              <div key={index} className={`loc-faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  id={headerId}
                  className="loc-faq-trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span>{faq.question}</span>
                  <span className="loc-faq-icon" aria-hidden="true">
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    className="loc-faq-panel"
                  >
                    {typeof faq.answer === 'string' ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      {injectJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: typeof faq.answer === 'string' ? faq.answer : (faq.answerText || faq.question),
                },
              })),
            }),
          }}
        />
      )}
    </section>
  )
}
