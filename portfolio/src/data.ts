export const aboutText = `I am an interdisciplinary researcher and media artist working on creative computation, interaction, and media practice. Edit this text in src/data.ts.`

export type Membership = { title: string; org: string; certUrl: string }
export const memberships: Membership[] = [
  { title: 'ACM Member', org: 'ACM', certUrl: 'assets/certs/cert-acm.svg' },
  { title: 'IEEE Member', org: 'IEEE', certUrl: 'assets/certs/cert-ieee.svg' }
]

export type JudgingEntry = { id: string; title: string; year: number; certImg: string; pics?: string[] }
export const judging: JudgingEntry[] = [
  { id: 'j1', title: 'Conference X - Reviewer', year: 2023, certImg: 'assets/certs/cert-judging1.svg', pics: ['assets/images/sample-art1.svg'] },
  { id: 'j2', title: 'Festival Y - Jury', year: 2024, certImg: 'assets/certs/cert-judging2.svg', pics: ['assets/images/sample-art2.svg'] }
]

export type Publication = { title: string; citation: string; url: string }
export const publications: Publication[] = [
  { title: 'Paper A', citation: 'Author, Title, Venue, 2021', url: 'https://doi.org/10.0000/example' },
  { title: 'Paper B', citation: 'Author, Title, Venue, 2022', url: 'https://arxiv.org/' }
]

export type MediaItem = { title: string; outlet: string; url: string }
export const media: MediaItem[] = [
  { title: 'Interview on X', outlet: 'News X', url: 'https://example.com/article1' },
  { title: 'Feature on Y', outlet: 'Magazine Y', url: 'https://example.com/article2' }
]
