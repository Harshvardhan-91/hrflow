import Benefits from "../components/landinPage/Benefits";
import CTAsection from "../components/landinPage/CTAsection";
import Features from "../components/landinPage/Features";
import HeroSection from "../components/landinPage/HeroSection";
import HowItWorks from "../components/landinPage/HowItWorks";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Benefits />
      <CTAsection />
      <Footer />
    </div>
  );
};

export default LandingPage;
