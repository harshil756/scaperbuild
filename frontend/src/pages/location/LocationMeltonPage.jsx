import { Link } from 'react-router-dom'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function LocationMeltonPage() {
  const data = {
    metaKey: 'location_melton',
    locationName: 'Melton',
    heroHeadline: 'Pest Problem in Melton? We’ll Be There Today',
    heroSubhead:
      'Pests gone, not just hidden. Family and pet-safe treatments from licensed Melton technicians, backed by a service guarantee.',
    localHeading: 'Pest Control Melton: Because Your Home Should Be Yours, Not Theirs',
    localLeadParagraphs: [
      'Nobody plans for a surprise guest in the pantry or a rustling noise in the ceiling at 2am. In Melton, where new estates meet open farmland, pests are a fact of life, but they don’t have to be your problem. 7 States Pest Control sends a local, licensed technician to find out what’s really going on, deal with it properly and show you how to keep it from coming back.',
    ],
    signsTitle: 'What you can expect:',
    signsList: [
      'A real person who answers the phone',
      'An upfront price before we start',
      'Treatments matched to your pest, not a one-size-fits-all spray',
      'Tidy, respectful service in your home or business',
    ],
    whyHeading: 'Why Melton Trusts 7 States for Pest Control',
    whyParagraphs: [
      'A pest problem is stressful enough without chasing tradies who don’t turn up. We keep it simple. We arrive when we say we will, work out what’s actually causing the problem and sort it out properly, so you can get back to normal life without scratching noises in the roof or roaches in the kitchen.',
    ],
    whyTrustSubtext: "Here's why Melton residents and businesses trust us:",
    whyBenefits: [
      { num: '01', text: <><strong>Turn up, fix it, tidy up:</strong> On-time technicians who treat your property with respect and leave it clean</> },
      { num: '02', text: <><strong>Treatments that fit the pest:</strong> No generic spray-and-go. Every job is matched to what’s really in your home or business</> },
      { num: '03', text: <><strong>Straight talk on cost:</strong> You know the price before work starts, and we’ll tell you if you don’t need treatment</> },
      { num: '04', text: <><strong>Built for Melton homes:</strong> New estates, older houses and rural-edge blocks all have different pest risks, and we plan for them</> },
      { num: '05', text: <><strong>Backup when you need it:</strong> Spot activity after the visit? Call us and we’ll come back and look at it</> },
    ],
    servicesTitle: 'Pest treatments we offer in Melton',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Pest Control Melton Families and Businesses Trust, Done Right the First Time',
    previewContent: (
      <>
        <p>
          A scratching sound in the ceiling at 2am. A cockroach darting across the kitchen floor when you flick the light on. A line of ants that somehow comes back every morning, no matter how well you wipe the bench.
        </p>
        <p>
          Pests have a way of turning a calm home into a stressful one. The good news is that you don’t have to put up with them. Professional <b>pest control Melton</b> locals can rely on goes well beyond a quick spray. At 7 States Pest Control, our licensed technicians track down where the problem starts, treat it safely, and show you how to stop it coming back.
        </p>
      </>
    ),
    expandedContent: (
      <>
        <h3><b>What’s Bugging You?</b></h3>
        <p>Not sure what you’re dealing with? Here are the signs we hear about most often.</p>
        <ul>
          <li><b>Scratching in the roof or walls:</b> usually rats or mice looking for warmth and food</li>
          <li><b>Cockroaches at night:</b> often a sign of a hidden nest behind appliances or near drains</li>
          <li><b>Ant trails across the bench:</b> the colony is close, and wiping them away won’t fix it</li>
          <li><b>Hollow-sounding timber or mud tubes:</b> classic early warning signs of termites</li>
          <li><b>Wasps near doors or play areas:</b> a nest is likely nearby and growing</li>
          <li><b>Bites you can’t explain:</b> fleas or bed bugs could be the cause</li>
        </ul>
        <p>If any of this sounds familiar, get a technician to take a look. Pest problems rarely fix themselves, and they cost more the longer they run.</p>

        <h3><b>Why Melton Has Its Own Pest Problems</b></h3>
        <p>Melton is changing fast. New estates keep going up, land is being cleared, and open paddocks sit right next to brand new homes. Add hot, dry summers and you get pests moving closer to people in search of water, food and shelter.</p>
        <p>Newer homes often face termites and rodents early, because disturbed soil and nearby open land push them toward buildings. Older suburbs tend to deal with cockroaches, ants and pests that nest in roof voids. A technician who works in the area every day knows where to look first, and that saves you time and money. That local knowledge is a big part of effective <b>pest control Melton</b> homeowners are looking for.</p>

        <h3><b>Pest Control Services We Offer</b></h3>
        <p><b>For Homes</b></p>
        <ul>
          <li><b>General pest control</b> for cockroaches, ants, spiders and silverfish</li>
          <li><b>Rodent control</b>, including baiting, trapping and sealing entry points</li>
          <li><b>Termite inspections and treatment</b>, handy before you buy, sell or renovate</li>
          <li><b>Bed bug and flea treatment</b> to stop an infestation from spreading</li>
          <li><b>Wasp and bee nest removal</b> from eaves, sheds and outdoor areas</li>
        </ul>
        <p><b>For Businesses</b></p>
        <p>A single pest sighting can damage a cafe’s reputation overnight. We offer scheduled visits for restaurants, shops, offices, warehouses, childcare centres and aged care facilities. Treatments are planned around your opening hours, so your team can keep working as normal and your hygiene standards stay on track.</p>

        <h3><b>How Our Pest Control Works</b></h3>
        <p>We keep the process simple, so you always know what’s happening.</p>
        <ol>
          <li><b>Inspect.</b> We check inside, outside and in the roof void to find the real source of the problem.</li>
          <li><b>Quote.</b> You get a clear price and plan before any work begins.</li>
          <li><b>Treat.</b> We use targeted methods matched to your pest, not a one size fits all spray.</li>
          <li><b>Prevent.</b> We point out gaps, moisture and food sources that invite pests in.</li>
          <li><b>Follow up.</b> If you notice activity afterwards, get in touch and we’ll look into it.</li>
        </ol>

        <h3><b>Why Professional Treatment Beats DIY</b></h3>
        <p>Supermarket sprays are tempting, and they do kill what you can see. The trouble is that you rarely see the real problem.</p>
        <p>Take cockroaches. Spray a few and the rest simply scatter deeper into walls and cupboards, then return a few weeks later. Mice work the same way. A couple of traps might catch one, but if the entry point is still open, more will arrive. Termites are the most expensive mistake of all, because by the time damage is visible, a colony may have been feeding for months.</p>
        <p>Professional treatment goes after the nest or the entry point, uses methods that aren’t sold over the counter, and is applied where it actually works. Done properly, a single visit to the <b>pest control Melton</b> residents' book once is often cheaper than buying product after product that never solves it.</p>

        <h3><b>Why Melton Chooses 7 States Pest Control</b></h3>
        <p>Plenty of companies say similar things, so here’s what we actually focus on.</p>
        <ul>
          <li><b>Licensed and insured technicians</b> who treat your property with care</li>
          <li><b>Safety first.</b> We choose products and methods with kids and pets in mind, and we tell you exactly what to do before and after.</li>
          <li><b>Honest advice.</b> If you don’t need treatment yet, we’ll say so.</li>
          <li><b>Straight pricing.</b> You’ll know the cost before we begin.</li>
          <li><b>Local experience.</b> We understand the pests that come with Melton’s estates and rural edges.</li>
        </ul>

        <h3><b>Melton’s Pest Calendar</b></h3>
        <p>Pests follow the seasons, so a little timing helps.</p>
        <ul>
          <li><b>Summer:</b> ants, spiders, flies and wasps are at their busiest</li>
          <li><b>Autumn:</b> rodents and cockroaches head indoors as it cools down</li>
          <li><b>Winter:</b> mice and rats settle into roofs and garages</li>
          <li><b>Spring:</b> termites, fleas and ticks become active again</li>
        </ul>
        <p>Booking a check-up just before your peak season is usually easier on the budget than treating a full blown infestation. Many people searching for <b>pest control Melton</b> only start looking once the problem is serious, but an early inspection catches trouble while it’s still small.</p>

        <h4><b>What to Expect When You Call</b></h4>
        <p>Say you find droppings in the pantry on a Monday morning. You call us, describe what you’ve seen, and we book a visit. The technician checks the pantry, the roof void and the outside walls, finds a gap near a pipe entry, and explains the plan and the price. After treatment, you get a few simple steps to follow. No pressure and no confusing jargon.</p>
        <p>That’s what good <b>pest control Melton</b> service should feel like: clear, calm and focused on solving the problem, not selling you extras.</p>

        <h5><b>Areas We Service</b></h5>
        <p>
          Our team travels across Melton and nearby suburbs, including Melton South, Melton West, Kurunjang, Brookfield, Harkness, Eynesbury, Weir Views, Rockbank, Toolern Vale and Caroline Springs. We also provide{' '}
          <Link to="/location/point-cook"><b>pest control Point Cook</b></Link>,{' '}
          <Link to="/location/richmond"><b>pest control Richmond</b></Link> and{' '}
          <Link to="/location/st-albans"><b>pest control St Albans</b></Link>. If you’re close by and don’t see your suburb listed, give us a call and we’ll confirm.
        </p>

        <h6><b>Get Rid of Pests Today</b></h6>
        <p>
          Don’t wait for a small pest problem to turn into a big one. For reliable <b>pest control Melton</b> homes and businesses can trust, call 7 States Pest Control on <SitePhoneLink bold /> or fill in the quote form below. Tell us what you’re seeing, and we’ll help you take your space back.
        </p>
      </>
    ),
    faqs: [
      {
        question: '1. How long until I see results?',
        answer: 'Some pests, like ants, drop off within a day or two. Cockroaches and rodents can take a little longer, and your technician will tell you what to expect. If you still see activity after treatment, get in touch.',
      },
      {
        question: '2. Do I need regular treatments, or is a one-off enough?',
        answer: 'Sometimes a single visit solves it. For pests that return each season, like ants, spiders and rodents, a yearly or seasonal service keeps them under control. We’ll recommend what makes sense without pushing extras.',
      },
      {
        question: '3. Do you service businesses as well as homes?',
        answer: 'Yes. We work with cafes, shops, offices, warehouses, childcare centres and aged care facilities, with visits planned around your opening hours.',
      },
      {
        question: '4. Should I get a pest inspection before buying a house?',
        answer: 'It’s a smart move. A pre-purchase inspection can pick up termite activity or damage that a standard building inspection might miss, and it can save you from a very expensive surprise after settlement.',
      },
      {
        question: '5. What’s the difference between general pest control and a targeted treatment?',
        answer: 'General pest control covers the common household pests around the home. A targeted treatment focuses on one specific problem, like termites, rodents or a wasp nest, using methods designed for that pest.',
      },
    ],
  }

  return <LocationPageLayout {...data} />
}
