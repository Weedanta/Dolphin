import { MessageCircle, Instagram } from "lucide-react";
import { WhatsAppIcon, TikTokIcon } from "@/app/utils/icons";
import { motion } from "framer-motion";
import imgDoltripLovinaLogo from "@/imports/Design/d303a0c9165b71c7002d625facdd22a45d8aabe1.png";
import imgLovinaSunriseBeach from "@/imports/Design/lovina_sunrise_beach.png";
import { getWhatsAppLink } from "@/app/utils/whatsapp";
import { useLanguage } from "@/app/utils/LanguageContext";

export default function Footer() {
  const { locale, t } = useLanguage();

  return (
    <>
      {/* Ready to Meet Section */}
      <section className="py-10 sm:py-16 text-white relative overflow-hidden z-10">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={imgLovinaSunriseBeach}
            alt="Lovina Sunrise Beach"
            className="w-full h-full object-cover object-center scale-105 animate-[zoom-slow_20s_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031f35]/90 via-[#0b3c5d]/85 to-[#0b3c5d]/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left"
        >
          <div className="max-w-xl">
            <h2 className="font-['Poppins',sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-[#f7c59f]">
              {t("footer.readyTitle")}
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              {t("footer.readyDesc")}
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <a
              href={getWhatsAppLink("Booking Inquiry", false, undefined, locale)}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#d95e36] hover:bg-[#c64d26] border-2 sm:border-3 border-[#0b3c5d] text-white font-bold px-5 py-3 sm:px-8 sm:py-4 rounded-xl shadow-[2px_2px_0px_#0b3c5d] sm:shadow-[3px_3px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all flex items-center justify-center gap-2 text-sm sm:text-base uppercase"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              {t("footer.bookWhatsapp")}
            </a>
            <a
              href="https://instagram.com/doltrip.lovina"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
              {t("footer.followIg")}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#181a1c] text-gray-400 py-8 sm:py-12 relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Info Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={imgDoltripLovinaLogo}
                  alt="Doltrip Lovina Logo"
                  className="w-10 h-10 object-contain rounded-full"
                />
                <span className="font-['Poppins',sans-serif] font-bold text-xl text-white tracking-wide">
                  Doltrip Lovina
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
                {t("footer.brandDesc")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
                {t("footer.quickLinks")}
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a href="#journey" className="hover:text-white transition-colors">
                    {t("footer.ourJourney")}
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    {t("footer.packagesPricing")}
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppLink("Custom Tour Inquiry", false, undefined, locale)}
                    className="hover:text-white transition-colors"
                  >
                    {t("footer.customTours")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Contact */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
                {t("footer.connectWithUs")}
              </h4>
              <p className="text-sm text-gray-400 mb-6">
                {t("footer.connectDesc")}
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={getWhatsAppLink("Contact Info", false, undefined, locale)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#d95e36] text-white flex items-center justify-center transition-all duration-300"
                  title="WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/doltrip.lovina"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#d95e36] text-white flex items-center justify-center transition-all duration-300"
                  title="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com/@doltrip.lovina"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#d95e36] text-white flex items-center justify-center transition-all duration-300"
                  title="TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs">
            <p className="text-gray-500"> 
              {t("footer.copyright")}
            </p>
            <div className="flex gap-6 text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                {t("footer.privacy")}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {t("footer.terms")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
