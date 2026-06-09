import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  const [tripType, setTripType] = useState<"open" | "private">("open");
  const [privatePax, setPrivatePax] = useState<2 | 3 | 4>(2);
  const [visible, setVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    // Page loader timers - synchronized with horizontal stripes transition
    const timer = setTimeout(() => {
      setFadeOut(true);
      const unmountTimer = setTimeout(() => {
        setLoading(false);
      }, 50);
      return () => clearTimeout(unmountTimer);
    }, 650);

    const animTimer = setTimeout(() => {
      setStartAnim(true);
    }, 250);

    return () => {
      clearTimeout(timer);
      clearTimeout(animTimer);
    };
  }, []);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Transparent and always visible at the very top
      if (currentScrollPos < 20) {
        setIsTransparent(true);
        setVisible(true);
      } else {
        setIsTransparent(false);
        // Show if scrolling up, hide if scrolling down
        if (prevScrollPos > currentScrollPos) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-['Poppins',sans-serif] bg-[#fbf9f7] text-[#00263f] overflow-x-hidden min-h-screen flex flex-col">
      {/* Brand Intro Page Loader Overlay - Staggered Horizontal Stripes */}
      <Loader loading={loading} />

      {/* Top Navbar */}
      <Header
        visible={visible}
        isTransparent={isTransparent}
        setTripType={setTripType}
      />

      {/* Hero Section */}
      <Hero
        startAnim={startAnim}
        tripType={tripType}
        privatePax={privatePax}
        setPrivatePax={setPrivatePax}
      />

      {/* Journey Section */}
      <Journey />

      {/* Pricing / Packages Section */}
      <Pricing
        tripType={tripType}
        setTripType={setTripType}
        privatePax={privatePax}
        setPrivatePax={setPrivatePax}
      />

      {/* Footer & Call to Action */}
      <Footer />
    </div>
  );
}