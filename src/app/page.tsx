import Hero from "@/components/Hero";
import CoreProducts from "@/components/CoreProducts";
import Differentiators from "@/components/Differentiators";
import HowItWorks from "@/components/HowItWorks";
import ForRiders from "@/components/ForRiders";
import ForBusiness from "@/components/ForBusiness";
import PlusSection from "@/components/PlusSection";
import WaitlistCTA from "@/components/WaitlistCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreProducts />
      <Differentiators />
      <HowItWorks />
      <ForRiders />
      <ForBusiness />
      <PlusSection />
      <WaitlistCTA />
    </>
  );
}
