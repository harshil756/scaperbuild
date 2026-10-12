import { Link } from 'react-router-dom'
import SitePhoneLink from '../../components/SitePhoneLink.jsx'
import LocationPageLayout from '../../components/location/LocationPageLayout.jsx'

export default function LocationDoreenPage() {
  const data = {
    metaKey: 'location_doreen',
    locationName: 'Doreen',
    heroHeadline: 'Pest control in Doreen, done right the first time.',
    heroSubhead:
      'Cockroaches, termites, rodents, spiders and bed bugs — gone, with an eco-friendly treatment plan built around your property, not a one-size-fits-all spray.',
    localHeading: 'Local pest control for Doreen homes and businesses.',
    localLeadParagraphs: [
      'Are you searching for reliable and affordable pest control services in Doreen? At 7 States Pest Control, we understand how frustrating and stressful it can be to deal with unwanted pests in your home or business.',
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
    whyHeading: 'Why Choose 7 States Pest Control in Doreen?',
    whyParagraphs: [
      'When it comes to pest management, one-size-fits-all solutions simply do not work. Every property and every infestation is unique. At 7 States Pest Control, we take the time to carefully assess your pest issues and develop a customized treatment plan that delivers long-term results.',
      'Our approach focuses not just on eliminating existing pests but also on preventing them from returning.',
    ],
    whyTrustSubtext: "Here's why Doreen residents and businesses trust us:",
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
    servicesTitle: 'Pest treatments we offer in Doreen',
    servicesSubtitle: 'Every plan starts with an inspection, so the treatment matches what is actually on your property.',
    detailedTitle: 'Pest Control Services in Doreen for Homes and Businesses',
    previewContent: (
      <>
        <p>
        Are you searching for reliable and affordable pest control services in Doreen? At{' '}
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
        <h3><b>Our Comprehensive Pest Control Services in Doreen</b></h3>
                    <p>We provide a wide range of pest management solutions for homes, offices, restaurants, warehouses, and more. Our services include general pest control for common invaders as well as specialised treatments for stubborn infestations.</p>
                    <h4><b>Ant Control &amp; Termite Treatment in Doreen</b></h4>
                    <p>Ants may seem small, but when they invade kitchens, pantries, and workplaces, they can become a serious nuisance. Our expert ant control services target the root of the infestation and prevent colonies from reappearing.</p>
                    <p>Termites are silent destroyers that can cause extensive structural damage before you even realise they are present. Our termite inspection and treatment services in Doreen provide powerful protection, ensuring your property remains safe.</p>
                    <h4><b>Rodent Control in Doreen</b></h4>
                    <p>Rodents are unhygienic and dangerous to both property and health. They chew wires, damage insulation, contaminate food, and spread diseases. Our <Link to="/rodent-control-in-melbourne"><b>rodent control in Doreen</b></Link> services eliminate rats and mice quickly and safely while ensuring they don’t return.</p>
                    <h4><b>Bed Bug Control in Doreen</b></h4>
                    <p>Bed bugs are one of the most difficult pests to eliminate without professional help. These tiny insects hide in mattresses, furniture, and even clothing. Our <Link to="/our-services-bed-bug-treatment"><b>bed bug control in Doreen</b></Link> treatments target every stage of the bed bug lifecycle for complete eradication.</p>
                    <h4><b>Spider Removal Services in Doreen</b></h4>
                    <p>Australia is home to a wide variety of spiders, ranging from harmless to potentially dangerous species. Our <Link to="/our-services-spider-control-treatment"><b>spider removal services in Doreen</b></Link> provide fast, safe, and reliable solutions for homes and businesses.</p>
                    <h4><b>Cockroach Removal in Doreen</b></h4>
                    <p>Cockroaches are among the most common and persistent pests in Doreen. They multiply quickly, contaminate food, and carry harmful bacteria. Our cockroach control services target infestations at the source for long-term prevention.</p>
                    <h4><b>Wasp Removal in Doreen</b></h4>
                    <p>Wasps can become aggressive, especially when nests are disturbed. Our <Link to="/wasp-removal-melbourne"><b>wasp removal in Doreen</b></Link> services provide fast, safe, and effective solutions to protect your family, staff, and visitors.</p>
                    <h4><b>Long-Term Benefits of Professional Pest Control</b></h4>
                    <ul>
                      <li>Protection of your property from costly damage</li>
                      <li>Reduced health risks from pests and their droppings</li>
                      <li>Compliance with safety and environmental regulations</li>
                      <li>Customised strategies that address your unique needs</li>
                      <li>Preventative measures for long-term pest-free living</li>
                    </ul>
                    <h4><b>Protect Your Property with 7 States Pest Control</b></h4>
                    <p>At 7 States Pest Control, our goal is simple: to keep your home and business pest-free. From ants and cockroaches to specialised treatments for rodents, bed bugs, spiders, and wasps, we deliver effective solutions across Doreen and surrounding Melbourne suburbs.</p>
                    <p>📞 Call us at <SitePhoneLink bold /> today to schedule an inspection and take the first step toward a safe, clean, and pest-free property.</p>
      </>
    ),
    faqs: [
      {
            "question": "1. What pests do you treat in Doreen?",
            "answer": "We provide professional pest control solutions for ants, cockroaches, spiders, rodents, termites, bed bugs, wasps, and more. Whether it’s a minor issue or a major infestation, our team handles all types of pests commonly found in Doreen homes and businesses."
      },
      {
            "question": "2. How quickly can you respond to a pest problem?",
            "answer": "We offer fast and reliable pest control services in Doreen. In most cases, our technicians can attend same-day or next-day, depending on availability and urgency. For severe infestations, we prioritise immediate response."
      },
      {
            "question": "3. Are your pest control treatments safe for kids and pets?",
            "answer": "Yes. Our treatments are eco-friendly, safe, and designed to protect your family and pets. We use approved products and follow strict application guidelines to ensure a safe environment after treatment."
      },
      {
            "question": "4. How can I book a pest control service in Doreen?",
            "answer": "Booking is simple. You can call us directly at +61 434 660 060 fill out our online enquiry form, or message us to schedule an inspection. Our team will guide you through the process and recommend the best treatment plan for your situation."
      },
      {
            "question": "5. Can I prevent pests on my property?",
            "answer": "Yes. Regular inspections, sealing entry points, proper waste management, maintaining cleanliness, and routine professional treatments can help keep pests away. We also offer customised prevention plans for long-term protection in Doreen."
      }
],
  }

  return <LocationPageLayout {...data} />
}
