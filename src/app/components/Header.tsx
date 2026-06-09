import { MessageCircle } from "lucide-react";
import imgDoltripLovinaLogo from "@/imports/Design/d303a0c9165b71c7002d625facdd22a45d8aabe1.png";
import { getWhatsAppLink } from "@/app/utils/whatsapp";

interface HeaderProps {
  visible: boolean;
  isTransparent: boolean;
  setTripType: (type: "open" | "private") => void;
}

export default function Header({ visible, isTransparent, setTripType }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      visible ? "translate-y-0" : "-translate-y-full"
    } ${
      isTransparent
        ? "bg-transparent border-transparent text-white"
        : "bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm text-[#00263f]"
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 sm:gap-3 hover:opacity-90 transition-opacity">
          <img src={imgDoltripLovinaLogo} alt="Doltrip Lovina Logo" className="w-9 h-9 md:w-12 md:h-12 object-contain" />
          <span className={`font-['Poppins',sans-serif] font-bold text-base sm:text-xl md:text-2xl tracking-wide transition-colors duration-300 ${
            isTransparent ? "text-white" : "text-[#0b3c5d]"
          }`}>
            Doltrip Lovina
          </span>
        </a>
        <nav className={`hidden md:flex items-center gap-8 font-semibold text-[15px] transition-colors duration-300 ${
          isTransparent ? "text-white/90" : "text-gray-700"
        }`}>
          <a href="#journey" className={`transition-colors ${isTransparent ? "hover:text-white" : "hover:text-[#d95e36]"}`}>What You Get</a>
          <a href="#pricing" className={`transition-colors ${isTransparent ? "hover:text-white" : "hover:text-[#d95e36]"}`}>Packages</a>
          <a href="#pricing" onClick={() => setTripType("open")} className={`transition-colors ${isTransparent ? "hover:text-white" : "hover:text-[#d95e36]"}`}>Open Trip</a>
          <a href="#pricing" onClick={() => setTripType("private")} className={`transition-colors ${isTransparent ? "hover:text-white" : "hover:text-[#d95e36]"}`}>Private Boat</a>
        </nav>
        <div>
          <a
            href={getWhatsAppLink("General Inquiry", false)}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#e06c45] to-[#d95e36] hover:shadow-lg hover:shadow-orange-500/20 text-white font-semibold text-xs sm:text-sm px-3.5 py-2.5 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-1.5 sm:gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
}
