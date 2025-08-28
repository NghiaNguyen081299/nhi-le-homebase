import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import LeadMagnet from "@/components/LeadMagnet";
import LivestreamQuestion from "@/components/LivestreamQuestion";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <>
      <HeroSection />
      <main>
        <ValueProposition />
        <LeadMagnet />
        <LivestreamQuestion />
        <SocialProof />
      </main>
      <FinalCTA />
    </>
  );
};

export default Index;
