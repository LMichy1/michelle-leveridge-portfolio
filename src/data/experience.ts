export interface ExperienceEntry {
  role: string
  organization: string
  location: string
  period: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: 'AI Data Training & Evaluation Specialist',
    organization: 'Freelance Contract',
    location: 'Remote',
    period: '2024 – Present',
    highlights: [
      'Evaluates and annotates AI-generated content for accuracy, relevance, clarity, and safety against detailed project guidelines.',
      'Completes pairwise comparisons of model responses and provides evidence-based judgments on which output is stronger.',
      'Reviews collected data for duplicates, missing fields, inconsistent labels, and ambiguous cases before dataset acceptance.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    organization: 'The Tech Consultants, LLC',
    location: 'Remote',
    period: 'March 2023 – October 2025',
    highlights: [
      'Built and maintained Python and Node.js services that collected, transformed, validated, and stored structured application data through REST APIs.',
      'Reviewed AI-assisted code for hallucinated APIs, logical errors, and missing edge cases before merging.',
      'Implemented automated data and API checks with PyTest, Jest, Mocha, and Postman covering field accuracy, response contracts, and error handling.',
      'Integrated third-party services (Plaid, Stripe, Twilio, HubSpot, ActiveCampaign, DocuSign), validating JSON payloads and failure scenarios.',
    ],
  },
  {
    role: 'Junior Full-Stack Developer',
    organization: 'MassLight',
    location: 'Remote',
    period: 'January 2022 – November 2022',
    highlights: [
      'Developed data-driven application features using React, TypeScript, Python, C#, .NET, and PostgreSQL.',
      'Designed and optimized database schemas and SQL queries, checking records for completeness and consistency.',
      'Created unit and integration test suites that caught logic defects and regressions before release.',
    ],
  },
  {
    role: 'Full-Stack Engineering Intern',
    organization: 'Software Freedom Conservancy',
    location: 'Remote',
    period: 'February 2019 – November 2021',
    highlights: [
      'Supported JavaScript, TypeScript, Python, and C# applications through feature development and structured testing.',
      'Improved code and content quality through unit tests, integration tests, and peer review.',
      'Worked in agile teams following detailed issue requirements and release checklists.',
    ],
  },
]
