export const pillars = [
  {
    id: "precision",
    name: "Precision",
    lede: "Rooted in classical Pilates.",
    body: "Every exercise has a shape, an order, and a reason. We work on control before we work on load - which is what makes the strength stick.",
    image:
      "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/89427cf5-e69a-4108-88cf-5213d8bdde25/IMG_6125.jpeg",
    alt: "Classical Pilates instruction focused on precise, controlled movement",
  },
  {
    id: "strength",
    name: "Strength",
    lede: "Refined through modern athletic training.",
    body: "Low-impact doesn't mean low-effort. Sessions build real, usable strength that shows up in your other training and in ordinary days.",
    image:
      "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/6998e4fc-1a21-4980-b7d2-79c17991b794/609A8278.jpg",
    alt: "Athletic strength work on Pilates equipment",
  },
  {
    id: "longevity",
    name: "Longevity",
    lede: "Built around your history.",
    body: "Old injuries, current limitations, and the things you want to still be doing in twenty years shape the programming from session one.",
    image:
      "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/88ccf0bf-f115-4099-a967-d2cf704758be/609A8547.jpg",
    alt: "Injury-aware Pilates programming for long-term mobility",
  },
] as const;

export const firstSession = [
  {
    n: "01",
    title: "We talk first",
    body: "Fifteen minutes on your history, injuries, and what you want out of this. Nothing starts until I understand your body.",
  },
  {
    n: "02",
    title: "You learn the equipment",
    body: "Reformer, Tower, Chair - what each does and how it will feel. No one is thrown onto a machine cold.",
  },
  {
    n: "03",
    title: "We move",
    body: "A full 55-minute session at your level, not a demo. You'll work. You won't be lost.",
  },
  {
    n: "04",
    title: "You leave with a plan",
    body: "What we're building toward, and how often to come.",
  },
] as const;

export type Instructor = {
  name: string;
  role: string;
  credentials: string[];
  bio: string[];
  /**
   * First-person pull quote, in Courtney's own voice.
   * Omitted deliberately - her supplied bio is third person, and a
   * third-person "quote" reads as marketing copy. The section renders
   * without it until she writes one line herself.
   */
  quote?: string;
  image: string;
};

export const instructor: Instructor = {
  name: "Courtney Makuch",
  role: "Founder & Instructor",
  credentials: [
    "Comprehensively certified - Equinox Pilates Teacher Training Program",
    "Classical lineage: Joseph Pilates to Romana Kryzanowska to Carrie Macy Samper",
    "5+ years teaching across Austin studios",
  ],
  bio: [
    "Coura Pilates is a private studio dedicated to personalized 1:1 Pilates training. Courtney is a classically trained Pilates instructor and the founder of Coura Pilates.",
    "She is comprehensively certified through the Equinox Pilates Teacher Training Program, developed by Carrie Macy Samper - a third-generation classical Pilates teacher trained under Romana Kryzanowska, whose teachings trace directly back to Joseph Pilates.",
    "She brings over five years of teaching experience from Equinox, Forma Pilates, Lifetime South Lamar, and boutique studios throughout Austin. Her teaching blends the precision of classical Pilates with intelligent athletic training, creating sessions that build deep strength, stability, and longevity in the body.",
  ],
  image:
    "https://images.squarespace-cdn.com/content/v1/68d449a73910931af3ee6794/e2edccbc-211f-437f-9f4b-e41a27b1c9da/Tezza-6820.jpeg",
};

export const marqueeItems = [
  "1:1 only",
  "Reformer, Tower, Chair",
  "55-minute sessions",
  "Injury-aware programming",
  "Classical foundation",
  "Lakeway, TX",
] as const;

export const equipment = [
  "Reformer",
  "Tower",
  "Chair",
  "Ladder Barrel",
  "Spine Corrector",
] as const;
