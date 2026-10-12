import { Link } from 'react-router-dom'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function LocationClaytonPage() {
  const data = {
    metaKey: 'location_clayton',
    locationName: 'Clayton',
    heroHeadline: 'Pest control in Clayton, done right the first time.',
    heroSubhead:
      'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.',
    localHeading: 'Local pest control for Clayton homes and businesses.',
    localLeadParagraphs: [
      'Are you searching for reliable and affordable pest control services in Clayton? At 7 States Pest Control, we understand how frustrating and stressful it can be to deal with unwanted pests in your home or business.',
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
    whyHeading: 'Why Choose 7 States Pest Control in Clayton?',
    whyParagraphs: [
      'When it comes to pest management, one-size-fits-all solutions simply do not work. Every property and every infestation is unique. At 7 States Pest Control, we take the time to carefully assess your pest issues and develop a customized treatment plan that delivers long-term results.',
      'Our approach focuses not just on eliminating existing pests but also on preventing them from returning.',
    ],
    whyTrustSubtext: "Here's why Clayton residents and businesses trust us:",
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
    servicesTitle: 'Pest treatments we offer in Clayton',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Pest Control Services in Clayton for Homes and Businesses',
    previewContent: (
      <>
        <p>
        Are you searching for reliable and affordable pest control services in Clayton? At{' '}
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
        <h3><b>Our Comprehensive Pest Control Services in Clayton</b></h3>
                    <p>We provide complete pest management solutions for homes, offices, restaurants, warehouses, and commercial properties. From common pests to severe infestations, we have specialised treatments for all.</p>
                    <h4><b>Ant Control &amp; Termite Treatment in Clayton</b></h4>
                    <p>Ants may look harmless, but once they invade kitchens, pantries, or workplaces, they become a nuisance. We target ant colonies at the source and ensure they don’t return.</p>
                    <p>Termites are far more dangerous, causing structural damage quietly and quickly. Our termite inspection and treatment services in Clayton offer strong protection to keep your property safe from hidden termite activity.</p>
                    <h4><b>Rodent Control in Clayton</b></h4>
                    <p>Rats and mice are not just unhygienic — they are destructive. They chew wires, damage insulation, contaminate food, and spread harmful diseases. Our <Link to="/rodent-control-in-melbourne"><b>rodent control in Clayton</b></Link> removes infestations quickly and safely while applying long-term prevention strategies.</p>
                    <h4><b>Bed Bug Control in Clayton</b></h4>
                    <p>Bed bugs hide in mattresses, furniture, and even clothing, making them difficult to remove without professional help. Our <Link to="/our-services-bed-bug-treatment"><b>bed bug control in Clayton</b></Link> targets every stage of the infestation, ensuring complete elimination for a healthy and comfortable environment.</p>
                    <h4><b>Spider Removal Services in Clayton</b></h4>
                    <p>Clayton homes often deal with both harmless and venomous spider species. Our <Link to="/our-services-spider-control-treatment"><b>spider removal services in Clayton</b></Link> safely eliminate spiders and apply preventative measures to stop them from returning.</p>
                    <h4><b>Cockroach Removal in Clayton</b></h4>
                    <p>Cockroaches are one of the most stubborn pests in Clayton. They multiply fast, contaminate food, and carry harmful germs. Our cockroach control services attack the infestation at its source and prevent future outbreaks.</p>
                    <h4><b>Wasp Removal in Clayton</b></h4>
                    <p>Wasps can be aggressive and their stings can be dangerous, especially for allergic individuals. Our <Link to="/wasp-removal-melbourne"><b>wasp removal in Clayton</b></Link> safely removes nests and applies preventative treatments to keep your property secure.</p>
                    <h4><b>Long-Term Benefits of Professional Pest Control</b></h4>
                    <ul>
                      <li>Protection from costly property damage</li>
                      <li>Reduced risk of diseases carried by pests</li>
                      <li>Compliance with safety and environmental requirements</li>
                      <li>Tailored pest strategies based on your property</li>
                      <li>Long-term prevention for a pest-free environment</li>
                    </ul>
                    <h4><b>Protect Your Property with 7 States Pest Control</b></h4>
                    <p>At 7 States Pest Control, our mission is to keep your home and business pest-free. From ants and cockroaches to termites, rodents, spiders, and wasps, we deliver reliable pest control services across Clayton and surrounding Melbourne suburbs.</p>
                    <p>Call us at <SitePhoneLink bold /> today to book an inspection and take the first step toward a clean, safe, and pest-free property.</p>
      </>
    ),
    faqs: [
      {
            "question": "1. What pests do you treat in Clayton?",
            "answer": "We treat ants, cockroaches, spiders, rodents, termites, bed bugs, wasps, and more. Our experts handle both minor and severe infestations found in Clayton properties."
      },
      {
            "question": "2. How quickly can you respond to a pest issue?",
            "answer": "We offer same-day or next-day service for most Clayton bookings. Severe infestations are prioritised for urgent treatment."
      },
      {
            "question": "3. Are your treatments safe for kids and pets?",
            "answer": "Yes. All our pest control treatments are eco-friendly, approved, and safe when applied correctly. We follow strict safety standards."
      },
      {
            "question": "4. How can I book a pest control service in Clayton?",
            "answer": "You can call us at +61 434 660 060 submit an online enquiry, or message us directly to schedule an inspection."
      },
      {
            "question": "5. Can pests be prevented?",
            "answer": "Absolutely. Regular inspections, sealing entry points, good hygiene, waste management, and routine professional treatments help prevent pests. We offer customised prevention plans for long-term protection in Clayton."
      }
],
  }

  return <LocationPageLayout {...data} />
}
