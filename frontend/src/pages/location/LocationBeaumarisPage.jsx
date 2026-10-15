import { Link } from 'react-router-dom'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function LocationBeaumarisPage() {
  const data = {
    metaKey: 'location_beaumaris',
    locationName: 'Beaumaris',
    heroHeadline: 'Pest control in Beaumaris, done right the first time.',
    heroSubhead:
      'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.',
    localHeading: 'Local pest control for Beaumaris homes and businesses.',
    localLeadParagraphs: [
      'Are you searching for reliable and affordable pest control services in Beaumaris? At 7 States Pest Control, we understand how frustrating and stressful it can be to deal with unwanted pests in your home or business.',
      'From tiny ants and cockroaches to destructive termites, rodents, and bed bugs, pests can quickly disrupt your peace of mind and cause serious property damage if not addressed on time. We create a safe, clean, and pest-free environment backed by proven results.',
    ],
    signsTitle: 'Small Signs That Something Has Already Moved In',
    signsSubtitle: 'Pests rarely announce themselves. The clues are usually small:',
    signsList: [
      "Tiny dark droppings in drawers, pantries or along skirting boards",
      "Thin mud lines running up a wall or under the house",
      "Timber that sounds hollow when you tap it",
      "A stale, oily smell in a cupboard that never goes away",
      "Chewed packaging, gnawed wiring or shredded paper",
      "A pet scratching far more than usual"
],
    whyHeading: 'Why Choose 7 States Pest Control in Beaumaris?',
    whyParagraphs: [
      'When it comes to pest management, one-size-fits-all solutions simply do not work. Every property and every infestation is unique. At 7 States Pest Control, we take the time to carefully assess your pest issues and develop a customized treatment plan that delivers long-term results.',
      'Our approach focuses not just on eliminating existing pests but also on preventing them from returning.',
    ],
    whyTrustSubtext: "Here's why Beaumaris residents and businesses trust us:",
    whyBenefits: [
      {
            "num": "01",
            "text": "Experienced and certified technicians"
      },
      {
            "num": "02",
            "text": "Eco-friendly and safe pest control treatments"
      },
      {
            "num": "03",
            "text": "Custom pest management plans tailored to your property"
      },
      {
            "num": "04",
            "text": "Affordable pricing without compromising on quality"
      },
      {
            "num": "05",
            "text": "Fast, responsive, and friendly customer service"
      }
],
    servicesTitle: 'Pest treatments we offer in Beaumaris',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Pest Control Services in Beaumaris for Homes and Businesses',
    previewContent: (
      <>
        <p>
        Are you searching for reliable and affordable pest control services in Beaumaris? At{' '}
        <Link to="/"><b>7 States Pest Control</b></Link>, we understand how frustrating and stressful it can be to deal with unwanted pests in your home or business.
      </p>
      <p>
        From tiny ants and cockroaches to destructive termites, rodents, and bed bugs, pests can quickly disrupt your peace of mind and cause serious property damage if not addressed on time. That’s why our mission is simple — to create a safe, clean, and pest-free environment for you, your family, and your customers.
      </p>
      <p>
        With years of experience in the industry, our professional pest control team offers tailor-made solutions for every situation. Whether you are facing a sudden infestation or want to safeguard your property with preventative measures, we’ve got you covered.
      </p>
      </>
    ),
    expandedContent: (
      <>
        <h3><b>Our Key Pest Control Services in Beaumaris</b></h3>
                    <p><span>We provide a comprehensive range of </span><b>residential and commercial pest control services</b><span> in Beaumaris. Whether you're dealing with a minor pest issue or a severe infestation, our trained technicians deliver fast, effective, and long-lasting solutions.</span></p>
                    <p><b>Wasp Removal in Beaumaris</b></p>
                    <p><span>Wasps can be extremely aggressive, especially when their nests are disturbed. Our </span><b>wasp removal service in Beaumaris</b><span> ensures safe and efficient nest elimination. We:</span></p>
                    <ul>
                      <li>Identify wasp activity and nest locations</li>
                      <li>Use professional-grade, targeted treatments</li>
                      <li>Safely remove nests to protect your family</li>
                      <li>Provide expert tips to prevent future wasp problems</li>
                    </ul>
                    <p><span>Our services follow Melbourne-wide competitive pricing and ensure fast, effective wasp control.</span></p>
                    <p><b>Rodent Control Beaumaris</b></p>
                    <p><span>Rats and mice can cause structural damage, chew electrical wiring, contaminate food, and spread disease. Our </span><b>rodent control in Beaumaris</b><span> includes:</span></p>
                    <ul>
                      <li><b>Inspection:</b> Checking for droppings, nesting sites, damage, and entry points</li>
                      <li><b>Trapping &amp; baiting:</b> Using safe, regulated products and methods</li>
                      <li><b>Exclusion:</b> Sealing holes, cracks, and access gaps to prevent new rodents</li>
                      <li><b>Follow-up:</b> Ensuring rodents don’t return</li>
                    </ul>
                    <p><span>Our solutions are safe, effective, and environmentally responsible.</span></p>
                    <p><b>Spider Control Beaumaris</b></p>
                    <p><span>Spiders commonly infest corners, ceilings, roof spaces, and gardens. Our </span><b>spider control in Beaumaris</b><span> includes:</span></p>
                    <ul>
                      <li>Species identification to assess danger</li>
                      <li>Indoor &amp; outdoor treatments with residual sprays</li>
                      <li>Removal of webs and active spiders</li>
                      <li>Preventative treatments to reduce future spider activity</li>
                    </ul>
                    <p><span>We ensure your home stays clear of spiders long-term.</span></p>
                    <p><b>Bed Bug Treatment Beaumaris</b></p>
                    <p><span>Bed bugs are difficult to eliminate without expert treatment. Our </span><b>bed bug treatment in Beaumaris</b><span> includes:</span></p>
                    <ul>
                      <li><b>Thorough inspection:</b> Identifying hiding spots in furniture, mattresses, curtains, and cracks</li>
                      <li><b>Advanced treatment:</b> Heat or insecticide treatments targeting eggs, nymphs, and adults</li>
                      <li><b>Follow-up checks:</b> Ensuring complete bed bug eradication</li>
                      <li><b>Prevention guidance:</b> Practical steps to avoid future infestations</li>
                    </ul>
                    <p><span>We use safe, responsible techniques to ensure effective results without compromising your safety.</span></p>
                    <h4><span>How Our Process Works</span></h4>
                    <ul>
                      <li><b>Free Inspection &amp; Quote:</b> Detailed assessment with no hidden charges</li>
                      <li><b>Customized Treatment Plan:</b> Tailored according to the pest issue and your property layout</li>
                      <li><b>Safe &amp; Effective Treatment:</b> Industry-approved solutions for maximum safety and long-term results</li>
                      <li><b>Prevention &amp; Follow-up:</b> Expert advice and ongoing support to keep your Beaumaris home pest-free</li>
                    </ul>
                    <h4><span>Why Beaumaris Residents Need Pest Control</span></h4>
                    <p>Beaumaris’s leafy surroundings and older homes create ideal conditions for pests:</p>
                    <ul>
                      <li>Rodents shelter in roof voids, sheds, and wall cavities</li>
                      <li>Wasps build nests under eaves and in garden areas</li>
                      <li>Spiders thrive in corners, garages, and outdoor structures</li>
                      <li>Bed bugs can enter homes through luggage or second-hand furniture</li>
                    </ul>
                    <p><span>Ignoring these issues can lead to property damage, health risks, and discomfort. Professional pest control offers long-term protection for your home and family.</span></p>
                    <h4><span>Our Commitment to Beaumaris</span></h4>
                    <p><span>At </span><b>7 States Pest Control</b><span>, we proudly serve Beaumaris with safe, reliable, and effective pest control solutions. We prioritize:</span></p>
                    <ul>
                      <li>Fast and dependable pest removal</li>
                      <li>Respect for your privacy and property</li>
                      <li>Safe treatments for pets and families</li>
                      <li>Long-term prevention and support</li>
                    </ul>
                    <p><span>Ready to make your Beaumaris home pest-free?</span></p>
                    <p><span>Call us today at </span><SitePhoneLink bold /><span> or email </span><b>7statespestcontrol@gmail.com</b><span> for expert pest control assistance.</span></p>
      </>
    ),
    faqs: [
      {
            "question": "1. What pests do you treat in Beaumaris?",
            "answer": "We provide comprehensive pest control in Beaumaris, covering wasps, rodents, spiders, bed bugs, ants, termites, cockroaches, fleas, and more. Our team is trained to handle both residential and commercial pest issues."
      },
      {
            "question": "2. How quickly can you respond to a pest problem?",
            "answer": "We offer same-day or next-day service in Beaumaris. For urgent issues like wasp nests or rodent infestations, we aim to reach your property as quickly as possible."
      },
      {
            "question": "3. Are your pest control treatments safe for kids and pets?",
            "answer": "Yes. All our treatments are eco-friendly, non-toxic, and safe for children and pets. We follow strict safety guidelines and use only approved products."
      },
      {
            "question": "4 . How can I book a pest control service in Beaumaris?",
            "answer": "You can call us, send an email, or request a quote directly through our website. We’ll schedule a convenient time and provide a free inspection and competitive quote."
      },
      {
            "question": "5. Can I prevent pests on my property?",
            "answer": "Yes. Keeping your home clean, sealing cracks, managing rubbish properly, trimming gardens, and storing food securely all help prevent pests. We provide tailored prevention advice after each treatment."
      }
],
  }

  return <LocationPageLayout {...data} />
}
