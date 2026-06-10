import { MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import imgDoltripLovinaLogo from "@/imports/Design/d303a0c9165b71c7002d625facdd22a45d8aabe1.png";
import imgLovinaSunriseBeach from "@/imports/Design/lovina_sunrise_beach.png";
import { getWhatsAppLink } from "@/app/utils/whatsapp";

export default function Footer() {
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
              Ready to Meet the Dolphins?
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              Dolphin spots fill up quickly! Reach out to secure your booking
              today for the most memorable sunrise cruise in Lovina, Bali.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0">
            <a
              href={getWhatsAppLink("Booking Inquiry", false)}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#d95e36] hover:bg-[#c64d26] border-2 sm:border-3 border-[#0b3c5d] text-white font-bold px-5 py-3 sm:px-8 sm:py-4 rounded-xl shadow-[2px_2px_0px_#0b3c5d] sm:shadow-[3px_3px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all flex items-center justify-center gap-2 text-sm sm:text-base uppercase"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Book via WhatsApp
            </a>
            <a
              href="https://instagram.com/doltrip.lovina"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white font-semibold px-5 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
              Follow Instagram
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
                Premium marine tourism experiences in Lovina, Bali. Eco-friendly
                sunrise dolphin cruises and coral reef snorkeling led by local
                professional guides.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a
                    href="#journey"
                    className="hover:text-white transition-colors"
                  >
                    Our Journey
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Packages & Pricing
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppLink("Custom Tour Inquiry", false)}
                    className="hover:text-white transition-colors"
                  >
                    Custom Tours
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Contact */}
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">
                Connect With Us
              </h4>
              <p className="text-sm text-gray-400 mb-6">
                Feel free to follow us or chat with our admin directly through
                our social media channels.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={getWhatsAppLink("Contact Info", false)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#d95e36] text-white flex items-center justify-center transition-all duration-300"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
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
                  <span className="font-bold text-xs">TikTok</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs">
            <p className="text-gray-500">
              © 2026 Doltrip Lovina. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
