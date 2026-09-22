export interface EducationEntry {
  degree: string
  institution: string
  location: string
  period: string
}

export const education: EducationEntry[] = [
  {
    degree: "Master's Degree in Computer Science",
    institution: 'The University of Texas at Dallas',
    location: 'Richardson, TX',
    period: 'January 2024 – December 2025',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'The University of Texas at Dallas',
    location: 'Richardson, TX',
    period: 'January 2017 – December 2021',
  },
]

export const certifications: string[] = [
  'Stanford Machine Learning',
  'Google Cloud AI',
  'AWS Machine Learning Foundations',
  'IBM Data Analytics',
]
