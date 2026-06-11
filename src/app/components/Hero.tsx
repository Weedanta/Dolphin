import { Check, Info, Instagram, MessageCircle, Phone } from "lucide-react";
import imgLovinaSunriseBeach from "@/imports/Design/lovina_sunrise_beach.png";
import imgLovinaJukungBoat from "@/imports/Design/lovina_jukung_boat.png";
import imgWildDolphinsSwimmingInTheOceanAtSunrise from "@/imports/Design/3ce13b3f2b2f1f3d9ef09e61095ac9fdc95e73f3.png";
import { openPackages, privatePackages, startingPrices } from "@/app/utils/data";
import type { Currency } from "@/app/utils/data";
import { getWhatsAppLink } from "@/app/utils/whatsapp";

interface PolaroidProps {
  src: string;
  rotation: string;
  caption: string;
}

function Polaroid({ src, rotation, caption }: PolaroidProps) {
  return (
    <div
      className={`bg-white p-1 pb-3 xl:p-2 xl:pb-5 2xl:p-3 2xl:pb-7 shadow-xl rounded-sm ${rotation} border border-gray-100 hover:scale-105 hover:rotate-0 hover:z-30 transition-all duration-300 transform select-none`}
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50 rounded-sm">
        <img src={src} alt={caption} className="w-full h-full object-cover" />
      </div>
      <div className="mt-1 xl:mt-2 text-center">
        <span className="font-['Poppins'] font-bold text-[6px] xl:text-[9px] 2xl:text-xs text-gray-500 uppercase tracking-widest">
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
  currency: Currency;
  formatUsd: (idrAmount: number) => string;
}

export default function Hero({
  startAnim,
  tripType,
  privatePax,
  setPrivatePax,
  currency,
  formatUsd,
}: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
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
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center py-14 sm:py-16 lg:py-14">
        {/* Screen-reader and Search-engine only H1 header */}
        <h1 className="sr-only">
          Doltrip Lovina | Best Dolphin Watching & Snorkeling Tours in Lovina
          Beach, Bali
        </h1>

        {/* Main Title Banner in Outline Style */}
        <div
          className={`text-center mb-2 sm:mb-3 lg:mb-3 xl:mb-6 2xl:mb-8 transition-all duration-1000 transform delay-300 shrink-0 ${
            startAnim
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-6 scale-95"
          }`}
        >
          <div className="font-extrabold text-white text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-7xl 2xl:text-8xl tracking-wide uppercase select-none leading-none text-outline-title">
            Open Trip
          </div>
          <div className="font-extrabold text-white text-lg sm:text-2xl md:text-3xl lg:text-[2.25rem] xl:text-5xl 2xl:text-6xl tracking-wide uppercase select-none leading-none mt-0.5 sm:mt-1 text-outline-subtitle">
            Doltrip Lovina
          </div>
          <div className="mt-1.5 sm:mt-2 lg:mt-2 xl:mt-3">
            <span className="bg-yellow-400 text-[#0b3c5d] border-2 border-[#0b3c5d] font-bold text-[10px] sm:text-xs lg:text-sm xl:text-lg px-3 sm:px-4 lg:px-5 xl:px-6 py-0.5 sm:py-1 xl:py-1.5 rounded-full inline-block shadow-[2px_2px_0px_#0b3c5d] tracking-wider uppercase">
              {tripType === "open" ? "Sharing Boat" : "Private Boat"}
            </span>
          </div>
        </div>

        {/* Desktop Grid Layout: Polaroids Left, Pricing List Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 items-center w-full shrink min-h-0">
          {/* Left Column: Overlapping Polaroid pictures */}
          <div
            className={`hidden lg:grid lg:col-span-6 grid-cols-2 gap-1.5 xl:gap-3 2xl:gap-5 max-w-[220px] xl:max-w-[320px] 2xl:max-w-[400px] mx-auto transition-all duration-1000 transform delay-500 ${
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
            className={`col-span-1 lg:col-span-6 w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[380px] xl:max-w-[430px] 2xl:max-w-[460px] mx-auto transition-all duration-1000 transform delay-700 ${
              startAnim
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-white border-3 sm:border-4 border-[#0b3c5d] rounded-[18px] sm:rounded-[22px] xl:rounded-[24px] p-2.5 pt-9 pb-3 sm:p-4 sm:pt-10 sm:pb-5 lg:p-3 lg:pt-9 lg:pb-3.5 xl:p-5 xl:pt-12 xl:pb-6 2xl:p-6 2xl:pt-14 2xl:pb-8 shadow-[4px_4px_0px_rgba(11,60,93,0.3)] sm:shadow-[6px_6px_0px_rgba(11,60,93,0.3)] relative">
              {/* Speech Bubble Header */}
              <div className="absolute top-[-26px] sm:top-[-34px] lg:top-[-30px] xl:top-[-38px] 2xl:top-[-45px] right-2.5 sm:right-4 xl:right-6 bg-sky-400 border-2 sm:border-3 border-[#0b3c5d] text-white rounded-[10px] sm:rounded-[14px] xl:rounded-[16px] px-2 py-0.5 sm:px-3 sm:py-1 xl:px-5 xl:py-1.5 2xl:px-6 2xl:py-2 shadow-[2px_2px_0px_#0b3c5d] sm:shadow-[3px_3px_0px_#0b3c5d] z-20">
                <div className="text-[7px] sm:text-[8px] lg:text-[7px] xl:text-[10px] 2xl:text-xs uppercase font-extrabold tracking-wider text-[#00263f]">
                  Start From
                </div>
                <div className="text-sm sm:text-base lg:text-sm xl:text-xl 2xl:text-2xl font-black text-[#00263f] leading-none my-0.5">
                  {currency === "IDR"
                    ? `Rp ${tripType === "open" ? "80.000" : "300.000"}`
                    : formatUsd(startingPrices[tripType])
                  }
                </div>
                <div className="text-[7px] sm:text-[8px] lg:text-[7px] xl:text-[9px] 2xl:text-[10px] text-right font-bold italic text-[#00263f]">
                  Book Now!
                </div>
              </div>

              {/* Card Title & Passenger Selector for Private Boat */}
              <div className="mb-1.5 sm:mb-3 lg:mb-1.5 xl:mb-3 2xl:mb-5">
                <h3 className="font-bold text-[#0b3c5d] text-[11px] sm:text-sm lg:text-xs xl:text-base 2xl:text-lg mb-1.5 sm:mb-3 lg:mb-1.5 xl:mb-3 uppercase tracking-wider flex items-center gap-1.5">
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-emerald-600 stroke-[3]" />
                  Tour Packages List
                </h3>

                {/* Private Boat Pax Selector */}
                {tripType === "private" && (
                  <div className="bg-sky-50 border-2 border-[#0b3c5d] rounded-lg p-1.5 sm:p-2 lg:p-1.5 xl:p-2.5 mb-1.5 sm:mb-3 lg:mb-1.5 xl:mb-3 text-center">
                    <div className="text-[8px] sm:text-[10px] lg:text-[8px] xl:text-[11px] font-bold text-[#0b3c5d] uppercase mb-1">
                      Select Number of Passengers
                    </div>
                    <div className="flex justify-center gap-1 sm:gap-1.5">
                      {[2, 3, 4].map((pax) => (
                        <button
                          key={pax}
                          onClick={() => setPrivatePax(pax as 2 | 3 | 4)}
                          className={`px-1.5 py-0.5 sm:px-2.5 sm:py-1 lg:px-2 lg:py-0.5 xl:px-3 xl:py-1 rounded-md font-bold text-[8px] sm:text-[10px] lg:text-[8px] xl:text-[11px] border-2 transition-all ${
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
              <div className="space-y-1 sm:space-y-2 lg:space-y-1 xl:space-y-2.5 2xl:space-y-3.5 mb-2 sm:mb-3 lg:mb-2 xl:mb-4 2xl:mb-5">
                {tripType === "open"
                  ? openPackages.map((pkg, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between items-start border-b border-dashed border-sky-100 pb-0.5 sm:pb-1.5 lg:pb-0.5 xl:pb-2 gap-2"
                      >
                        <div className="flex items-start gap-1 sm:gap-1.5 min-w-0">
                          <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-sky-500 stroke-[3] shrink-0 mt-0.5" />
                          <span className="text-[9px] sm:text-[11px] lg:text-[10px] xl:text-xs 2xl:text-sm font-bold text-[#0b3c5d] capitalize leading-tight">
                            {pkg.name}
                          </span>
                        </div>
                        <span className="text-[9px] sm:text-[11px] lg:text-[10px] xl:text-xs 2xl:text-sm font-black text-[#d95e36] bg-orange-50 px-1 sm:px-1.5 py-0.5 rounded border border-orange-200 shrink-0">
                          {currency === "IDR" ? pkg.price : formatUsd(pkg.priceNum)}
                        </span>
                      </div>
                    ))
                  : privatePackages.map((pkg, idx) => {
                      const currentPrice = pkg.prices[privatePax];
                      const formattedPrice = currentPrice / 1000;
                      return (
                        <div
                          key={idx}
                          className="flex justify-between items-start border-b border-dashed border-sky-100 pb-0.5 sm:pb-1.5 lg:pb-0.5 xl:pb-2 gap-2"
                        >
                          <div className="flex items-start gap-1 sm:gap-1.5 min-w-0">
                            <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-sky-500 stroke-[3] shrink-0 mt-0.5" />
                            <span className="text-[9px] sm:text-[11px] lg:text-[10px] xl:text-xs 2xl:text-sm font-bold text-[#0b3c5d] capitalize leading-tight">
                              {pkg.name}
                            </span>
                          </div>
                          <span className="text-[9px] sm:text-[11px] lg:text-[10px] xl:text-xs 2xl:text-sm font-black text-[#d95e36] bg-orange-50 px-1 sm:px-1.5 py-0.5 rounded border border-orange-200 shrink-0">
                            {currency === "IDR" ? `${formattedPrice}k` : formatUsd(currentPrice)}
                          </span>
                        </div>
                      );
                    })}
              </div>

              {/* Booking Notice in Card */}
              {tripType === "private" && (
                <div className="border border-sky-100 bg-sky-50/50 rounded-lg p-1 sm:p-2 lg:p-1.5 xl:p-2 text-[7px] sm:text-[9px] lg:text-[8px] xl:text-[9px] text-gray-500 mb-2 sm:mb-3 lg:mb-2 xl:mb-4 flex gap-1 items-start">
                  <Info className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#0b3c5d] shrink-0 mt-0.5" />
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
                className="w-full bg-[#d95e36] hover:bg-[#c64d26] border-2 sm:border-3 border-[#0b3c5d] text-white font-bold py-1.5 px-2.5 sm:py-2.5 sm:px-4 lg:py-2 lg:px-3 xl:py-3 xl:px-5 2xl:py-3.5 2xl:px-6 rounded-lg xl:rounded-xl shadow-[2px_2px_0px_#0b3c5d] sm:shadow-[3px_3px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all flex items-center justify-center gap-1.5 text-[10px] sm:text-xs lg:text-[11px] xl:text-sm 2xl:text-base uppercase"
              >
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 fill-white" />
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Social Contacts Bar at the Bottom */}
        <div
          className={`flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 xl:gap-8 mt-2 sm:mt-3 lg:mt-3 xl:mt-5 2xl:mt-8 py-1.5 sm:py-2 lg:py-2 xl:py-3 2xl:py-4 px-3 sm:px-4 xl:px-6 bg-[#fbf9f7]/90 border-2 sm:border-3 border-[#0b3c5d] rounded-[14px] sm:rounded-[18px] md:rounded-full shadow-[3px_3px_0px_rgba(11,60,93,0.3)] w-full max-w-[260px] sm:max-w-[420px] md:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[760px] shrink-0 relative z-30 transition-all duration-1000 transform delay-1000 ${
            startAnim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a
            href="https://wa.me/6281947723849"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[#d95e36] font-bold text-[9px] sm:text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm text-[#0b3c5d] transition-colors"
          >
            <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-green-500 fill-green-500" />
            <span>081947723849</span>
          </a>
          <a
            href="https://instagram.com/doltrip.lovina"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[#d95e36] font-bold text-[9px] sm:text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm text-[#0b3c5d] transition-colors"
          >
            <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 text-pink-500" />
            <span>doltrip.lovina</span>
          </a>
          <a
            href="https://tiktok.com/@doltrip.lovina"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-[#d95e36] font-bold text-[9px] sm:text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm text-[#0b3c5d] transition-colors"
          >
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 bg-[#0b3c5d] text-white rounded-full flex items-center justify-center font-black text-[6px] sm:text-[7px] xl:text-[8px] 2xl:text-[9px]">
              T
            </span>
            <span>doltrip.lovina</span>
          </a>
        </div>
      </div>

      {/* Wavy Divider - subtle and compact */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-20">
        <svg
          className="relative block w-full h-[24px] sm:h-[32px] md:h-[50px] translate-y-[1px]"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          {/* Soft shadow wave behind */}
          <path
            d="M0,22 C240,42 480,8 720,28 C960,48 1200,12 1440,22 L1440,54 L0,54 Z"
            fill="#FBF9F7"
            opacity="0.5"
          />
          {/* Main wave */}
          <path
            d="M0,30 C200,46 400,14 720,32 C1040,50 1240,18 1440,30 L1440,54 L0,54 Z"
            fill="#FBF9F7"
          />
        </svg>
      </div>
    </section>
  );
}
