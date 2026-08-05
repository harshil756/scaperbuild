import usePageMeta from '../hooks/usePageMeta.js'
import useSiteContact from '../hooks/useSiteContact.js'
import { Link } from 'react-router-dom'

export default function TermsAndConditionsPage() {
  usePageMeta('terms_and_conditions')
  const { phoneNumber, phoneUrl, emailAddress, emailUrl } = useSiteContact()

  return (
    <>
      <div className="elementor elementor-terms" data-elementor-post-type="page" data-elementor-type="wp-page">
        <section
          className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-element_type="section"
          data-settings="{&quot;background_background&quot;:&quot;classic&quot;}"
        >
          <div className="elementor-background-overlay" />
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-heading animated fadeInDown">
                  <div className="elementor-widget-container">
                    <h2 className="elementor-heading-title elementor-size-default">Terms &amp; Conditions</h2>
                  </div>
                </div>
                <div className="elementor-element elementor-widget elementor-widget-icon-list animated fadeInDown">
                  <div className="elementor-widget-container">
                    <ul className="elementor-icon-list-items elementor-inline-items">
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <Link to="/">
                          <span className="elementor-icon-list-text">Home</span>
                        </Link>
                      </li>
                      <li className="elementor-icon-list-item elementor-inline-item">
                        <span className="elementor-icon-list-text">Terms &amp; Conditions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="elementor-section elementor-top-section elementor-section-boxed elementor-section-height-default elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-100 elementor-top-column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-widget elementor-widget-text-editor">
                  <div className="elementor-widget-container">
                    <p>
                      These Terms &amp; Conditions apply to all pest control services provided by 7 States Pest Control
                      (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to residential and commercial customers in
                      Melbourne and surrounding areas. By requesting a quote, booking a service, or allowing our
                      technicians to carry out work on your property, you agree to these terms.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">1. Quotes and bookings</h3>
                    <p>
                      All quotes provided by phone, email, website forms, or in person are estimates based on the
                      information available at the time. Final pricing may vary if the scope of work changes after
                      inspection. A booking is confirmed once you accept a quote and, where applicable, any required
                      deposit or appointment time is agreed.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">2. Free quotations</h3>
                    <p>
                      Where we offer a free quotation, this covers assessment and pricing only unless otherwise stated
                      in writing. Treatment, reporting, or compliance documentation may incur separate charges.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">3. Access and preparation</h3>
                    <p>
                      You agree to provide safe and reasonable access to the property, including roof voids, subfloors,
                      external areas, and any locations required to complete the service. You are responsible for securing
                      pets, notifying occupants, and following any preparation instructions we provide before treatment.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">4. Service guarantees</h3>
                    <p>
                      Guarantee periods, retreatment entitlements, and warranty conditions depend on the pest type,
                      treatment method, and service package selected. Any guarantee applies only when our recommended
                      preparation and aftercare instructions are followed. Guarantees do not cover new infestations
                      caused by untreated neighbouring areas, structural issues, poor sanitation, or conditions outside
                      our control.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">5. Payment terms</h3>
                    <p>
                      Payment is due as agreed at the time of booking or upon completion of service unless approved
                      account terms apply. We accept payment by the methods advised at the time of service. Late payment
                      may result in suspension of warranty support or additional recovery costs where permitted by law.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">6. Cancellations and rescheduling</h3>
                    <p>
                      Please provide as much notice as possible if you need to cancel or reschedule an appointment.
                      Missed appointments, denied access, or repeated last-minute cancellations may incur a call-out fee.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">7. Health, safety, and chemicals</h3>
                    <p>
                      We use approved products and methods in line with Australian regulations and label directions.
                      You must advise us of any health concerns, allergies, pregnancy, sensitive occupants, aquariums,
                      beehives, or organic food production areas before treatment. Re-entry and ventilation instructions
                      must be followed for your safety.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">8. Limitation of liability</h3>
                    <p>
                      To the maximum extent permitted by law, our liability for any claim relating to our services is
                      limited to the amount paid for the relevant service or retreatment of the affected area. We are not
                      liable for indirect, consequential, or economic loss, including loss of stock, business interruption,
                      or pre-existing property damage not caused by our negligence.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">9. End-of-lease and compliance reports</h3>
                    <p>
                      Where end-of-lease or compliance documentation is requested, we will issue reports based on the
                      service completed and inspection findings at the time of attendance. Property managers, owners, and
                      tenants remain responsible for meeting the requirements of their lease, agent, or regulatory body.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">10. Privacy</h3>
                    <p>
                      Personal information collected through quotes, bookings, and service delivery is handled in
                      accordance with our business privacy practices and used to provide services, communicate with you,
                      and maintain service records.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">11. Changes to these terms</h3>
                    <p>
                      We may update these Terms &amp; Conditions from time to time. The version published on this page
                      applies to services booked after the update date.
                    </p>

                    <h3 className="elementor-heading-title elementor-size-default">12. Contact us</h3>
                    <p>
                      If you have questions about these terms, contact us at{' '}
                      <a href={emailUrl}>{emailAddress}</a> or call{' '}
                      <a href={phoneUrl}>{phoneNumber}</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
