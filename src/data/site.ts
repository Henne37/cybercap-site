// Central site config — edit contact details here before launch.
export const site = {
  name: 'CyberCap',
  tagline: 'Cybersecurity & compliance advice for European businesses.',
  email: 'info@cybercap.be',
  address: 'Belgium',
  vat: 'BE 1001.430.572',
  // --- Lead capture config ---
  // 1) Formspree: create a free form at https://formspree.io and paste the form ID (the part
  //    after /f/ in your endpoint, e.g. "xmyzabcd"). Leave blank to disable submission.
  formspreeId: 'mzdlkryq',
  // 2) Cal.com: your booking link slug, e.g. "cybercap/intro-call". Leave blank to hide the embed.
  calLink: '',
  // Fallback booking URL used if no calLink is set (e.g. your full Cal.com/Calendly page).
  bookingUrl: 'https://cal.com/',
  frameworks: ['ISO/IEC 27001', 'NIS2', 'DORA', 'GDPR', 'CyberFundamentals', 'ISO 9001'],
  sectors: ['Aviation', 'Fintech', 'Insurance', 'Telecom', 'IT services'],
};

export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    slug: 'compliance-assessments',
    title: 'Compliance Assessments & Audits',
    short:
      'Know exactly where you stand. We measure your security and compliance against the frameworks you’re held to, and hand you a clear, prioritized roadmap.',
    icon: 'search',
  },
  {
    slug: 'compliance-implementation',
    title: 'Compliance Implementation',
    short:
      'We don’t just point at the gaps — we close them. From policies to controls to certification-ready evidence, we do the work alongside your team.',
    icon: 'build',
  },
  {
    slug: 'operational-cybersecurity',
    title: 'Operational Cybersecurity & Manpower',
    short:
      'Ongoing security expertise without the cost of a full hire. Advisory, virtual CISO, and hands-on support that flexes to your needs.',
    icon: 'shield',
  },
];
