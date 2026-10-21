import { Link } from 'react-router-dom'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function LocationRichmondPage() {
  const data = {
    metaKey: 'location_richmond',
    locationName: 'Richmond',
    heroHeadline: 'Need Pest Control in Richmond? We’re Here Fast',
    heroSubhead:
      'Quick response, honest quotes and treatments that actually work. Call 7 States Pest Control for a free quote.',
    localHeading: 'Pest Control Richmond: Because Your Home Shouldn’t Be Their Home',
    localLeadParagraphs: [
      'From Victorian terraces off Swan Street to apartments near Bridge Road, Richmond properties face pest problems year-round. 7 States Pest Control sends licensed local technicians who find where the pests are coming from, not just where you spotted them. Book a free quote and get your space back.',
    ],
    signsList: [
      <><b>Pests we deal with:</b> Cockroaches, rodents, ants, spiders, bed bugs, and termites are common in Richmond’s older brick homes, shared-wall apartments, and busy café and bar areas.</>,
      <><b>Smart inspection first:</b> Every visit starts with a check of the roof void, subfloor, kitchen, and entry points to find the real source of the problem.</>,
      <><b>Custom treatment plan:</b> No one-size-fits-all spraying. We build a plan around your property type and the specific pest.</>,
      <><b>Safe for family and pets:</b> Low-odour products chosen with kids, pets, and food areas in mind.</>,
      <><b>For homes and businesses:</b> Houses, apartments, rentals, cafés, restaurants, and commercial kitchens, with flexible booking for landlords, tenants, and owners.</>,
      <><b>Fast and reliable:</b> Same-day pest control in Richmond, clear pricing, and follow-up support if pests return.</>,
    ],
    whyHeading: 'Why Richmond Locals Trust 7 States Pest Control',
    whyParagraphs: ['Pests don’t wait for a convenient time, so neither should your pest controller.'],
    whyTrustSubtext: 'Here’s what you get when you book with us.',
    whyBenefits: [
      { num: '01', text: <><strong>Root-Cause Treatments:</strong> We find where pests are getting in, so the problem is fixed, not just hidden for a few weeks.</> },
      { num: '02', text: <><strong>Built for Richmond Properties:</strong> We know how to treat older brick homes, tight terraces and busy commercial kitchens.</> },
      { num: '03', text: <><strong>Safe Around Kids and Pets:</strong> Low-odour products, applied carefully and explained clearly.</> },
      { num: '04', text: <><strong>Fast Response:</strong> Same-day and emergency appointments, subject to availability.</> },
      { num: '05', text: <><strong>Upfront Quotes:</strong> You’ll know the cost before we start.</> },
      { num: '06', text: <><strong>We Come Back if They Do:</strong> Follow-up visits if pests return after treatment.</> },
    ],
    servicesTitle: 'Pest treatments we offer in Richmond',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Trusted Local Pest Control Richmond Residents Can Rely On',
    previewContent: (
      <>
        <p>
          Most people don’t call a pest controller the first time they see something. They waited, hoping it was a one-off. Then comes the second sighting, and the third, and by then the problem has usually been building for weeks.
        </p>
        <p>
          If you’re looking for <b>pest control Richmond</b> property owners, tenants and café operators can lean on, this page covers what’s actually going on in the suburb, what to look for, and when it’s time to call someone. 7 States Pest Control services homes and businesses across the area.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <h3><b>Why Richmond Has Its Own Pest Patterns</b></h3>
        <p>Richmond has a mix you don’t find everywhere. There are Victorian-era terraces with timber floors and ventilated subfloors, converted warehouses, and newer apartment blocks, all within a few streets of each other. Pests treat each building type differently.</p>
        <p>Old terraces give rodents and spiders plenty of dark, undisturbed space under the floor. Warehouse conversions often have gaps where old and new construction meet. Apartment blocks share service ducts, so a problem on one floor can travel up or down without anyone noticing.</p>
        <p>Laneways and the steady stream of food outlets along Swan Street, Bridge Road and Victoria Street add to it. Bins, grease and spilled food are a permanent buffet.</p>

        <h3><b>A Season by Season Guide</b></h3>
        <p>Pests follow the weather, so knowing what’s likely helps you act early.</p>
        <ul>
          <li><b>Spring:</b> Ant colonies wake up and expand. Check around window sills, pet bowls and anywhere sweet food sits.</li>
          <li><b>Summer:</b> Heat speeds up breeding. Cockroaches, spiders, wasps and fleas all peak, and flies gather around bins.</li>
          <li><b>Autumn:</b> Mice start scouting for warm places before winter. This is a good time to seal gaps in the roofline and around pipes.</li>
          <li><b>Winter:</b> Rats and mice move indoors in earnest. Scratching in the ceiling at night is the classic sign. Silverfish also like damp, cool bathrooms and cupboards.</li>
        </ul>

        <h3><b>Small Signs Most People Miss</b></h3>
        <p>You don’t always need to see the pest itself. These clues are easy to overlook:</p>
        <ul>
          <li>Tiny dark specks like pepper in kitchen drawers, which are often cockroach droppings.</li>
          <li>A musty, oily smell behind appliances.</li>
          <li>Paint that bubbles or ripples on a wall or ceiling with no visible leak.</li>
          <li>Doors and windows that suddenly stick in the frame.</li>
          <li>Small, itchy red bites in a line or cluster, especially after waking up.</li>
          <li>Shredded paper, insulation or fabric tucked in a corner.</li>
        </ul>
        <p>If two or more of these sound familiar, it’s worth getting someone to take a look.</p>

        <h3><b>Renting in Richmond? Here’s Who Usually Handles It</b></h3>
        <p>Richmond has a large rental population, and pest problems are a common source of arguments. As a general rule in Victoria, if pests were already in the property when you moved in, that’s typically the landlord’s responsibility. If the problem was caused by the tenant, such as food left out or rubbish piling up, the tenant may need to cover it.</p>
        <p>Rules and circumstances vary, so check with Consumer Affairs Victoria if you’re unsure. Whichever side you’re on, take photos and report the issue in writing early. A short delay can turn a cheap fix into a dispute, and it helps to get a written record of what the technician found.</p>

        <h3><b>Cafés and Commercial Kitchens</b></h3>
        <p>Food businesses carry legal obligations under the Food Act and the Food Standards Code, which require premises to be kept free of pests. Local council environmental health officers can inspect, and visible pest activity can lead to fines or closure orders.</p>
        <p>The risks are bigger than the penalty. A single bad review mentioning a cockroach can undo years of reputation. Businesses that need <b>pest control in Richmond</b> often benefit from scheduled treatments outside trading hours, plus a log of what was done and when. That paperwork also comes in handy during audits.</p>
        <p>Common weak points in commercial kitchens include floor drains, gaps behind cooking lines, cardboard storage, and the back door that gets propped open during deliveries.</p>
        <p>
          Homeowners in the south-east often ask us about{' '}
          <Link to="/location/cheltenham"><b>pest control Cheltenham</b></Link>, where mice, ants and cockroaches are frequent call-outs in family homes and shopping strips. In the west, new housing estates and open land mean different challenges, and our{' '}
          <Link to="/location/melton"><b>pest control Melton</b></Link> service deals with rodents, spiders and ants that move in as the ground around new buildings gets disturbed.
        </p>

        <h3><b>Termites: The Pest You Can’t Hear Coming</b></h3>
        <p>Termites deserve their own section because they work so differently. Subterranean termites live in the soil and build hidden mud tunnels to reach timber. A colony can feed around the clock, and the damage often sits behind plasterboard or under flooring.</p>
        <p>
          Australian guidelines recommend a professional termite inspection at least once a year, and older Richmond homes with timber frames and subfloors are good candidates. Inspectors use moisture meters, thermal tools and tapping to find activity you can’t see. Bayside homes face the same risk, which is why our team also carries out termite checks as part of{' '}
          <Link to="/location/hampton"><b>pest control Hampton</b></Link> services, where leafy gardens and older timber homes are common.
        </p>

        <h3><b>Why Store-Bought Sprays Let You Down</b></h3>
        <p>A can of spray takes care of the insect in front of you. It doesn’t reach the nest, and some products simply push insects deeper into the wall. A professional pest controller uses baits, gels and residual treatments that insects carry back with them, which is how a whole colony gets affected rather than a handful.</p>
        <p>There’s also the safety side. Mixing products or overusing them in a kitchen or kids’ bedroom isn’t a great idea, and the labels aren’t always easy to follow.</p>

        <h3><b>What Affects the Price</b></h3>
        <p>Rather than a vague “it depends”, here’s what actually moves the number:</p>
        <ul>
          <li><b>Type of pest.</b> Ants and spiders are usually the simplest. Termites, bed bugs and rodents take more time.</li>
          <li><b>Property size and layout.</b> A studio apartment and a three-storey terrace are very different jobs.</li>
          <li><b>How established the problem is.</b> A fresh issue is quicker to clear than one that’s been growing for months.</li>
          <li><b>Access.</b> Roof voids, subfloors and locked rooms all affect time on site.</li>
          <li><b>Number of visits.</b> Some pests need a follow-up to break the breeding cycle.</li>
        </ul>
        <p>You’ll get a clear quote before any work starts.</p>

        <h4><b>Why Richmond Locals Pick 7 States Pest Control</b></h4>
        <p>We work across Richmond regularly, so we’re familiar with the building styles and the trouble spots described above. You can ask us a straight question and expect a straight answer, including “you don’t need a full treatment for this.”</p>
        <p>We also offer flexible appointment times for tenants, shift workers and hospitality owners who can’t wait around between nine and five.</p>

        <h5><b>Get It Sorted Before It Spreads</b></h5>
        <p>Pests don’t leave on their own, and the repair bill or the bad review only gets bigger with time.</p>
        <p>If any of the signs above sound familiar, give 7 States Pest Control a call or send an enquiry. Tell us what you’ve noticed and we’ll recommend the next step. Reach out today for dependable <b>pest control Richmond</b> residents and businesses can trust.</p>
      </>
    ),
    faqs: [
      {
        question: '1. How long does a typical treatment take?',
        answer: 'A standard general pest treatment often takes 30 to 90 minutes. Larger homes, termite work and rodent jobs can take longer.',
      },
      {
        question: '2. Will the pests disappear straight away?',
        answer: 'Not always. Baits and residual treatments work over days, so you may still see a few insects at first. Activity should drop noticeably within one to two weeks.',
      },
      {
        question: '3. Do you offer termite inspections in Richmond?',
        answer: 'Yes. We check for activity using visual inspection, moisture readings and tapping, and we’ll recommend treatment if we find anything.',
      },
      {
        question: '4. Who pays for pest control in a rental property?',
        answer: 'Generally, if pests were there when the tenant moved in, the landlord is responsible. Tenant-caused problems may be the tenant’s cost. Check with Consumer Affairs Victoria for your specific case.',
      },
      {
        question: '5. Do you provide pest control for cafés and restaurants?',
        answer: 'Yes. We offer scheduled treatments outside trading hours and can supply records of each visit for inspections and audits.',
      },
    ],
  }

  return <LocationPageLayout {...data} />
}
