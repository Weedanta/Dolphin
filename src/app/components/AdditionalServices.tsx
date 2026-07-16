import { Camera, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { additionalServices } from "@/app/utils/data";
import { getWhatsAppLink } from "@/app/utils/whatsapp";
import { useLanguage } from "@/app/utils/LanguageContext";

const serviceIcons: Record<string, typeof Camera> = {
  insta360: Camera,
  guide: UserCheck,
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  },
};

export default function AdditionalServices() {
  const { locale, t, formatPrice } = useLanguage();

  return (
    <section id="additional-services" className="py-12 sm:py-16 bg-[#f5f3f1] relative z-10 border-t border-gray-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-8 sm:mb-10"
        >
          <h2 className="font-['Poppins',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0b3c5d] leading-tight uppercase tracking-tight mb-4 sm:mb-6">
            {t("services.title")}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">{t("services.desc")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {additionalServices.map((service, idx) => {
            const Icon = serviceIcons[service.id] ?? Camera;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="bg-white border-2 sm:border-3 border-[#0b3c5d] rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 shadow-[3px_3px_0px_rgba(11,60,93,0.15)] sm:shadow-[4px_4px_0px_rgba(11,60,93,0.15)] hover:shadow-[4px_4px_0px_#d95e36] sm:hover:shadow-[6px_6px_0px_#d95e36] hover:border-[#d95e36] hover:bg-orange-50/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0b3c5d]/5 flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0b3c5d]" />
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-[#0b3c5d] mb-3 sm:mb-4">{service.name}</h3>
                  <span className="text-xl sm:text-2xl font-black text-[#d95e36]">
                    {formatPrice(service.priceNum)}
                  </span>
                </div>
                <a
                  href={getWhatsAppLink(service.name, false, undefined, locale)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full mt-4 sm:mt-6 py-3 rounded-xl font-bold text-xs md:text-sm border-2 border-[#0b3c5d] text-white text-center flex items-center justify-center gap-2 shadow-[2px_2px_0px_#0b3c5d] hover:translate-y-0.5 active:translate-y-1 transition-all bg-[#0b3c5d] hover:bg-[#082d47]"
                >
                  <span>{t("services.book")}</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
