/** Pest Control Services dropdown — exact order from 7statespestcontrol.com.au live menu */
export const pestControlServices = [
  { label: 'Termite pest control', path: '/our-services/termite-pest-control' },
  { label: 'Fox Pest Control', path: '/our-services/fox-pest-control-in-melbourne' },
  { label: 'Rodent Control In Melbourne', path: '/rodent-control-in-melbourne' },
  { label: 'Wasp Nest Removal Melbourne', path: '/wasp-removal-melbourne' },
  { label: 'Solar Panel Bird Proofing', path: '/solar-panel-bird-proofing' },
  { label: 'Ant Pest Control', path: '/our-services/ant-pest-control' },
  { label: 'Bed Bug Treatment', path: '/our-services/bed-bug-treatment' },
  { label: 'Cockroach Control', path: '/our-services/cockroach-control' },
  { label: 'Mosquito Pest Control', path: '/our-services/mosquito-pest-control' },
  { label: 'Fly Control', path: '/our-services/fly-control' },
  { label: 'Mites control', path: '/our-services/mites-control' },
  { label: 'Moth control', path: '/our-services/moth-control' },
  { label: 'Possum Pest Control', path: '/our-services/possum-pest-control' },
  { label: 'Silverfish Treatment', path: '/our-services/silverfish-treatment' },
  { label: 'Spider Control Treatment', path: '/our-services/spider-control-treatment' },
  { label: 'End of Lease Pest Control', path: '/our-services/end-of-lease-pest-control' },
]

export const commercialServices = [
  { label: 'Office Pest Control', path: '/office-pest-control' },
  { label: 'Restaurant & Cafe Pest Control', path: '/restaurant-cafe-pest-control' },
  {
    label: 'School And Hospitality Facility Pest Control',
    path: '/school-and-hospitality-facility-pest-control',
  },
  {
    label: 'Warehouse and Factory Pest Control Services Melbourne',
    path: '/warehouse-and-factory-pest-control-services-melbourne',
  },
]

export const mainNav = [
  { label: 'About', path: '/about-us' },
  {
    label: 'Pest Control Services',
    path: '/our-services',
    megaMenuClass: 'services-mega-menu',
    children: pestControlServices,
  },
  {
    label: 'Our Offices',
    path: '#',
    children: [{ label: 'Melbourne', path: '/melbourne' }],
  },
  {
    label: 'Commercial Pest Control',
    path: '/commercial-pest-control',
    megaMenuClass: 'commercial-mega-menu',
    children: commercialServices,
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact-us' },
]

export const footerServicesCol1 = [
  { label: 'Ant Pest Control', path: '/our-services/ant-pest-control' },
  { label: 'Bed Bug Treatment', path: '/our-services/bed-bug-treatment' },
  { label: 'Cockroach Control', path: '/our-services/cockroach-control' },
  { label: 'Flea Treatment', path: '#' },
  { label: 'Fly Control', path: '/our-services/fly-control' },
]

export const footerServicesCol2 = [
  { label: 'Mites Control', path: '/our-services/mites-control' },
  { label: 'Moth Control', path: '/our-services/moth-control' },
  { label: 'Rodent Control', path: '/rodent-control-in-melbourne' },
  { label: 'Mosquito Pest Control', path: '/our-services/mosquito-pest-control' },
  { label: 'Silverfish Treatment', path: '/our-services/silverfish-treatment' },
]

export const footerServicesCol3 = [
  { label: 'Spider Control Treatment', path: '/our-services/spider-control-treatment' },
  { label: 'Wasp Control Services', path: '/wasp-removal-melbourne' },
  { label: 'End of Lease Pest Control', path: '/our-services/end-of-lease-pest-control' },
]

export const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/people/7-States-Pest-Control/61556724444090/',
    iconClass: 'icon icon-facebook',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/7statespestcontrol/',
    icon: 'instagram',
  },
  {
    label: 'Twitter',
    href: 'https://x.com/7statepest/',
    icon: 'twitter',
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@7StatePestControl',
    icon: 'youtube',
  },
]
