import { Link } from 'react-router-dom'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function LocationCranbournePage() {
  const data = {
    metaKey: 'location_cranbourne',
    locationName: 'Cranbourne',
    heroHeadline: 'Pest control in Cranbourne, done right the first time.',
    heroSubhead:
      'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.',
    localHeading: 'Local pest control for Cranbourne homes and businesses.',
    localLeadParagraphs: [
      'Are you searching for reliable and affordable pest control services in Cranbourne? At 7 States Pest Control, we understand how frustrating and stressful it can be to deal with unwanted pests in your home or business.',
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
    whyHeading: 'Why Choose 7 States Pest Control in Cranbourne?',
    whyParagraphs: [
      'When it comes to pest management, one-size-fits-all solutions simply do not work. Every property and every infestation is unique. At 7 States Pest Control, we take the time to carefully assess your pest issues and develop a customized treatment plan that delivers long-term results.',
      'Our approach focuses not just on eliminating existing pests but also on preventing them from returning.',
    ],
    whyTrustSubtext: "Here's why Cranbourne residents and businesses trust us:",
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
    servicesTitle: 'Pest treatments we offer in Cranbourne',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Pest Control Services in Cranbourne for Homes and Businesses',
    previewContent: (
      <>
        <p>
        Are you searching for reliable and affordable pest control services in Cranbourne? At{' '}
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
        <h3><b>Our Complete Pest Control Services in Cranbourne</b></h3>
                    <p>We provide comprehensive pest-management services across Cranbourne and nearby suburbs — for a wide range of pests and property types.</p>
                    <h4><b>Ant Control &amp; Termite Treatment in Cranbourne</b></h4>
                    <p>No matter how harmless ants may seem initially, they can quickly invade kitchens, pantries, and workplaces. Our ant control targets the colony at the source so you don’t see them again.</p>
                    <p>Termites, however, are even more dangerous — silently causing structural damage over time. Our termite inspection and termite-treatment services in Cranbourne offer robust protection against hidden termite activity.</p>
                    <h4><b>Rodent Control in Cranbourne</b></h4>
                    <p>Rats and mice are harmful — they chew wires, damage insulation, ruin food supplies, and pose health hazards. Our rodent-control services in Cranbourne remove rodents fast and safely, and we implement preventative strategies to keep them from returning.</p>
                    <h4><b>Bed Bug Control in Cranbourne</b></h4>
                    <p>Bed bugs hide deep in mattresses, furniture, and even clothing — making them hard to eliminate without professional help. Our bed-bug removal Cranbourne service treats all life stages, ensuring complete eradication so you can enjoy a clean, healthy living or working space again.</p>
                    <h4><b>Spider Removal Services in Cranbourne</b></h4>
                    <p>From harmless to potentially venomous, spiders are unwanted in homes or offices. Our spider-control services in Cranbourne eliminate current infestations and apply preventive treatments to keep them away.</p>
                    <h4><b>Cockroach Removal in Cranbourne</b></h4>
                    <p>Cockroaches are notoriously hard to remove and multiply fast, contaminating surfaces and food. Our cockroach-control Cranbourne service attacks infestations at their source and helps prevent future outbreaks.</p>
                    <h4><b>Wasp Removal in Cranbourne</b></h4>
                    <p>Wasps — especially with nests — can pose significant danger to people with allergies or children. Our wasp-exterminator Cranbourne services safely remove nests and apply preventive treatments so your premises remain safe.</p>
                    <h4><b>Long-Term Benefits of Professional Pest Control</b></h4>
                    <ul>
                      <li>Protection from costly property damage</li>
                      <li>Reduced risk of pest-related diseases</li>
                      <li>Treatments that are safe for humans, pets, and the environment</li>
                      <li>Customised pest-management strategies tailored to your property</li>
                      <li>Long-term prevention for complete peace of mind</li>
                    </ul>
                    <h4><b>Protect Your Property with 7 States Pest Control</b></h4>
                    <p>At 7 States Pest Control, we’re committed to helping Cranbourne homes and businesses stay pest-free. Whether you’re dealing with ants, cockroaches, spiders, termites, rodents, bed bugs, or wasps — we offer reliable and effective pest control services across Cranbourne and surrounding suburbs.</p>
                    <p>📞 Call us at <SitePhoneLink bold /> today to book an inspection and take the first step toward a clean, safe, and pest-free property.</p>
      </>
    ),
    faqs: [
      {
            "question": "1. What pests do you treat in Cranbourne?",
            "answer": "We treat ants, cockroaches, spiders, termites, rodents, bed bugs, wasps, and more — covering both minor issues and severe infestations."
      },
      {
            "question": "2. How soon can you respond to a pest issue?",
            "answer": "We offer same-day or next-day service for most Coburg bookings. Severe infestations are prioritised for urgent treatment."
      },
      {
            "question": "3. Are your treatments safe for kids and pets?",
            "answer": "Yes — all our treatments are eco-friendly, approved, and safe when applied correctly, following strict safety standards."
      },
      {
            "question": "4. How can I book pest control services in Cranbourne?",
            "answer": "You can call us at +61 434 660 060, submit an online enquiry through our website, or message us directly to schedule an inspection."
      },
      {
            "question": "5. Can pests be prevented?",
            "answer": "Absolutely. Regular inspections, sealing entry points, proper hygiene and waste disposal, and routine professional pest treatments significantly reduce pest problems. We also offer customised prevention plans based on your property’s needs."
      }
],
  }

  return <LocationPageLayout {...data} />
}
