import { useState } from "react";
import { Home, Compass } from "lucide-react";
import { motion } from "framer-motion";
import imgDoltripLogo from "@/imports/Design/d303a0c9165b71c7002d625facdd22a45d8aabe1.png";
import imgLovinaSunriseBeach from "@/imports/Design/lovina_sunrise_beach.png";
import type { Locale } from "@/app/utils/translations";
import { getTranslation } from "@/app/utils/translations";

interface NotFoundProps {
  initialLocale?: Locale;
}

export default function NotFound({ initialLocale = "id" }: NotFoundProps) {
  const [currentLocale, setCurrentLocale] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem("user_preferred_locale");
      if (saved === "id" || saved === "en") return saved;
    } catch {
      // Ignore storage error
    }
    return initialLocale;
  });

  const t = getTranslation(currentLocale);

  const toggleLocale = () => {
    const next = currentLocale === "id" ? "en" : "id";
    setCurrentLocale(next);
    try {
      localStorage.setItem("user_preferred_locale", next);
    } catch {
      // Ignore storage error
    }
  };

  return (
    <div className="font-['Poppins',sans-serif] bg-[#fbf9f7] text-[#00263f] min-h-screen flex flex-col justify-between relative overflow-x-hidden selection:bg-[#d95e36] selection:text-white">
      {/* Real Beach Background Image & Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={imgLovinaSunriseBeach}
          alt="Pemandangan matahari terbit di Pantai Lovina Bali dengan perahu tradisional jukung"
          className="w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3c5d]/90 via-[#0b3c5d]/85 to-[#fbf9f7]" />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">
        <a
          href={`/${currentLocale}`}
          className="flex items-center gap-2.5 sm:gap-3 hover:opacity-95 transition-opacity"
        >
          <img
            src={imgDoltripLogo}
            alt="Doltrip Lovina - Tour Lumba-Lumba & Snorkeling Lovina Bali Official Logo"
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-full ring-2 ring-white/60 shadow-md"
          />
          <span className="font-extrabold text-white text-base sm:text-xl md:text-2xl tracking-wide drop-shadow-sm">
            Doltrip Lovina
          </span>
        </a>

        {/* Language Switch Toggle */}
        <button
          onClick={toggleLocale}
          className="group relative flex items-center h-[32px] sm:h-[36px] w-[72px] sm:w-[80px] rounded-full p-[3px] transition-all duration-400 ease-in-out cursor-pointer select-none bg-white/20 hover:bg-white/30 border border-white/30 shadow-md backdrop-blur-sm"
          aria-label="Switch language"
        >
          <span
            className={`absolute top-[3px] h-[26px] sm:h-[30px] w-[34px] sm:w-[38px] rounded-full shadow-md transition-all duration-300 ease-[cubic-bezier(0.68,-0.15,0.265,1.35)] flex items-center justify-center font-bold text-[11px] sm:text-xs tracking-wide ${
              currentLocale === "en"
                ? "left-[calc(100%-37px)] sm:left-[calc(100%-41px)] bg-[#0b3c5d] text-white"
                : "left-[3px] bg-[#d95e36] text-white"
            }`}
          >
            {currentLocale === "id" ? "ID" : "EN"}
          </span>
          <span
            className={`absolute left-[9px] sm:left-[11px] text-[10px] sm:text-[11px] font-bold tracking-wider transition-opacity duration-300 text-white ${
              currentLocale === "id" ? "opacity-0" : "opacity-60"
            }`}
          >
            ID
          </span>
          <span
            className={`absolute right-[9px] sm:right-[11px] text-[10px] sm:text-[11px] font-bold tracking-wider transition-opacity duration-300 text-white ${
              currentLocale === "en" ? "opacity-0" : "opacity-60"
            }`}
          >
            EN
          </span>
        </button>
      </header>

      {/* Main 404 Hero Container */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center justify-center text-center my-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          {/* Big 404 Headline with Retro Outline */}
          <div className="font-extrabold text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase select-none leading-none mb-2 sm:mb-3 text-outline-title">
            404
          </div>

          {/* Subtitle */}
          <h1 className="font-extrabold text-[#f7c59f] text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide mb-3 sm:mb-4 drop-shadow">
            {t("notfound.title")}
          </h1>

          {/* Description */}
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 font-medium leading-relaxed drop-shadow-sm">
            {t("notfound.desc")}
          </p>

          {/* Action Cards / Navigation Buttons */}
          <div className="bg-white/95 backdrop-blur-md border-3 sm:border-4 border-[#0b3c5d] rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 shadow-[6px_6px_0px_rgba(11,60,93,0.35)] max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch">
              {/* Back to Home */}
              <a
                href={`/${currentLocale}`}
                className="flex-1 bg-[#d95e36] hover:bg-[#c64d26] border-2 sm:border-3 border-[#0b3c5d] text-white font-bold py-3 sm:py-3.5 px-5 rounded-xl shadow-[2px_2px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider"
              >
                <Home className="w-4 h-4 text-white" />
                <span>{t("notfound.backHome")}</span>
              </a>

              {/* View Tour Packages */}
              <a
                href={`/${currentLocale}#pricing`}
                className="flex-1 bg-[#0b3c5d] hover:bg-[#082d47] border-2 sm:border-3 border-[#0b3c5d] text-white font-bold py-3 sm:py-3.5 px-5 rounded-xl shadow-[2px_2px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider"
              >
                <Compass className="w-4 h-4 text-sky-400" />
                <span>{t("notfound.viewPackages")}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 w-full py-4 sm:py-6 text-center text-xs text-white/70 font-medium">
        <p>© {new Date().getFullYear()} Doltrip Lovina · doltriplovina.my.id</p>
      </footer>
    </div>
  );
}
