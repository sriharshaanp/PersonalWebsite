export type LinkItem = { label: string; href: string };

export type Tile = {
  title: string;
  subtitle?: string;
  image: string; // logo/badge image
  proof?: string; // certificate/proof file
  links?: LinkItem[]; // extra links (PDF/DOI/portal/etc)
};

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
    image: "/assets/images/sample-art1.svg",
    proof: "/assets/certs/cert-acm.svg",
    links: [{ label: "Certificate", href: "/assets/certs/cert-acm.svg" }]
  },
  {
    title: "IEEE",
    subtitle: "Senior Member",
    image: "/assets/images/sample-art2.svg",
    proof: "/assets/certs/cert-ieee.svg",
    links: [{ label: "Certificate", href: "/assets/certs/cert-ieee.svg" }]
  }
];

export const judging: Tile[] = [
  {
    title: "Hackathon Judge",
    subtitle: "Devpost",
    image: "/assets/images/sample-art1.svg",
    proof: "/assets/certs/cert-judging1.svg"
  },
  {
    title: "Conference Reviewer",
    subtitle: "IEEE/ACM",
    image: "/assets/images/sample-art2.svg",
    proof: "/assets/certs/cert-judging2.svg"
  }
];

export const publications: Tile[] = [
  {
    title: "Enhancing Data Diversity in Imbalanced Datasets…",
    subtitle: "Manuscript · 2025",
    image: "/assets/images/sample-art2.svg",
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
    image: "/assets/images/sample-art1.svg",
    links: [{ label: "Read article", href: "https://example.com" }]
  }
];
