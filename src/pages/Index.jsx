import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import PixelCursor from "../components/PixelCursor";

function Index() {
  return (
    <div className="min-h-screen bg-background cursor-none md:cursor-none">
      <PixelCursor />
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Index;
