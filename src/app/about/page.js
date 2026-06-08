import AboutHero from "@/components/AboutHero/AboutHero";
import StatsSection from "@/components/StatsSection/StatsSection";
import TeamSection from "@/components/TeamSection/TeamSection";
import ThreePillars from "@/components/ThreePillers/ThreePillars";


const AboutPage = () => {
  return (
    <div>
      <AboutHero />
      <ThreePillars/>
      <TeamSection />
      <StatsSection />
    </div>
  );
};

export default AboutPage;