// Full content for each pillar page, keyed by slug.
export interface ServiceDetail {
  title: string;
  eyebrow: string;
  lead: string;
  who: string[];
  what: { t: string; d: string }[];
  outcome: string;
  frameworks: string;
  ctaLabel: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  'compliance-assessments': {
    title: 'Compliance Assessments & Audits',
    eyebrow: 'Pillar 1',
    lead: 'You can’t fix what you can’t see. We give you an honest, framework-based picture of where your security and compliance actually stand — and a roadmap to close the gaps.',
    who: [
      'Companies that fall under NIS2 and need to understand their obligations.',
      'Organizations preparing for ISO/IEC 27001 certification.',
      'Financial entities scoping DORA requirements.',
      'Anyone facing a customer security questionnaire, due-diligence request, or audit.',
    ],
    what: [
      { t: 'Gap analysis', d: 'Against your target framework (NIS2, ISO 27001, GDPR, DORA).' },
      { t: 'Risk assessment', d: 'What’s actually most likely to hurt you, and how badly.' },
      { t: 'Maturity scoring', d: 'Benchmark today and track progress over time.' },
      { t: 'Controls review', d: 'Of your existing technical and organizational measures.' },
    ],
    outcome: 'A clear assessment report in plain language: where you stand, what the gaps are, and a prioritized roadmap ranked by risk and effort — so you know exactly what to tackle first.',
    frameworks: 'NIS2 · GDPR · ISO/IEC 27001 · DORA · CyberFundamentals',
    ctaLabel: 'Request an assessment',
  },
  'compliance-implementation': {
    title: 'Compliance Implementation',
    eyebrow: 'Pillar 2',
    lead: 'A report on a shelf doesn’t make you compliant. We roll up our sleeves and help you put real policies, controls and evidence in place — until you’re genuinely audit-ready.',
    who: [
      'Companies with a gap analysis or audit findings they now need to act on.',
      'Organizations pursuing ISO/IEC 27001 certification.',
      'Businesses that need to demonstrate NIS2 / DORA / GDPR compliance to customers or regulators.',
    ],
    what: [
      { t: 'ISMS build-out', d: 'An Information Security Management System that fits how you actually work.' },
      { t: 'Policies & procedures', d: 'Practical, usable documentation — not 80-page PDFs nobody reads.' },
      { t: 'Control implementation', d: 'Technical and organizational measures, with your team or ours.' },
      { t: 'Evidence & documentation', d: 'The proof auditors and customers ask for.' },
      { t: 'Certification & audit prep', d: 'We get you ready and stand beside you through it.' },
    ],
    outcome: 'An organization that is genuinely compliant and audit-ready — with the documentation and evidence to prove it, and a team that understands how to maintain it.',
    frameworks: 'ISO/IEC 27001 · ISO 9001 · NIS2 · GDPR · DORA',
    ctaLabel: 'Talk to us about implementation',
  },
  'operational-cybersecurity': {
    title: 'Operational Cybersecurity & Manpower',
    eyebrow: 'Pillar 3',
    lead: 'Security isn’t a one-time project — it’s ongoing. Get senior cybersecurity expertise exactly when you need it, without carrying the cost of a full-time hire.',
    who: [
      'Companies that need security expertise but aren’t ready to hire a full-time CISO.',
      'Teams that need extra hands for a project, a transition, or a busy period.',
      'Organizations that want a trusted advisor on call as they grow.',
    ],
    what: [
      { t: 'Virtual CISO (vCISO)', d: 'Strategic security leadership, fractional and flexible.' },
      { t: 'Interim & embedded experts', d: 'Hands-on support that plugs into your team.' },
      { t: 'Ongoing advisory', d: 'A security partner on call for the questions that come up.' },
      { t: 'Awareness & training', d: 'Help your people become your first line of defense.' },
    ],
    outcome: 'Senior security capability that scales up or down with your needs — predictable, flexible, and far more affordable than a permanent hire.',
    frameworks: 'NIS2 · DORA · GDPR · ISO/IEC 27001 · BCP/BCM',
    ctaLabel: 'Discuss your needs',
  },
};
