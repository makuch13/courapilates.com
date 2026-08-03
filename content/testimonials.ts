export type Testimonial = {
  headline: string;
  quote: string;
  full?: string;
  author: string;
  context?: string;
};

/** Real client testimonials. Headlines follow the Soul Sync Body pattern -
 *  a scannable result above each quote. Full versions live on /method. */
export const testimonials: Testimonial[] = [
  {
    headline: "She trained around my shoulder injury",
    quote:
      "She's been really thoughtful about building workouts around it in a way that challenged me while still helping me strengthen and recover it properly. She pushes you past your limits without making it feel forced. I couldn't recommend her more.",
    full:
      "I originally started working with Courtney at Equinox and ended up following her to her own studio because honestly, I didn't want to work with anyone else. She's been a huge part of my fitness journey and every session feels really tailored to me, my goals, and compliments my other workouts perfectly. One thing I've appreciated a lot is how she's helped me work through a shoulder injury. She's been really thoughtful about building workouts around it in a way that challenged me while still helping me strengthen and recover it properly. She also has a great way of pushing you past your limits without making it feel forced or overwhelming. On top of that, she's just super easy to work with and somehow always finds a way to fit me into her schedule, even on short notice. I couldn't recommend her more.",
    author: "Joonas K.",
  },
  {
    headline: "Stronger than a decade of weightlifting",
    quote:
      "She methodically helped me reach a whole new fitness level. I'm stronger, more balanced, and more toned now than I was after a decade of traditional weightlifting.",
    full:
      "Courtney is a top-tier instructor with an incredible amount of energy, passion, and knowledge. She methodically helped me reach a whole new fitness level, constantly encouraging me to push my limits. The results have been absolutely incredible - I'm stronger, more balanced, and more toned now than I was after a decade of traditional weightlifting. I highly recommend her!",
    author: "Jayme P.",
  },
  {
    headline: "She made me love Pilates",
    quote:
      "I was such a newbie and she has made me love Pilates and enjoy our time each week. She's a great teacher and overall sweet human. I would - and have - recommend.",
    full:
      "Courtney is incredible if you want a truly custom-tailored Pilates workout. I was such a newbie and she has made me love Pilates and enjoy our time each week! She's a great teacher and overall sweet human. I would (and have) recommend!",
    author: "Jennifer S.",
    context: "Started as a complete beginner",
  },
];
