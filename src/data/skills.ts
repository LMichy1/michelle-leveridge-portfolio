export interface SkillGroup {
  title: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Data',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'Bash'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', '.NET', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'AI Evaluation & Data Quality',
    skills: [
      'AI output evaluation',
      'Pairwise response comparison',
      'Rubric-based scoring',
      'Data annotation & labeling',
      'Dataset validation',
      'Duplicate & consistency checks',
    ],
  },
  {
    title: 'Testing & Automation',
    skills: ['PyTest', 'Jest', 'Mocha', 'Cypress', 'Postman', 'Unit, integration & E2E testing'],
  },
  {
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'GitLab', 'JIRA', 'Agile/Scrum'],
  },
]
