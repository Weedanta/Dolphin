import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import svgPaths from "@/imports/Design/svg-ai09p7j501";
import { useLanguage } from "@/app/utils/LanguageContext";

function IconCard({ svgViewBox, svgPath, svgW, svgH, wrapW, wrapH, lines }: {
  svgViewBox: string;
  svgPath: string;
  svgW: string;
  svgH: string;
  wrapW: string;
  wrapH: string;
  lines: string[];
}) {
  return (
    <div className="bg-white justify-self-stretch relative rounded-[16px] self-start shrink-0 border-3 border-[#0b3c5d] shadow-[4px_4px_0px_rgba(11,60,93,0.15)] hover:shadow-[6px_6px_0px_#d95e36] hover:border-[#d95e36] hover:bg-orange-50/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center p-3 sm:p-[24px] h-[125px] sm:h-[150px] cursor-pointer group">
      <div className={`${wrapH} relative shrink-0 ${wrapW} mb-[10px] sm:mb-[16px] text-[#0b3c5d] group-hover:text-[#d95e36] transition-colors duration-300`}>
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox={svgViewBox}>
          <g><path d={svgPath} fill="currentColor" /></g>
        </svg>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Poppins'] font-bold justify-center leading-[13px] sm:leading-[16.8px] not-italic relative shrink-0 text-[#0b3c5d] group-hover:text-[#d95e36] transition-colors duration-300 text-[11px] sm:text-[14px] text-center tracking-[0.5px] sm:tracking-[0.7px] uppercase">
        {lines.map((line, i) => <p key={i} className="m-0">{line}</p>)}
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

const iconConfigs = [
  { svgViewBox: "0 0 33.3333 35", svgPath: "p1c0fcac0", wrapW: "w-[26.6px] sm:w-[33.333px]", wrapH: "h-[28px] sm:h-[35px]", keys: ["journey.balinese", "journey.ceremony"] },
  { svgViewBox: "0 0 26.6667 33.3333", svgPath: "p1f8bd100", wrapW: "w-[22.4px] sm:w-[26.667px]", wrapH: "h-[28px] sm:h-[33.333px]", keys: ["journey.lifeJackets"] },
  { svgViewBox: "0 0 36.6667 35", svgPath: "p1dfa2d00", wrapW: "w-[29.3px] sm:w-[36.667px]", wrapH: "h-[28px] sm:h-[35px]", keys: ["journey.snorkelingGear"] },
  { svgViewBox: "0 0 33.3333 30", svgPath: "p2160e4c0", wrapW: "w-[27.7px] sm:w-[33.333px]", wrapH: "h-[25px] sm:h-[30px]", keys: ["journey.freePhotos"] },
  { svgViewBox: "0 0 33.3333 26.6667", svgPath: "p2fb92e00", wrapW: "w-[27.5px] sm:w-[33.333px]", wrapH: "h-[22px] sm:h-[26.667px]", keys: ["journey.goProRental"] },
  { svgViewBox: "0 0 33.3333 30", svgPath: "p228da600", wrapW: "w-[27.7px] sm:w-[33.333px]", wrapH: "h-[25px] sm:h-[30px]", keys: ["journey.professional", "journey.guide"] },
];

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="pt-12 sm:pt-16 pb-10 sm:pb-12 bg-gradient-to-b from-[#fbf9f7] to-[#f5f3f1] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          <div className="max-w-xl">
            <span className="bg-sky-100 text-[#0b3c5d] border-2 border-[#0b3c5d]/30 font-bold text-xs uppercase px-4 py-1.5 rounded-full inline-block mb-4 shadow-[1.5px_1.5px_0px_rgba(11,60,93,0.15)] tracking-wider">
              {t("journey.tag")}
            </span>
            <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0b3c5d] leading-tight uppercase tracking-tight">
              {t("journey.title")}
            </h2>
            <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
              {t("journey.desc")}
            </p>
          </div>
          <div className="bg-white text-[#0b3c5d] font-bold text-[10px] sm:text-xs md:text-sm px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 border-2 border-[#0b3c5d] self-start shadow-[2px_2px_0px_#0b3c5d] sm:shadow-[3px_3px_0px_#0b3c5d]">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#d95e36] stroke-[2.5] shrink-0" />
            <span className="leading-snug">{t("journey.schedule")}</span>
          </div>
        </motion.div>

        {/* Expectations Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="bg-white border-3 sm:border-4 border-[#0b3c5d] rounded-[20px] sm:rounded-[32px] p-4 sm:p-6 md:p-10 shadow-[4px_4px_0px_rgba(11,60,93,0.15)] sm:shadow-[6px_6px_0px_rgba(11,60,93,0.15)]"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 w-full">
            {iconConfigs.map((cfg, i) => (
              <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
                <IconCard
                  svgViewBox={cfg.svgViewBox}
                  svgPath={(svgPaths as Record<string, string>)[cfg.svgPath]}
                  wrapW={cfg.wrapW}
                  wrapH={cfg.wrapH}
                  lines={cfg.keys.map(k => t(k))}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
