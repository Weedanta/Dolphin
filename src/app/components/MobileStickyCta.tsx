import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/utils/LanguageContext";
import { getWhatsAppLink } from "@/app/utils/whatsapp";

export default function MobileStickyCta() {
  const { locale, t, formatStartPrice } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show after scrolling past 220px (past hero top banner)
      const pastHero = scrollY > 220;

      // Hide when near bottom (footer CTA visible)
      const nearBottom = scrollY + windowHeight > documentHeight - 380;

      setIsVisible(pastHero && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2.5 px-4 bg-white/95 backdrop-blur-md border-t-2 border-[#0b3c5d]/20 shadow-[0_-6px_20px_rgba(11,60,93,0.15)]"
        >
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            {/* Price Preview */}
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                {t("cta.mobileFrom")}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-base sm:text-lg font-black text-[#d95e36] leading-none">
                  {formatStartPrice("open")}
                </span>
                <span className="text-[10px] text-gray-400 font-semibold">
                  {t("cta.mobilePerPax")}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <a
              href={getWhatsAppLink("Open Trip Package", false, undefined, locale)}
              target="_blank"
              rel="noreferrer"
              className="bg-[#d95e36] hover:bg-[#c64d26] active:scale-95 text-white font-bold text-xs px-4 py-2.5 rounded-xl border-2 border-[#0b3c5d] shadow-[2px_2px_0px_#0b3c5d] flex items-center gap-1.5 uppercase tracking-wide transition-all shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>{t("cta.mobileBook")}</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
