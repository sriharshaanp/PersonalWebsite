export type LinkItem = { label: string; href: string };

export type Tile = {
  title: string;
  subtitle?: string;
  image: string; // logo/badge image
  proof?: string; // certificate/proof file
  links?: LinkItem[]; // extra links (PDF/DOI/portal/etc)
};

// Helper for asset paths with base URL
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.startsWith('/') ? path.slice(1) : path}`;

export const about = {
  name: "SriHarsha Anand Pushkala",
  role: "Director of Fraud Strategy & Analytics",
  summary:
    "I lead applied AI and analytics initiatives focused on fraud detection, identity verification, and risk decisioning. I contribute through research manuscripts, peer review, and global judging activity. This page provides verifiable evidence for each credential."
};

export const memberships: Tile[] = [
  {
    title: "BCS",
    subtitle: "Fellow",
    image: asset("/assets/images/membership_stuff/bcs-pin-fellow.jpg"),
    proof: asset("/assets/certs/BCS_Certificate.jpeg"),
    links: [{ label: "Certificate", href: asset("/assets/certs/BCS_Certificate.jpeg") }]
  },
  {
    title: "IEEE",
    subtitle: "Senior Member",
    image: asset("/assets/images/membership_stuff/ieee-pin-senior.jpg"),
    proof: asset("/assets/certs/IEEE_Certificate.jpeg"),
    links: [{ label: "Certificate", href: asset("/assets/certs/IEEE_Certificate.jpeg") }]
  }
];

export const judging: Tile[] = [
  {
    title: "Hackathon Judge",
    subtitle: "Devpost",
    image: asset("/assets/images/sample-art1.svg"),
    proof: asset("/assets/certs/cert-judging1.svg")
  },
  {
    title: "Conference Reviewer",
    subtitle: "IEEE/ACM",
    image: asset("/assets/images/sample-art2.svg"),
    proof: asset("/assets/certs/cert-judging2.svg")
  }
];

export const publications: Tile[] = [
  {
    title: "Enhancing Data Diversity in Imbalanced Datasets…",
    subtitle: "Manuscript · 2025",
    image: asset("/assets/images/sample-art2.svg"),
    links: [
      { label: "PDF", href: "https://example.com" },
      { label: "ResearchGate", href: "https://example.com" }
    ]
  }
];

export const media: Tile[] = [
  {
    title: "Interview / feature on fraud analytics",
    subtitle: "Trade publication · 2025",
    image: asset("/assets/images/media_stuff/CybersecurityScreenshot.jpeg"),
    links: [{ label: "Read article", href: "https://example.com" }]
  }
];

export type TimelineItem = {
  year: string;
  title: string;
  subtitle?: string;
  category?: string;
  description?: string;
};

export const educationTimeline: TimelineItem[] = [
  {
    year: "2023",
    title: "Master of Science in Data Science",
    subtitle: "University Name",
    category: "Learning",
    description: "Specialized in machine learning and statistical analysis"
  },
  {
    year: "2020",
    title: "Bachelor of Science in Computer Science",
    subtitle: "University Name",
    category: "Learning",
    description: "Foundation in computer science fundamentals"
  }
];

export const experienceTimeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Director of Fraud Strategy & Analytics",
    subtitle: "Company Name",
    category: "Full time",
    description: "Leading fraud detection and prevention initiatives"
  },
  {
    year: "2022",
    title: "Senior Data Scientist",
    subtitle: "Previous Company",
    category: "Full time",
    description: "Applied AI for risk analytics"
  }
];
