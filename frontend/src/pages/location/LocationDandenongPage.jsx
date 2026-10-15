import { Link } from 'react-router-dom'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function LocationDandenongPage() {
  const data = {
    metaKey: 'location_dandenong',
    locationName: 'Dandenong',
    heroHeadline: 'Pest control in Dandenong, done right the first time.',
    heroSubhead:
      'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.',
    localHeading: 'Local pest control for Dandenong homes and businesses.',
    localLeadParagraphs: [
      'Are you searching for reliable and affordable pest control services in Dandenong? At 7 States Pest Control, we understand how frustrating and stressful it can be to deal with unwanted pests in your home or business.',
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
    whyHeading: 'Why Choose 7 States Pest Control in Dandenong?',
    whyParagraphs: [
      'When it comes to pest management, one-size-fits-all solutions simply do not work. Every property and every infestation is unique. At 7 States Pest Control, we take the time to carefully assess your pest issues and develop a customized treatment plan that delivers long-term results.',
      'Our approach focuses not just on eliminating existing pests but also on preventing them from returning.',
    ],
    whyTrustSubtext: "Here's why Dandenong residents and businesses trust us:",
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
    servicesTitle: 'Pest treatments we offer in Dandenong',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Pest Control Services in Dandenong for Homes and Businesses',
    previewContent: (
      <>
        <p>
        Are you searching for reliable and affordable pest control services in Dandenong? At{' '}
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
        <h3><b>Our Complete Pest Control Services in Dandenong</b></h3>
                    <p>We offer comprehensive pest-management services across Dandenong and surrounding suburbs — for a wide spectrum of pests and property types.</p>
                    <h4><b>Ant Control &amp; Termite Treatment in Dandenong</b></h4>
                    <p>Ants may start as a minor annoyance, but once they invade kitchens, pantries, or workplaces, they can become a major problem. Our ant control in Dandenong targets colonies at the source to stop regrowth.</p>
                    <p>Termites, however, pose a serious risk as they silently damage structural elements over time. Our termite inspection and termite-treatment services in Dandenong provide strong protection against hidden termite activity.</p>
                    <h4><b>Rodent Control in Dandenong</b></h4>
                    <p>Rats and mice are dangerous — they can chew wires, damage insulation or furniture, contaminate food, and spread diseases. Our rodent control Dandenong services remove rodents quickly and safely and include prevention strategies to keep them away.</p>
                    <h4><b>Bed Bug Control in Dandenong</b></h4>
                    <p>Bed bugs hide inside mattresses, furniture, and even clothing, making them difficult to eliminate without professional help. Our bed bug removal Dandenong service treats all life stages of bed bugs, ensuring complete elimination so you can rest easy again.</p>
                    <h4><b>Spider Removal Services in Dandenong</b></h4>
                    <p>Whether common or potentially harmful, spiders are not welcome inside your home or business. Our spider pest control Dandenong services eliminate existing spiders and apply preventive treatments to stop future appearances.</p>
                    <h4><b>Cockroach Removal in Dandenong</b></h4>
                    <p>Cockroaches are notoriously tough to eliminate, multiply quickly, and contaminate surfaces and food. Our cockroach control Dandenong service attacks infestations at their origin and helps prevent recurring problems.</p>
                    <h4><b>Wasp Removal in Dandenong</b></h4>
                    <p>Wasps, especially near nests, can pose a serious threat around kids, staff, or customers. Our wasp removal Dandenong services safely remove nests and apply preventive measures to keep your property safe.</p>
                    <h4><b>Long-Term Benefits of Professional Pest Control</b></h4>
                    <ul>
                      <li>Protection against costly property damage</li>
                      <li>Lower risk of diseases spread by pests</li>
                      <li>Treatments that are safe for humans, pets, and the environment</li>
                      <li>Customised pest management plans suited to your property</li>
                      <li>Long-term prevention and complete peace of mind</li>
                    </ul>
                    <h4><b>Protect Your Property with 7 States Pest Control</b></h4>
                    <p>At 7 States Pest Control, we’re dedicated to helping Dandenong homes and businesses stay pest-free. Whether you’re facing ants, termites, cockroaches, spiders, rodents, bed bugs, or wasps — we offer reliable and effective pest-control services across Dandenong and nearby suburbs.</p>
                    <p>📞 Call us at <SitePhoneLink bold /> today to book an inspection and begin your first step toward a clean, safe, and pest-free property.</p>
      </>
    ),
    faqs: [
      {
            "question": "1. What pests do you treat in Dandenong?",
            "answer": "We treat ants, cockroaches, spiders, rodents, termites, bed bugs, wasps, and more — covering both minor and serious infestations across Dandenong."
      },
      {
            "question": "2. How quickly can you respond to a pest issue?",
            "answer": "We aim to provide same-day or next-day service for most Dandenong bookings. Urgent infestations are prioritised."
      },
      {
            "question": "3. Are your treatments safe for families and pets?",
            "answer": "Yes. All our pest-control treatments are eco-friendly, approved, and safe when used correctly, following strict safety standards."
      },
      {
            "question": "4. How can I book pest-control services in Dandenong?",
            "answer": "You can call us at +61 434 660 060, submit an online enquiry, or send a message to schedule an inspection."
      },
      {
            "question": "5. Can pest infestations be prevented?",
            "answer": "Yes. Regular inspections, sealing possible entry points, good hygiene and waste disposal, and periodic professional treatments significantly reduce the risk of pests. We also offer custom prevention plans based on your property’s needs."
      }
],
  }

  return <LocationPageLayout {...data} />
}
