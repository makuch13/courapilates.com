import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { IntroSeries } from "@/components/sections/IntroSeries";
import { MethodPillars } from "@/components/sections/MethodPillars";
import { Instructor } from "@/components/sections/Instructor";
import { FirstSession } from "@/components/sections/FirstSession";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { TestimonialWall } from "@/components/sections/TestimonialWall";
import { StudioStrip } from "@/components/sections/StudioStrip";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />           {/* 1  */}
      <Marquee />        {/* 2  */}
      <IntroSeries />    {/* 3  - moved up from 3/4 down the page */}
      <MethodPillars />  {/* 4  */}
      <Instructor />     {/* 5  - new; the biggest gap on the current site */}
      <FirstSession />   {/* 6  - new */}
      <PricingPreview /> {/* 7  - new */}
      <TestimonialWall />{/* 8  */}
      <StudioStrip />    {/* 9  - new */}
      <InstagramStrip /> {/* 10 - new */}
      <LeadMagnet />     {/* 11 - new */}
      <CtaBand />        {/* 12 */}
    </>
  );
}
