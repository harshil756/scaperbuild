import { Link } from 'react-router-dom'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function LocationWerribeePage() {
  const data = {
    metaKey: 'location_werribee',
    locationName: 'Werribee',
    heroHeadline: 'Pest Control Werribee Residents Call When Nothing Else Works',
    heroSubhead:
      'Stubborn infestations need real experts. 7 States Pest Control delivers targeted treatments that remove pests at the source, not just the surface.',
    localHeading: 'Pest Control Werribee Homes and Businesses Can Rely On',
    localLeadParagraphs: [
      'Pests don’t wait for a good time to show up. Whether it’s ants in the kitchen, cockroaches behind the fridge, or rodents on the roof, you need pest control in Werribee that works the first time. At 7 States Pest Control, our licensed local technicians inspect, treat and prevent, so your property stays pest-free long after we leave.',
    ],
    signsTitle: 'Why Choose Our Pest Control in Werribee:',
    signsList: [
      <><b>Licensed and local technicians:</b> Fully trained professionals who know Werribee’s common pest problems</>,
      <><b>Family and pet-safe treatments:</b> Effective products applied with care around kids, pets and gardens</>,
      <><b>Fast response times:</b> Quick booking and prompt service when pests can’t wait</>,
      <><b>Targeted treatments:</b> We remove pests at the source, not just the surface</>,
      <><b>Honest, upfront pricing:</b> Clear quotes with no hidden costs</>,
      <><b>Residential and commercial service:</b> Homes, rental properties, restaurants, offices and more</>,
      <><b>Long-lasting protection:</b> Follow-up and prevention advice to stop pests coming back</>,
    ],
    whyHeading: 'Why Werribee Locals Choose 7 States for Pest Control',
    whyParagraphs: ['Anyone can spray and leave. We stay until the problem is solved.'],
    whyTrustSubtext: 'Here’s what makes our pest control in Werribee different.',
    whyBenefits: [
      { num: '01', text: <><strong>We find the source, not just the symptoms:</strong> Every job starts with a proper inspection, so we treat where pests actually come from.</> },
      { num: '02', text: <><strong>Werribee-smart treatments:</strong> From river-area moisture to new-estate gaps, we know what pests Werribee properties attract.</> },
      { num: '03', text: <><strong>Safe for your whole crew:</strong> Kids, pets and the backyard veggie patch are all considered before we treat them.</> },
      { num: '04', text: <><strong>Technicians who explain, not just spray:</strong> You’ll know what we found, what we did and how to keep pests away.</> },
      { num: '05', text: <><strong>Quotes that don’t surprise you:</strong> Clear pricing upfront, so no hidden extras later.</> },
    ],
    servicesTitle: 'Pest treatments we offer in Werribee',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Pest Control Werribee: Because Pests Don’t Respect Your Home',
    previewContent: (
      <>
        <p>
          You wiped the benches, took the bins out and still found ants marching across the kitchen. It happens in even the cleanest homes. Werribee’s warm weather, nearby river areas and fast-growing estates give pests plenty of reasons to move in. Good <b>pest control Werribee</b> residents can rely on starting with finding where the problem begins and fixing it properly. At 7 States Pest Control, our local technicians treat the source, so you’re not spraying the same corner every week.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <h3><b>Werribee Pest Calendar: What Turns Up and When</b></h3>
        <p>Pests follow the seasons. Once you know the pattern, you can act before a small problem grows.</p>
        <p><b>Summer</b></p>
        <p>Heat brings out ants, spiders, wasps and fleas. Redback spiders settle into sheds, letterboxes and outdoor furniture, while ant colonies swarm around pet bowls and crumbs.</p>
        <p><b>Autumn</b></p>
        <p>As nights cool down, rodents start looking for warm shelter. A tiny gap near a pipe or garage door is all a mouse needs.</p>
        <p><b>Winter</b></p>
        <p>Cockroaches and mice move indoors. You might hear scratching in the roof or find droppings in the pantry.</p>
        <p><b>Spring</b></p>
        <p>Termites get active when the soil warms up and moisture lingers. Ants and bees also return to the garden.</p>
        <p>Booking <b>pest control Werribee</b> before your season’s peak is usually cheaper and far less stressful than waiting for a full infestation.</p>

        <h3><b>Warning Signs You Need Pest Control Now</b></h3>
        <p>Some pest problems are loud and obvious. Others stay hidden for months. It’s time to call a professional if you notice:</p>
        <ul>
          <li>Droppings in cupboards, drawers or the roof void</li>
          <li>Scratching or scurrying sounds at night</li>
          <li>Mud tubes on walls or timber that sounds hollow when tapped</li>
          <li>Chewed packaging, cables or skirting boards</li>
          <li>A musty smell behind the fridge or under the sink</li>
          <li>Ant trails that keep coming back after cleaning</li>
        </ul>
        <p>Picture a family who keeps finding small cockroaches in the kitchen. They clean harder, buy more spray and still see them every night. The real nest is inside a wall cavity, and no amount of scrubbing will reach it. That’s the point where an inspection saves weeks of frustration.</p>

        <h3><b>DIY vs Professional: What Actually Works</b></h3>
        <p>Supermarket sprays are fine for a single spider on the porch. They kill what they touch, but they rarely reach the nest. Ant colonies can split and spread, cockroaches hide deep in walls and rodents come back through the same gap they used before.</p>
        <p>Professional <b>pest control Werribee</b> treatment works differently. A trained technician identifies the pest, finds the entry points and chooses a treatment that suits your property. You also get advice on what to change around the house, which is something a can of spray will never give you.</p>
        <p>DIY costs add up, too. Buying product after product, repeating treatments and still having pests is expensive and tiring. A proper treatment done once is usually the cheaper option.</p>

        <h3><b>What Happens on the Day of Your Visit</b></h3>
        <p>Many people aren’t sure what to expect, so here’s how a typical visit runs.</p>
        <ol>
          <li><b>Inspection.</b> Our technician checks inside and outside, including the roof void, garage, garden and sub-floor where needed.</li>
          <li><b>Explanation.</b> We show you what we found and talk you through the plan in plain English.</li>
          <li><b>Quote approval.</b> You know the price before any work begins.</li>
          <li><b>Treatment.</b> We target nests, entry points and problem zones, rather than spraying everywhere.</li>
          <li><b>Aftercare.</b> We share simple prevention tips and let you know if a follow-up is needed.</li>
        </ol>
        <p>Most general treatments are done in a single visit, and we’ll tell you how long to keep kids and pets away from treated areas.</p>

        <h3><b>Pest Control for Every Type of Property</b></h3>
        <p>Different buildings attract different pests, so one approach doesn’t suit everyone.</p>
        <p><b>New Estates</b></p>
        <p>Freshly disturbed soil and small building gaps invite ants and spiders. An early treatment helps stop colonies from settling in.</p>
        <p><b>Older Homes</b></p>
        <p>Timber, roof voids and sub-floors are perfect for termites and rodents. Regular inspections catch damage before it becomes costly.</p>
        <p><b>Rental Properties</b></p>
        <p>Landlords and property managers need quick, reliable service. Tenants want problems solved without drama. We work with both sides to get it done.</p>
        <p><b>Shops, Cafes and Offices</b></p>
        <p>A single cockroach sighting can damage your reputation. We offer discreet commercial pest control services that fit around your trading hours and help you keep hygiene standards in check.</p>

        <h3><b>Pest Control Cost in Werribee: What Affects the Price</b></h3>
        <p>No two jobs are the same, so there’s no single price. The main factors are the type of pest, the size of the property, how bad the infestation is and the treatment needed. Termite work and rodent proofing usually cost more than a standard general treatment for ants or spiders.</p>
        <p>
          The best way to avoid surprises is to ask for a written quote before work starts. At 7 States, you’ll get a clear price upfront, and we’ll explain what is included. If you’re comparing options for <b>pest control Werribee</b>,{' '}
          <Link to="/location/richmond"><b>pest control Richmond</b></Link>,{' '}
          <Link to="/location/st-albans"><b>pest control St Albans</b></Link> or{' '}
          <Link to="/location/tarneit"><b>pest control Tarneit</b></Link>, check that each quote covers the same pests and the same areas. Otherwise, you’re not comparing like with like.
        </p>

        <h4><b>Common Pest Control Myths</b></h4>
        <p><b>“Clean homes don’t get pests.”</b> Pests come for food, water and shelter, not dirt. Even spotless houses get visitors.</p>
        <p><b>“One spray fixes everything.”</b> Lasting results need the right product, the right placement and some prevention work afterwards.</p>
        <p><b>“If I can’t see them, they’re not there.”</b> Termites and rodents can stay hidden for months while the damage builds up.</p>

        <h5><b>Book Pest Control Werribee Today</b></h5>
        <p>
          Pests don’t go away on their own, and they usually get worse the longer you wait. Call 7 States Pest Control on <SitePhoneLink bold /> today or send an online enquiry for a free, no-obligation quote. We’ll sort the problem properly, so you can get back to enjoying your home or running your business.
        </p>
      </>
    ),
    faqs: [
      {
        question: '1. How much does pest control cost in Werribee?',
        answer: 'It depends on the pest, the size of your property and how bad the problem is. A general treatment for ants or spiders usually costs less than termite work or rodent proofing. We give you a clear written quote before any work starts, so there are no surprises.',
      },
      {
        question: '2. How quickly can you come out for pest control in Werribee?',
        answer: 'We aim to book you in as soon as possible. Urgent problems like rodents, wasp nests and heavy cockroach activity are prioritised.',
      },
      {
        question: '3. Is the treatment safe for my kids and pets?',
        answer: 'Yes. We apply products carefully and only where needed. Before we leave, we tell you how long kids and pets should stay away from treated areas.',
      },
      {
        question: '4. How often should I book pest control?',
        answer: 'Most homes do well with a service once a year. Rental properties, cafes and older homes may need more regular visits. Termite inspections are best done every 12 months.',
      },
      {
        question: '5. How can I tell if my pest problem is serious?',
        answer: 'If you’re seeing pests daily, finding droppings, hearing noises in walls or spotting signs of termites, it’s time for an inspection. Early action costs less than a late one.',
      },
    ],
  }

  return <LocationPageLayout {...data} />
}
