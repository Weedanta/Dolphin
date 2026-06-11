import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from "react-router";
import App from "./app/App.tsx";
import LinkTree from "./app/components/LinkTree.tsx";
import { LanguageProvider } from "./app/utils/LanguageContext.tsx";
import type { Locale } from "./app/utils/translations.ts";
import "./styles/index.css";

function detectLocale(): Locale {
  // 1. Check local storage for manual choice
  try {
    const saved = localStorage.getItem("user_preferred_locale");
    if (saved === "id" || saved === "en") {
      return saved;
    }
  } catch {
    // Ignore storage issues
  }

  // 2. Check timezone to see if user is in Indonesia
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const indonesianTzList = [
      "Asia/Jakarta",
      "Asia/Makassar",
      "Asia/Jayapura",
      "Asia/Pontianak",
      "Asia/Ujung_Pandang",
    ];
    if (
      tz &&
      (indonesianTzList.includes(tz) ||
        tz.toLowerCase().includes("jakarta") ||
        tz.toLowerCase().includes("makassar") ||
        tz.toLowerCase().includes("jayapura"))
    ) {
      return "id";
    }
  } catch {
    // Ignore timezone detection errors
  }

  // 3. Fallback to browser language settings
  try {
    const lang = navigator.language || navigator.languages?.[0];
    if (lang) {
      const lowerLang = lang.toLowerCase();
      if (lowerLang.startsWith("id") || lowerLang.startsWith("in")) {
        return "id";
      }
    }
  } catch {
    // Ignore browser language detection errors
  }

  return "en";
}

function LocalizedApp() {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const normalizedLang = lang?.toLowerCase();

  // Normalize case (e.g. /ID -> /id) and save choice
  useEffect(() => {
    if (lang && lang !== normalizedLang) {
      navigate(`/${normalizedLang}`, { replace: true });
    } else if (normalizedLang === "id" || normalizedLang === "en") {
      localStorage.setItem("user_preferred_locale", normalizedLang);
    }
  }, [lang, normalizedLang, navigate]);

  // Dynamically update <html lang> and <meta> for SEO
  const locale: Locale = normalizedLang === "id" ? "id" : "en";

  useEffect(() => {
    // Set the HTML lang attribute
    document.documentElement.lang = locale;

    // Update <meta name="language">
    const metaLang = document.querySelector('meta[name="language"]');
    if (metaLang) {
      metaLang.setAttribute("content", locale === "id" ? "Indonesian" : "English");
    }

    // Update document title for locale
    document.title =
      locale === "id"
        ? "Doltrip Lovina | Tour Dolphin Watching & Snorkeling Terbaik di Bali"
        : "Doltrip Lovina | Best Dolphin Watching & Snorkeling Tours in Bali";

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        locale === "id"
          ? "Nikmati cruise sunrise dolphin terbaik di Pantai Lovina Bali, berenang bersama lumba-lumba, dan snorkeling terumbu karang. Pesan boat sharing atau private boat tour dengan mudah via WhatsApp dengan harga terbaik."
          : "Experience Lovina Beach Bali's best sunrise dolphin cruises, swimming with dolphins, and coral reef snorkeling. Book shared traditional jukung boats or private boat tours easily via WhatsApp at best prices."
      );
    }

    // Update OG meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        locale === "id"
          ? "Doltrip Lovina | Tour Dolphin Watching & Snorkeling Terbaik di Bali"
          : "Doltrip Lovina | Best Dolphin Watching & Snorkeling Tours in Bali"
      );
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute(
        "content",
        locale === "id"
          ? "Pesan tour sunrise dolphin watching, berenang bersama lumba-lumba, dan snorkeling terbaik di Pantai Lovina, Bali. Pemesanan mudah via WhatsApp."
          : "Book the best sunrise dolphin watching, swimming with dolphins, and snorkeling trips in Lovina Beach, Bali. Easy online booking via WhatsApp."
      );
    }
  }, [locale]);

  return (
    <LanguageProvider locale={locale}>
      <App />
    </LanguageProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/link" element={<LinkTree />} />
      <Route path="/:lang" element={<LocalizedApp />} />
      <Route path="*" element={<Navigate to={`/${detectLocale()}`} replace />} />
    </Routes>
  </BrowserRouter>
);