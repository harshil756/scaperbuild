export default function LocationProcessSteps({
  title = 'How a treatment works',
  subtitle = 'Four steps from first call to a pest-free property.',
  steps = [
    {
      num: '1',
      title: 'Inspection',
      desc: 'A technician checks your property to identify the pest, entry points and the extent of the issue.',
    },
    {
      num: '2',
      title: 'Treatment plan',
      desc: 'You get a written plan and quote matched to what was found — no generic package.',
    },
    {
      num: '3',
      title: 'Treatment',
      desc: 'We apply eco-friendly, pet- and family-safe products, with clear instructions for the hours after.',
    },
    {
      num: '4',
      title: 'Follow-up',
      desc: 'A check-in visit confirms the pests are gone and covers how to prevent them returning.',
    },
  ],
}) {
  return (
    <section className="loc-process-section" aria-label="Treatment Process Steps">
      <div className="loc-container">
        <div className="loc-section-header">
          <h2 className="loc-section-title">{title}</h2>
          <p className="loc-section-subtitle">{subtitle}</p>
        </div>

        <div className="loc-process-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="loc-process-card">
              <div className="loc-process-num" aria-label={`Step ${step.num}`}>
                {step.num}
              </div>
              <h3 className="loc-process-title">{step.title}</h3>
              <p className="loc-process-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
