export type Session = {
  slug: string;
  name: string;
  price: string;
  priceValue: number;
  meta: string;
  blurb: string;
  detail?: string[];
  featured?: boolean;
};

export const sessions: Session[] = [
  {
    slug: "intro-series",
    name: "New Client Introduction",
    price: "$360",
    priceValue: 360,
    meta: "Three 55-minute private sessions",
    blurb:
      "Built for people who have never touched a Reformer. Three sessions to learn the equipment, the foundational exercises, and how your body actually moves.",
    detail: [
      "No experience needed",
      "No group class to keep up with",
      "Establishes movement, technique, and control before an ongoing practice",
    ],
    featured: true,
  },
  {
    slug: "private-session",
    name: "Private Session",
    price: "$130",
    priceValue: 130,
    meta: "55 minutes, one-on-one",
    blurb:
      "A personalized session designed around you - building strength, improving mobility, and deepening your connection to the method through precise, intentional movement.",
    detail: ["Reformer, Tower, Chair, Ladder Barrel, Spine Corrector", "Scheduled by appointment"],
  },
  {
    slug: "session-series",
    name: "Session Series",
    price: "From $115",
    priceValue: 115,
    meta: "Per session, 6 / 12 / 24 packages",
    blurb: "For clients maintaining a consistent practice.",
    detail: [
      "6 sessions - $750 ($125 each), expires in 6 weeks",
      "12 sessions - $1,440 ($120 each), expires in 3 months",
      "24 sessions - $2,760 ($115 each), expires in 6 months",
    ],
  },
  {
    slug: "monthly-practice",
    name: "Monthly Practice",
    price: "From $480",
    priceValue: 480,
    meta: "Per month, renews automatically",
    blurb: "A consistent practice designed to support long-term strength and progress.",
    detail: ["4 sessions/month - $480 ($120 each)", "8 sessions/month - $920 ($115 each)"],
  },
];

export const featuredSessions = sessions.filter((s) =>
  ["intro-series", "private-session", "session-series"].includes(s.slug)
);
