import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import imgDoltripLovinaLogo from "@/imports/Design/d303a0c9165b71c7002d625facdd22a45d8aabe1.png";
import { getWhatsAppLink } from "@/app/utils/whatsapp";

interface HeaderProps {
  visible: boolean;
  isTransparent: boolean;
  setTripType: (type: "open" | "private") => void;
}

export default function Header({ visible, isTransparent, setTripType }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      visible ? "translate-y-0" : "-translate-y-full"
    } ${
      isTransparent && !mobileMenuOpen
        ? "bg-transparent border-transparent text-white"
        : "bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm text-[#00263f]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-14 sm:h-16 md:h-20 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity shrink-0">
          <img src={imgDoltripLovinaLogo} alt="Doltrip Lovina Logo" className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12 object-contain" />
          <span className={`font-['Poppins',sans-serif] font-bold text-sm sm:text-base md:text-xl lg:text-2xl tracking-wide transition-colors duration-300 ${
            isTransparent && !mobileMenuOpen ? "text-white" : "text-[#0b3c5d]"
          }`}>
            Doltrip Lovina
          </span>
        </a>
        <nav className={`hidden md:flex items-center gap-4 lg:gap-8 font-semibold text-[13px] lg:text-[15px] transition-colors duration-300 ${
          isTransparent ? "text-white/90" : "text-gray-700"
        }`}>
          <a href="#journey" className={`transition-colors whitespace-nowrap ${isTransparent ? "hover:text-white" : "hover:text-[#d95e36]"}`}>What You Get</a>
          <a href="#pricing" className={`transition-colors whitespace-nowrap ${isTransparent ? "hover:text-white" : "hover:text-[#d95e36]"}`}>Packages</a>
          <a href="#pricing" onClick={() => setTripType("open")} className={`transition-colors whitespace-nowrap ${isTransparent ? "hover:text-white" : "hover:text-[#d95e36]"}`}>Open Trip</a>
          <a href="#pricing" onClick={() => setTripType("private")} className={`transition-colors whitespace-nowrap ${isTransparent ? "hover:text-white" : "hover:text-[#d95e36]"}`}>Private Boat</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppLink("General Inquiry", false)}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#e06c45] to-[#d95e36] hover:shadow-lg hover:shadow-orange-500/20 text-white font-semibold text-[11px] sm:text-xs md:text-sm px-3 py-2 sm:px-3.5 sm:py-2.5 md:px-6 md:py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Book Now
          </a>
          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent && !mobileMenuOpen ? "text-white hover:bg-white/10" : "text-[#0b3c5d] hover:bg-gray-100"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <nav className="bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          <a href="#journey" onClick={() => setMobileMenuOpen(false)} className="text-[#0b3c5d] font-semibold text-sm py-2.5 px-3 rounded-lg hover:bg-sky-50 transition-colors">What You Get</a>
          <a href="#pricing" onClick={() => { setTripType("open"); setMobileMenuOpen(false); }} className="text-[#0b3c5d] font-semibold text-sm py-2.5 px-3 rounded-lg hover:bg-sky-50 transition-colors">Packages</a>
          <a href="#pricing" onClick={() => { setTripType("open"); setMobileMenuOpen(false); }} className="text-[#0b3c5d] font-semibold text-sm py-2.5 px-3 rounded-lg hover:bg-sky-50 transition-colors">Open Trip</a>
          <a href="#pricing" onClick={() => { setTripType("private"); setMobileMenuOpen(false); }} className="text-[#0b3c5d] font-semibold text-sm py-2.5 px-3 rounded-lg hover:bg-sky-50 transition-colors">Private Boat</a>
        </nav>
      </div>
    </header>
  );
}
