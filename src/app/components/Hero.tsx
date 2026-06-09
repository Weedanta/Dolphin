import { Check, Info, Instagram, MessageCircle, Phone } from "lucide-react";
import imgLovinaSunriseBeach from "@/imports/Design/lovina_sunrise_beach.png";
import imgLovinaJukungBoat from "@/imports/Design/lovina_jukung_boat.png";
import imgWildDolphinsSwimmingInTheOceanAtSunrise from "@/imports/Design/3ce13b3f2b2f1f3d9ef09e61095ac9fdc95e73f3.png";
import { openPackages, privatePackages } from "@/app/utils/data";
import { getWhatsAppLink } from "@/app/utils/whatsapp";

interface PolaroidProps {
  src: string;
  rotation: string;
  caption: string;
}

function Polaroid({ src, rotation, caption }: PolaroidProps) {
  return (
    <div
      className={`bg-white p-3 pb-7 shadow-xl rounded-sm ${rotation} border border-gray-100 hover:scale-105 hover:rotate-0 hover:z-30 transition-all duration-300 transform select-none`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 rounded-sm">
        <img src={src} alt={caption} className="w-full h-full object-cover" />
      </div>
      <div className="mt-3 text-center">
        <span className="font-['Poppins'] font-bold text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
          {caption}
        </span>
      </div>
    </div>
  );
}

interface HeroProps {
  startAnim: boolean;
  tripType: "open" | "private";
  privatePax: 2 | 3 | 4;
  setPrivatePax: (pax: 2 | 3 | 4) => void;
}

export default function Hero({
  startAnim,
  tripType,
  privatePax,
  setPrivatePax,
}: HeroProps) {
  return (
    <section className="relative min-h-screen py-28 lg:py-0 lg:h-screen flex items-center justify-center overflow-hidden z-10">
      {/* Real Beach Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={imgLovinaSunriseBeach}
          alt="Lovina Beach Sunrise"
          className="w-full h-full object-cover object-center"
        />
        {/* Sunny turquoise ocean sky overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 via-sky-300/10 to-[#fbf9f7]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Screen-reader and Search-engine only H1 header */}
        <h1 className="sr-only">
          Doltrip Lovina | Best Dolphin Watching & Snorkeling Tours in Lovina
          Beach, Bali
        </h1>

        {/* Main Title Banner in Outline Style */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-1000 transform delay-300 ${
            startAnim
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-6 scale-95"
          }`}
        >
          <div className="font-extrabold text-white text-4xl sm:text-6xl md:text-8xl tracking-wide uppercase select-none leading-none text-outline-title">
            Open Trip
          </div>
          <div className="font-extrabold text-white text-2xl sm:text-4xl md:text-6xl tracking-wide uppercase select-none leading-none mt-2 text-outline-subtitle">
            Doltrip Lovina
          </div>
          <div className="mt-4">
            <span className="bg-yellow-400 text-[#0b3c5d] border-2 border-[#0b3c5d] font-bold text-sm md:text-lg px-6 py-1.5 rounded-full inline-block shadow-[2px_2px_0px_#0b3c5d] tracking-wider uppercase">
              {tripType === "open" ? "Sharing Boat" : "Private Boat"}
            </span>
          </div>
        </div>

        {/* Desktop Grid Layout: Polaroids Left, Pricing List Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
          {/* Left Column: Overlapping Polaroid pictures */}
          <div
            className={`hidden lg:grid lg:col-span-6 grid-cols-2 gap-6 max-w-lg mx-auto transition-all duration-1000 transform delay-500 ${
              startAnim
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <Polaroid
              src={imgWildDolphinsSwimmingInTheOceanAtSunrise}
              rotation="rotate-[-4deg]"
              caption="Sunrise Dolphin"
            />
            <Polaroid
              src={imgLovinaJukungBoat}
              rotation="rotate-[3deg]"
              caption="Dolphin Tour"
            />
            <Polaroid
              src={imgLovinaSunriseBeach}
              rotation="rotate-[-2deg]"
              caption="Lovina Calm Sea"
            />
            <Polaroid
              src={imgWildDolphinsSwimmingInTheOceanAtSunrise}
              rotation="rotate-[4deg]"
              caption="Sunrise Lovina"
            />
          </div>

          {/* Right Column: Pricing Flyer List Card */}
          <div
            className={`col-span-1 lg:col-span-6 w-full max-w-[460px] mx-auto transition-all duration-1000 transform delay-700 ${
              startAnim
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white border-4 border-[#0b3c5d] rounded-[24px] p-4 pt-14 pb-6 sm:p-6 sm:pt-10 sm:pb-8 shadow-[6px_6px_0px_rgba(11,60,93,0.3)] relative">
              {/* Speech Bubble Header */}
              <div className="absolute top-[-38px] sm:top-[-45px] right-4 sm:right-6 bg-sky-400 border-3 border-[#0b3c5d] text-white rounded-[16px] px-4 py-1.5 sm:px-6 sm:py-2 shadow-[3px_3px_0px_#0b3c5d] z-20">
                <div className="text-[9px] sm:text-xs uppercase font-extrabold tracking-wider text-[#00263f]">
                  Start From
                </div>
                <div className="text-lg sm:text-2xl font-black text-[#00263f] leading-none my-0.5">
                  Rp {tripType === "open" ? "80.000" : "300.000"}
                </div>
                <div className="text-[9px] sm:text-[10px] text-right font-bold italic text-[#00263f]">
                  Book Now!
                </div>
              </div>

              {/* Card Title & Passenger Selector for Private Boat */}
              <div className="mb-6">
                <h3 className="font-bold text-[#0b3c5d] text-base sm:text-lg mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 stroke-[3]" />
                  Tour Packages List
                </h3>

                {/* Private Boat Pax Selector */}
                {tripType === "private" && (
                  <div className="bg-sky-50 border-2 border-[#0b3c5d] rounded-xl p-2 sm:p-3 mb-4 text-center">
                    <div className="text-[11px] sm:text-xs font-bold text-[#0b3c5d] uppercase mb-2">
                      Select Number of Passengers
                    </div>
                    <div className="flex justify-center gap-1.5 sm:gap-2">
                      {[2, 3, 4].map((pax) => (
                        <button
                          key={pax}
                          onClick={() => setPrivatePax(pax as 2 | 3 | 4)}
                          className={`px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-lg font-bold text-[11px] sm:text-xs border-2 transition-all ${
                            privatePax === pax
                              ? "bg-[#d95e36] border-[#0b3c5d] text-white shadow-[1.5px_1.5px_0px_#0b3c5d]"
                              : "bg-white border-[#0b3c5d] text-[#0b3c5d] hover:bg-sky-100"
                          }`}
                        >
                          {pax} People
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing List Items */}
              <div className="space-y-4 mb-6">
                {tripType === "open"
                  ? openPackages.map((pkg, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-start border-b border-dashed border-sky-100 pb-2.5 gap-2"
                      >
                        <div className="flex items-start gap-2 min-w-0">
                          <Check className="w-4 h-4 text-sky-500 stroke-[3] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-bold text-[#0b3c5d] capitalize leading-tight">
                            {pkg.name}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-black text-[#d95e36] bg-orange-50 px-2 py-0.5 rounded border border-orange-200 shrink-0">
                          {pkg.price}
                        </span>
                      </div>
                    ))
                  : privatePackages.map((pkg, idx) => {
                      const currentPrice = pkg.prices[privatePax];
                      const formattedPrice = currentPrice / 1000;
                      return (
                        <div
                          key={idx}
                          className="flex justify-between items-start border-b border-dashed border-sky-100 pb-2.5 gap-2"
                        >
                          <div className="flex items-start gap-2 min-w-0">
                            <Check className="w-4 h-4 text-sky-500 stroke-[3] shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm font-bold text-[#0b3c5d] capitalize leading-tight">
                              {pkg.name}
                            </span>
                          </div>
                          <span className="text-xs sm:text-sm font-black text-[#d95e36] bg-orange-50 px-2 py-0.5 rounded border border-orange-200 shrink-0">
                            {formattedPrice}k
                          </span>
                        </div>
                      );
                    })}
              </div>

              {/* Booking Notice in Card */}
              {tripType === "private" && (
                <div className="border border-sky-100 bg-sky-50/50 rounded-xl p-2.5 text-[10px] text-gray-500 mb-6 flex gap-1.5 items-start">
                  <Info className="w-3.5 h-3.5 text-[#0b3c5d] shrink-0 mt-0.5" />
                  <span>
                    Price is per boat. More than 5 people price will be the same
                    as share boat.
                  </span>
                </div>
              )}

              {/* Direct WhatsApp Call to Action */}
              <a
                href={getWhatsAppLink(
                  tripType === "open"
                    ? "Open Trip Package"
                    : "Private Boat Package",
                  tripType === "private",
                  privatePax,
                )}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#d95e36] hover:bg-[#c64d26] border-3 border-[#0b3c5d] text-white font-bold py-3 px-4 sm:py-3.5 sm:px-6 rounded-xl shadow-[3px_3px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base uppercase"
              >
                <MessageCircle className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-white" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Social Contacts Bar at the Bottom */}
        <div
          className={`flex flex-wrap md:flex-nowrap justify-center items-center gap-4 md:gap-10 mt-14 py-4 px-6 bg-[#fbf9f7]/90 border-3 border-[#0b3c5d] rounded-[24px] md:rounded-full shadow-[4px_4px_0px_rgba(11,60,93,0.3)] w-full max-w-[500px] md:max-w-[760px] transition-all duration-1000 transform delay-1000 ${
            startAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://wa.me/6281947723849"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#d95e36] font-bold text-xs md:text-sm text-[#0b3c5d] transition-colors"
          >
            <Phone className="w-5 h-5 text-green-500 fill-green-500" />
            <span>081947723849</span>
          </a>
          <a
            href="https://instagram.com/doltrip.lovina"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#d95e36] font-bold text-xs md:text-sm text-[#0b3c5d] transition-colors"
          >
            <Instagram className="w-5 h-5 text-pink-500" />
            <span>doltrip.lovina</span>
          </a>
          <a
            href="https://tiktok.com/@doltrip.lovina"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-[#d95e36] font-bold text-xs md:text-sm text-[#0b3c5d] transition-colors"
          >
            <span className="w-5 h-5 bg-[#0b3c5d] text-white rounded-full flex items-center justify-center font-black text-[9px]">
              T
            </span>
            <span>doltrip.lovina</span>
          </a>
        </div>
      </div>

      {/* Wavy Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-20">
        <svg
          className="relative block w-full h-[60px] md:h-[110px] translate-y-[2px]"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 120"
        >
          <path
            d="M0,32L80,48C160,64,320,96,480,96C640,96,800,64,960,48C1120,32,1280,0,1360,-16L1440,-32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#FBF9F7"
          />
        </svg>
      </div>
    </section>
  );
}
