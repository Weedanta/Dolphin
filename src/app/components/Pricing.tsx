import { Flame, Users, Anchor, Check, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openPackages, privatePackages } from "@/app/utils/data";
import { getWhatsAppLink } from "@/app/utils/whatsapp";
import { useLanguage } from "@/app/utils/LanguageContext";


interface PricingProps {
  tripType: "open" | "private";
  setTripType: (type: "open" | "private") => void;
  privatePax: 2 | 3 | 4;
  setPrivatePax: (pax: 2 | 3 | 4) => void;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number] // easeOutCubic
    }
  }
};

export default function Pricing({
  tripType,
  setTripType,
  privatePax,
  setPrivatePax,
}: PricingProps) {
  const { locale, t, formatPrice } = useLanguage();

  return (
    <section id="pricing" className="py-12 sm:py-16 bg-[#f5f3f1] relative z-10 border-t border-gray-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-8 sm:mb-10"
        >
          <h2 className="font-['Poppins',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0b3c5d] leading-tight uppercase tracking-tight mb-4 sm:mb-6">
            {t("pricing.title")}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
            {t("pricing.desc")}
          </p>

          {/* Toggle Switch */}
          <div className="bg-gray-200/50 p-1 rounded-xl sm:rounded-2xl inline-flex items-center gap-1 sm:gap-1.5 shadow-inner border border-gray-300/30">
            <button
              onClick={() => setTripType("open")}
              className={`px-3.5 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2 ${
                tripType === "open"
                  ? "bg-[#0b3c5d] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-300/30"
              }`}
            >
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t("pricing.openTrip")}
            </button>
            <button
              onClick={() => setTripType("private")}
              className={`px-3.5 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-2 ${
                tripType === "private"
                  ? "bg-[#0b3c5d] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-300/30"
              }`}
            >
              <Anchor className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t("pricing.privateBoat")}
            </button>
          </div>
        </motion.div>

        {/* Interactive Pax Selector for Private Boat */}
        <AnimatePresence initial={false}>
          {tripType === "private" && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", y: 0, scale: 1 }}
              exit={{ opacity: 0, height: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="max-w-xl mx-auto bg-white border border-[#c9e6ff] rounded-3xl p-6 mb-8 shadow-sm text-center overflow-hidden"
            >
              <h3 className="font-bold text-[#00263f] mb-4 flex items-center justify-center gap-2">
                <Users className="w-5 h-5 text-[#d95e36]" />
                {t("pricing.selectPassengers")}
              </h3>
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                {[2, 3, 4].map((pax) => (
                  <button
                    key={pax}
                    onClick={() => setPrivatePax(pax as 2 | 3 | 4)}
                    className={`py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                      privatePax === pax
                        ? "bg-[#d95e36] border-[#d95e36] text-white shadow-md shadow-orange-500/10"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                    }`}
                  >
                    {pax} {t("pricing.people")}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100 max-w-md mx-auto">
                <Info className="w-4 h-4 text-[#0b3c5d] shrink-0" />
                <span>{t("pricing.priceNotice")}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Packages Display */}
        <AnimatePresence mode="wait">
          {tripType === "open" ? (
            /* Open Trip Layout */
            <motion.div
              key="open-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -15, transition: { duration: 0.25 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 items-stretch"
            >
              {openPackages.map((pkg, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`bg-white border-2 sm:border-3 rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 shadow-[3px_3px_0px_rgba(11,60,93,0.15)] sm:shadow-[4px_4px_0px_rgba(11,60,93,0.15)] hover:shadow-[4px_4px_0px_#d95e36] sm:hover:shadow-[6px_6px_0px_#d95e36] hover:border-[#d95e36] hover:bg-orange-50/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative ${
                    pkg.isPopular ? "border-[#d95e36] scale-102 z-10" : "border-[#0b3c5d]"
                  }`}
                >
                  {pkg.isPopular && (
                    <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-yellow-400 border-2 border-[#0b3c5d] text-[#0b3c5d] text-[10px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-[1.5px_1.5px_0px_#0b3c5d] flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 fill-[#0b3c5d]" />
                      {t("pricing.bestValue")}
                    </span>
                  )}
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#0b3c5d] mb-1">{pkg.name}</h3>
                    <div className="mb-4 sm:mb-6 flex items-baseline mt-2 sm:mt-3">
                      <span className="text-xl sm:text-2xl font-black text-[#d95e36]">
                        {formatPrice(pkg.priceNum)}
                      </span>
                      <span className="text-gray-400 text-xs ml-1">{t("pricing.perPax")}</span>
                    </div>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 border-t border-gray-100 pt-3 sm:pt-4">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-[13px] text-gray-600">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={getWhatsAppLink(pkg.name, false, undefined, locale)}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-xs md:text-sm border-2 border-[#0b3c5d] text-white text-center flex items-center justify-center gap-2 shadow-[2px_2px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all ${
                      pkg.isPopular
                        ? "bg-[#d95e36] hover:bg-[#c64d26]"
                        : "bg-[#0b3c5d] hover:bg-[#082d47]"
                    }`}
                  >
                    <span>{t("pricing.bookOpen")}</span>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Private Boat Layout */
            <motion.div
              key="private-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -15, transition: { duration: 0.25 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 items-stretch"
            >
              {privatePackages.map((pkg, idx) => {
                const currentPrice = pkg.prices[privatePax];

                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className={`bg-white border-2 sm:border-3 rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 shadow-[3px_3px_0px_rgba(11,60,93,0.15)] sm:shadow-[4px_4px_0px_rgba(11,60,93,0.15)] hover:shadow-[4px_4px_0px_#d95e36] sm:hover:shadow-[6px_6px_0px_#d95e36] hover:border-[#d95e36] hover:bg-orange-50/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative ${
                      pkg.isPopular ? "border-[#d95e36] scale-102 z-10" : "border-[#0b3c5d]"
                    }`}
                  >
                    {pkg.isPopular && (
                      <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-yellow-400 border-2 border-[#0b3c5d] text-[#0b3c5d] text-[10px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-[1.5px_1.5px_0px_#0b3c5d] flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 fill-[#0b3c5d]" />
                        {t("pricing.bestValue")}
                      </span>
                    )}
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#0b3c5d] mb-1">{pkg.name}</h3>
                      <div className="mb-4 sm:mb-6 flex flex-col mt-2 sm:mt-3">
                        <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
                          {t("pricing.totalPrice")} ({privatePax} {t("pricing.people")})
                        </span>
                        <div className="flex items-baseline">
                          <span className="text-xl sm:text-2xl font-black text-[#d95e36]">
                            {formatPrice(currentPrice)}
                          </span>
                          <span className="text-gray-400 text-xs ml-1">{t("pricing.perBoat")}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 border-t border-gray-100 pt-3 sm:pt-4">
                        {pkg.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-[13px] text-gray-600">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={getWhatsAppLink(pkg.name, true, privatePax, locale)}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-3.5 rounded-xl font-bold text-xs md:text-sm border-2 border-[#0b3c5d] text-white text-center flex items-center justify-center gap-2 shadow-[2px_2px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all ${
                        pkg.isPopular
                          ? "bg-[#d95e36] hover:bg-[#c64d26]"
                          : "bg-[#0b3c5d] hover:bg-[#082d47]"
                      }`}
                    >
                      <span>{t("pricing.bookPrivate")}</span>
                    </a>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
