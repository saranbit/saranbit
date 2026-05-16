import AnimatedCursor from "@/components/AnimatedCursor";
import BackToTopButton from "@/components/BackToTopButton";
import FloatingSocialDock from "@/components/FloatingSocialDock";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useColorfulMode } from "@/contexts/ColorfulModeContext";
import { ColorfulModeProvider } from "@/contexts/ColorfulModeContext";
import AboutSection from "@/pages/AboutSection";
import ContactSection from "@/pages/ContactSection";
import EducationSection from "@/pages/EducationSection";
import EngagementSection from "@/pages/EngagementSection";
import FooterSection from "@/pages/FooterSection";
import HeroSection from "@/pages/HeroSection";
import QuotesSection from "@/pages/QuotesSection";
import SkillsSection from "@/pages/SkillsSection";
import ToolsSection from "@/pages/ToolsSection";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function PortfolioContent() {
  const { isColorful } = useColorfulMode();

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: isColorful
          ? "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
          : "#020817",
      }}
    >
      <LoadingScreen />
      <ScrollProgressBar />
      <AnimatedCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <QuotesSection />
        <ToolsSection />
        <EngagementSection />
        <ContactSection />
      </main>
      <FooterSection />
      <BackToTopButton />
      <FloatingSocialDock />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorfulModeProvider>
        <PortfolioContent />
      </ColorfulModeProvider>
    </QueryClientProvider>
  );
}
