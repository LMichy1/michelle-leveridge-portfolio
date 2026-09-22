export interface Project {
  title: string
  description: string
  problem: string
  functionality: string[]
  technologies: string[]
  /** 'repository' = verified public code exists; 'resume' = described in resume, no public repo confirmed. */
  sourceType: 'repository' | 'resume'
  repoUrl: string | null
  liveUrl: string | null
}

export const projects: Project[] = [
  {
    title: 'AI Evaluation & Data Quality Review Toolkit',
    description:
      'Internal tools for comparing AI-generated outputs, recording review decisions, and evaluating correctness, clarity, efficiency, and security across repeated prompts.',
    problem:
      'AI evaluation at scale needs structured, reproducible review criteria rather than ad-hoc judgment calls.',
    functionality: [
      'Structured scoring criteria and reproducible review logs for Python, TypeScript, SQL, and natural-language outputs',
      'Validation checks for incomplete fields, duplicate records, and malformed JSON',
      'Label-consistency checks to support cleaner evaluation datasets',
    ],
    technologies: ['Python', 'TypeScript', 'SQL'],
    sourceType: 'resume',
    repoUrl: null,
    liveUrl: null,
  },
  {
    title: 'Full-Stack SaaS Platform',
    description:
      'A multi-tenant platform with authentication, role-based permissions, structured data workflows, and reliable real-time processing.',
    problem:
      'Multi-tenant SaaS products need permission boundaries and data workflows that stay correct under real-time load.',
    functionality: [
      'Authentication and role-based permissions',
      'Structured data workflows with optimized queries',
      'Unit, API integration, and end-to-end tests verifying data accuracy and complete user journeys',
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    sourceType: 'resume',
    repoUrl: null,
    liveUrl: null,
  },
  {
    title: 'API Integration & Reliability Testing',
    description:
      'Testing and validation work covering third-party API contracts and failure behavior.',
    problem:
      'Third-party integrations fail in ways that are easy to miss without deliberate contract and failure-mode testing.',
    functionality: [
      'Contract and JSON payload validation',
      'Authentication flow and rate-limit testing',
      'Retry logic, timeout handling, and error-response verification',
    ],
    technologies: ['REST APIs', 'Postman'],
    sourceType: 'resume',
    repoUrl: null,
    liveUrl: null,
  },
  {
    title: 'This Portfolio',
    description:
      'A Vue 3 + TypeScript portfolio built with a component-based architecture, strict typing, automated tests, and CI.',
    problem:
      'Presenting engineering work through an implementation that itself demonstrates engineering practice.',
    functionality: [
      'Typed content model separating data from presentation',
      'Responsive, accessible layout with a custom design system',
      'Unit and end-to-end test coverage with GitHub Actions CI',
    ],
    technologies: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vitest', 'Playwright'],
    sourceType: 'repository',
    repoUrl: 'https://github.com/LMichy1/michelle-leveridge-portfolio',
    liveUrl: null,
  },
]
