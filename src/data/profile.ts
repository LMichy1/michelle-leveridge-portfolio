export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin'
}

export interface Profile {
  name: string
  headline: string
  location: string
  intro: string[]
  about: string[]
  socialLinks: SocialLink[]
  /** Set to a real path (e.g. "/resume/michelle-leveridge-resume.pdf") once a resume file is added to public/resume/. */
  resumeUrl: string | null
  email: string | null
}

export const profile: Profile = {
  name: 'Michelle Leveridge',
  headline: 'Software Engineer — Full-Stack Development & AI Evaluation',
  location: 'Richardson, Texas, USA',
  intro: [
    'Full-stack software engineer building backend services, REST APIs, and data-driven application features.',
    'Also works on the AI evaluation side: reviewing model outputs, validating datasets, and documenting reproducible defects.',
  ],
  about: [
    'Michelle works across the full stack, building and maintaining backend services and REST APIs that collect, transform, and store structured application data. Her recent projects include integrations with third-party services such as Plaid, Stripe, Twilio, HubSpot, and DocuSign, each validated with automated checks for payload correctness, authentication, and error handling.',
    'That same attention to correctness carries into her AI evaluation work: reviewing AI-generated code and content for hallucinated APIs and logical errors, running pairwise comparisons of model outputs, and applying structured, rubric-based judgments to flag inconsistent labels or low-quality samples before a dataset is accepted.',
    'Across both kinds of work, the common thread is verification — writing the unit, integration, and end-to-end tests that catch regressions before release, and documenting bugs and discrepancies clearly enough for a distributed team to act on.',
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/LMichy1', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/michelle-leveridge1/',
      icon: 'linkedin',
    },
  ],
  resumeUrl: null,
  email: 'michelleleveridge79@gmail.com',
}
