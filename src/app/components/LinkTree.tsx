import { useState } from "react";
import imgDoltripLogo from "@/imports/Design/d303a0c9165b71c7002d625facdd22a45d8aabe1.png";
import imgLovinaSunriseBeach from "@/imports/Design/lovina_sunrise_beach.png";
import { WhatsAppIcon, TikTokIcon, InstagramIcon } from "@/app/utils/icons";

interface LinkItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
  hoverColor: string;
}



function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function PriceListIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
      <line x1="10" y1="9" x2="10" y2="9" />
    </svg>
  );
}

export default function LinkTree() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links: LinkItem[] = [
    {
      icon: <PriceListIcon className="w-6 h-6" />,
      label: "Price List",
      href: "https://drive.google.com/file/d/1BIYMnU0_7VIHYtCN4JC7_5YmFpSL10Zh/view",
      color: "from-amber-400 to-orange-500",
      hoverColor: "from-amber-500 to-orange-600",
    },
    {
      icon: <WhatsAppIcon className="w-6 h-6" />,
      label: "WhatsApp",
      href: "https://wa.me/6281947723849",
      color: "from-green-400 to-emerald-500",
      hoverColor: "from-green-500 to-emerald-600",
    },
    {
      icon: <TikTokIcon className="w-6 h-6" />,
      label: "TikTok",
      href: "https://tiktok.com/@doltrip.lovina",
      color: "from-gray-800 to-gray-900",
      hoverColor: "from-gray-900 to-black",
    },
    {
      icon: <InstagramIcon className="w-6 h-6" />,
      label: "Instagram",
      href: "https://instagram.com/doltrip.lovina",
      color: "from-purple-500 via-pink-500 to-orange-400",
      hoverColor: "from-purple-600 via-pink-600 to-orange-500",
    },
    {
      icon: <GlobeIcon className="w-6 h-6" />,
      label: "Website",
      href: "/id",
      color: "from-sky-400 to-blue-600",
      hoverColor: "from-sky-500 to-blue-700",
    },
  ];

  const socialIcons = [
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      href: "https://instagram.com/doltrip.lovina",
      label: "Instagram",
    },
    {
      icon: <WhatsAppIcon className="w-5 h-5" />,
      href: "https://wa.me/6281947723849",
      label: "WhatsApp",
    },
    {
      icon: <TikTokIcon className="w-5 h-5" />,
      href: "https://tiktok.com/@doltrip.lovina",
      label: "TikTok",
    },
  ];

  return (
    <div className="linktree-page min-h-screen flex flex-col items-center relative overflow-hidden">
      {/* Animated Ocean Gradient Background */}
      {/* Beach Background (same as Hero) */}
      <div className="fixed inset-0 z-0">
        <img
          src={imgLovinaSunriseBeach}
          alt="Lovina Beach"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 via-sky-200/30 to-[#fbf9f7]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[480px] mx-auto px-5 py-10 sm:py-14 flex flex-col items-center">
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8 sm:mb-10">
          {/* Logo with glow effect */}
          <div className="relative mb-4">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-orange-400 rounded-full blur-xl opacity-30 scale-110" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-1 shadow-xl shadow-sky-200/50 ring-2 ring-white/80">
              <img
                src={imgDoltripLogo}
                alt="Doltrip Lovina"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Profile Name */}
          <h1 className="font-['Poppins',sans-serif] font-extrabold text-xl sm:text-2xl text-[#0b3c5d] tracking-tight mb-1.5">
            doltrip.team
          </h1>

          {/* Bio Description */}
          <p className="text-[#0b3c5d]/70 text-sm sm:text-[15px] text-center leading-relaxed max-w-[300px] font-medium">
            Mau tanya-tanya soal trip? Hubungi aku di bawah ya! 🐬
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center gap-4 mt-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm border border-white/50 shadow-md shadow-sky-100/50 flex items-center justify-center text-[#0b3c5d] hover:bg-[#0b3c5d] hover:text-white hover:shadow-lg hover:shadow-sky-300/30 hover:scale-110 active:scale-95 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link Cards */}
        <div className="w-full flex flex-col gap-3.5 sm:gap-4 mb-10">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("/") ? "_self" : "_blank"}
              rel={link.href.startsWith("/") ? undefined : "noreferrer"}
              className="linktree-link-card group relative w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card Background */}
              <div
                className={`relative overflow-hidden rounded-2xl border border-white/60 shadow-md transition-all duration-300 ${
                  hoveredIndex === index
                    ? "shadow-xl shadow-sky-200/40 scale-[1.02] border-white/80"
                    : "shadow-md shadow-sky-100/30"
                }`}
              >
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/75 backdrop-blur-md" />

                {/* Gradient accent on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${hoveredIndex === index ? link.hoverColor : link.color} opacity-0 transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-[0.06]" : ""
                  }`}
                />

                {/* Content */}
                <div className="relative flex items-center px-2 py-1 sm:px-4 sm:py-2">
                  {/* Icon Container */}
                  <div
                    className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${
                      hoveredIndex === index ? link.hoverColor : link.color
                    } flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
                      hoveredIndex === index ? "shadow-xl scale-110" : ""
                    }`}
                  >
                    {link.icon}
                  </div>

                  {/* Label */}
                  <span
                    className={`flex-1 text-center font-semibold text-[15px] sm:text-base text-[#0b3c5d] transition-colors duration-300 ${
                      hoveredIndex === index ? "text-[#0a3352]" : ""
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Arrow indicator */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      hoveredIndex === index
                        ? "bg-[#0b3c5d]/10 translate-x-0.5"
                        : "bg-transparent"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 text-[#0b3c5d]/50 transition-all duration-300 ${
                        hoveredIndex === index
                          ? "text-[#0b3c5d] translate-x-0.5"
                          : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Branding */}
        <div className="flex flex-col items-center gap-3 pb-6">
          <a
            href="/id"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 shadow-sm text-[#0b3c5d] font-semibold text-xs sm:text-sm hover:bg-white/80 hover:shadow-md transition-all duration-300"
          >
            <img src={imgDoltripLogo} alt="" className="w-4 h-4 rounded-full" />
            doltriplovina.my.id
          </a>
          <p className="text-[10px] text-[#0b3c5d]/40 font-medium tracking-wider uppercase">
            © {new Date().getFullYear()} Doltrip Lovina
          </p>
        </div>
      </div>
    </div>
  );
}
