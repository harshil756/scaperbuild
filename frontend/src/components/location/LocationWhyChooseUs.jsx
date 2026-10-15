export default function LocationWhyChooseUs({
  locationName = 'Melbourne',
  heading,
  paragraphs = [],
  trustSubtext,
  benefits = [
    { num: '01', text: 'Experienced and certified pest technicians' },
    { num: '02', text: 'Eco-friendly and safe pest control treatments' },
    { num: '03', text: 'Custom pest management plans tailored to your property' },
    { num: '04', text: 'Affordable pricing without compromising on quality' },
    { num: '05', text: 'Fast, responsive, and friendly customer service' },
  ],
}) {
  const sectionTitle = heading || `Why Choose 7 States Pest Control in ${locationName}?`
  const textParagraphs = Array.isArray(paragraphs) ? paragraphs : [paragraphs]
  const subtext = trustSubtext || `Here's why ${locationName} residents and businesses trust us:`

  return (
    <section className="loc-why-section" aria-label={`Why Choose 7 States Pest Control in ${locationName}`}>
      <div className="loc-container">
        <div className="loc-why-grid">
          <div className="loc-why-left">
            <h2 className="loc-why-heading">{sectionTitle}</h2>
            {textParagraphs.map((p, idx) => (
              <p key={idx} className="loc-why-desc">
                {p}
              </p>
            ))}
            <p className="loc-trust-subtext">{subtext}</p>
          </div>

          <div className="loc-why-right">
            <div className="loc-benefit-cards">
              {benefits.map((b, idx) => (
                <div key={idx} className="loc-benefit-card">
                  <span className="loc-benefit-num">{b.num || `0${idx + 1}`}</span>
                  <span className="loc-benefit-text">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
