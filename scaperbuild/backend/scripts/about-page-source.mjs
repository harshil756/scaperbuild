#!/usr/bin/env node
/**
 * Source content for about-us CMS seed (original static page copy).
 * Used by extract-about-cms.mjs so re-sync works after the frontend is CMS-driven.
 */
export const ABOUT_PAGE_SOURCE = {
  hero: {
    breadcrumb: 'About Us',
    title: 'About Us',
    heading: 'Expert Pest Control Services in Melbourne',
    body: '<p><a href="/"><strong>7 States Pest Control</strong></a>&nbsp;is a pioneer in the pest control industry, with a proven track record of providing exceptional service to residential and commercial clients across Melbourne since last 7 year. Our team of highly trained and experienced technicians is equipped with the latest knowledge and techniques to tackle any pest problem effectively and safely.</p><p>We are committed to providing you with permanent solutions. With our focus on quality services and professional minds, we strive to deliver the best pest-controlling solutions.&nbsp;</p>',
    button_label: 'Find Services',
    button_url: '/pest-control-services',
  },
  quote_form: {
    title: 'Get A Free Quote Now!',
    subtitle: 'Have an enquiry? Leave us your details and we’ll call you back during business hours.',
    submit_text: 'Submit Quote',
  },
  stand_for: {
    counter_title: 'Projects Done',
    counter: { from: 0, to: 10000, display: '10,000', suffix: '+', duration: 2000 },
    image: '/assets/images/wan_f3b9d52e.jpg',
    image_alt: '7 States Pest Control',
    eyebrow: 'What We Stand For',
    title: 'Our Purpose and Principles',
    purpose: '<p>Our purpose is to protect people, property, and the environment from the threats posed by pests, ensuring peace of mind through safe and effective pest management.</p>',
    mission: {
      title: 'Our Mission',
      text: 'Our mission is to safeguard our clients’ homes and businesses from the threats posed by pests. We achieve this by providing comprehensive pest control solutions that are tailored to their specific needs. We are committed to using eco-friendly methods whenever possible and ensuring the safety of our clients, their families, and pets.',
    },
    vision: {
      title: 'Our Vision',
      text: 'We envision a Melbourne free from the worries and dangers associated with pests. Through our dedication to exceptional service, innovative solutions, and community education, we strive to be the leading pest control company in Melbourne, recognized for our reliability, expertise, and commitment to environmental responsibility.',
    },
  },
  cta: {
    title: 'Talk to us today',
    body: '<p>Do you have any specific questions about us, our services, or anything related to pest infestation issues? Call us today on&nbsp;<a href="tel:+61434660060">( +61 434 660 060 )</a>&nbsp;or use our contact form to connect with our&nbsp;<b>7 States Pest Control</b>. You can get answers to your questions, get upfront quotes for the&nbsp;<b>7 States Pest Control</b>&nbsp;issues, and receive high-quality tailored services.</p>',
    button_label: 'Contact Us',
    button_url: '/contact-us',
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Expert Pest Control Services We Offer in Melbourne',
    intro: '<p>We offer control and extermination services for a wide range of pests and help our customers to ensure a clean, safe, and healthy environment at their property. Our 7 States Pest Control services include the following:</p>',
    more_button_label: 'More Services',
    more_button_url: '/our-services',
    cards: [
      { slug: 'rodent', title: 'Rodent Control', price_text: 'From just $199', badge: '$199', alt: 'Rodent Pest Control', image: '/assets/images/Rodent-Control.png-1_0842a15c.webp' },
      { slug: 'cockroach', title: 'Cockroach Control', price_text: 'From just $149', badge: '$149', alt: 'cockroach pest control', image: '/assets/images/Cockroaches.png-1_56844a04.webp' },
      { slug: 'bed_bug', title: 'Bed Bug Treatment', price_text: 'From just $139', badge: '$139', alt: 'Bed Bug Pest Control', image: '/assets/images/Bed-Bug.png_1da7e9d8.webp' },
      { slug: 'ant', title: 'Ant Pest Control', price_text: 'From just $139', badge: '$139', alt: 'Ant Pest Control', image: '/assets/images/ant-colony-insect-animals-pest-png_73d1a8ca.png' },
    ],
  },
  why_choose: {
    eyebrow: 'Why Choose',
    title: '7 State Pest Control ?',
    intro: '<p>There are many reasons to choose 7 States Pest Control for your pest control needs. Here are just a few:</p>',
    list_left: ['Excellent Customer Service', 'Quick and Efficient Service', 'Affordable Pricing', 'Ongoing Support and Maintenance'],
    list_right: ['Experienced and Qualified Technicians', 'Safe and Eco-Friendly Solutions', 'Customized Treatment Plans', 'Guaranteed Results'],
  },
  process: {
    eyebrow: 'Our Process',
    title: 'Treatment Procedure at 7 State Pest Control',
    intro: '<p>At 7 State Pest Control, we follow a comprehensive and systematic approach to ensure effective pest management for your home or business. Our treatment procedure is designed to tackle the root of the problem, providing long-term solutions rather than temporary fixes.</p>',
    steps: [
      {
        slug: 'inspection',
        title: 'How We Inspect',
        body_html: '<p>It helps decide on the right options for treatments. We further check your personal belongings, including products. As soon as our inspection is finished, our pest controller will advise things about the infestation.</p><p>It helps decide on the right options for treatments. We further check your personal belongings, including products. As soon as our inspection is finished, our pest controller will advise things about the infestation.</p>',
        image: '/assets/images/Inspect.jpg-1_c97bf8a3.webp',
        alt: '7 States Pest Control',
      },
      {
        slug: 'treatment_plan',
        title: 'Treatment Planning',
        body_html: '<p>Depending on the finding, we create the treatment plan for the property that includes the process, guidelines, timelines, the expected outcome, etc. We prepare a treatment plan to:</p>',
        list_items: ['Reduce clutter', 'Clean your personal belongings', 'Eradicate bed bug habitats, etc.'],
        image: '/assets/images/End-of-Lease-2.png_0c28dc03.webp',
        alt: '7 States Pest Control',
      },
      {
        slug: 'eco_friendly',
        title: 'Committed to Eco-Friendly Pest Control Solutions',
        body_html: '<p>At our firm, we are dedicated to maintaining an eco-friendly approach in all our pest control practices. We believe in prioritizing the health and safety of our customers, which is why we refrain from using chemical treatments. Instead, we utilize non-chemical procedures to ensure that your home is not only free from pests but also safe for you and your family.</p><p>Our eco-friendly approach means we thoroughly address every infested material and corner of your house to effectively eliminate pests while minimizing any negative impact on the environment. We understand the importance of maintaining your daily routines, so we work efficiently to provide a bug-free environment with minimal disruption to your regular activities.</p>',
        image: '/assets/images/WhatsApp-Image-2024-08-28-at-15.35.06_bc7d2870-1-1024x1_359a34a8.jpg',
        alt: '7 States Pest Control',
      },
      {
        slug: 'preventive',
        title: 'What Are Some Preventive Steps 7 States Pest Control Professionals Recommend?',
        body_html: '<p>Our pest control treatment is a permanent solution, but it does not guarantee permanent results in the future. That means you must take some precautionary steps to control them in the environment. Don’t worry because we will provide you with some recommendations. Here are they:</p><ul><li>Apply surface pesticides on hiding spots but do not apply them on bedding</li><li>You must clean &amp; vacuum bedding &amp; surfaces thoroughly</li><li>Steam clean your carpets</li><li>Wash clothing and bedding with hot water &amp; dry it</li></ul><p>With our professional consultation, treating pest control becomes the savior solution.</p>',
      },
    ],
  },
  reviews: {
    eyebrow: 'Clients Reviews',
    title: '7 States Pest Control for Reliable Pest Management Solutions',
    subtitle: 'Reviews of Our Pest Control Services',
    rating_label: 'EXCELLENT',
    count_text: '<p>Based on&nbsp;45 reviews</p>',
  },
}
