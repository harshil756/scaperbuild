export default function LocationLocalInfo({
  heading,
  leadParagraphs = [],
  signsTitle,
  signsSubtitle,
  signsList = [],
  imageSrc = '/assets/images/termites_2-768x512_d9cc54a4.jpg',
  imageAlt = 'Termite inspection and treatment in Australia',
  infographicTag = 'WHY PESTS & TERMITES INVADE',
  infographicTitle = 'Why Are Termites Coming Into Your Property?',
  infographicPoints = [
    { title: '1. Moisture Around Foundations', desc: 'Damp areas attract termites and accelerate pest control needs.' },
    { title: '2. Wood-to-Soil Contact', desc: 'Direct timber contact allows easy colony access and nesting.' },
    { title: '3. Cracks in Walls & Slabs', desc: 'Common entry points that require professional inspection.' },
    { title: '4. Poor Ventilation', desc: 'Creates ideal dark, humid breeding conditions for hidden infestations.' },
    { title: '5. No Termite Barrier Installed', desc: 'Properties without barriers face significantly higher infestation risk.' },
  ],
  infographicNote = 'If pest or termite activity continues, professional treatment is the safest and most effective solution for long-term protection.',
}) {
  const paragraphs = Array.isArray(leadParagraphs) ? leadParagraphs : [leadParagraphs]

  return (
    <section className="loc-info-section" aria-label="Local Pest Information">
      <div className="loc-container">
        <div className="loc-info-grid">
          <div className="loc-info-left">
            {heading && <h2 className="loc-info-heading">{heading}</h2>}

            {paragraphs.map((p, idx) => (
              <p key={idx} className="loc-info-lead">
                {p}
              </p>
            ))}

            {(signsTitle || signsList.length > 0) && (
              <div className="loc-signs-box">
                {signsTitle && <h3 className="loc-signs-title">{signsTitle}</h3>}
                {signsSubtitle && <p className="loc-signs-subtitle">{signsSubtitle}</p>}
                {signsList.length > 0 && (
                  <ul className="loc-signs-list">
                    {signsList.map((sign, idx) => (
                      <li key={idx}>{sign}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <div className="loc-info-right">
            <div className="loc-visual-card">
              <div className="loc-visual-img-wrap">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="loc-visual-img"
                  loading="lazy"
                  width={560}
                  height={230}
                />
              </div>
              <div className="loc-visual-body">
                <div className="loc-visual-tag">{infographicTag}</div>
                <h3 className="loc-visual-title">{infographicTitle}</h3>

                <ul className="loc-infographic-list">
                  {infographicPoints.map((pt, idx) => (
                    <li key={idx}>
                      <strong>{pt.title}</strong> — {pt.desc}
                    </li>
                  ))}
                </ul>

                {infographicNote && (
                  <p className="loc-visual-note">
                    {infographicNote}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
