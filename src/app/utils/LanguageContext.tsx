import { createContext, useContext, useMemo } from "react";
import type { Locale } from "@/app/utils/translations";
import { getTranslation } from "@/app/utils/translations";
import { useExchangeRate } from "@/app/utils/useExchangeRate";
import { startingPrices } from "@/app/utils/data";

interface LanguageContextValue {
  locale: Locale;
  t: (key: string) => string;
  formatPrice: (idrAmount: number) => string;
  formatStartPrice: (tripType: "open" | "private") => string;
  exchangeRate: number;
  rateLoading: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const { formatUsd, rate, loading: rateLoading } = useExchangeRate();
  const t = useMemo(() => getTranslation(locale), [locale]);

  const formatPrice = useMemo(() => {
    if (locale === "id") {
      return (idrAmount: number) => {
        return `Rp ${new Intl.NumberFormat("id-ID").format(idrAmount)}`;
      };
    }
    // EN → USD
    return (idrAmount: number) => formatUsd(idrAmount);
  }, [locale, formatUsd]);

  const formatStartPrice = useMemo(() => {
    if (locale === "id") {
      return (tripType: "open" | "private") => {
        return tripType === "open" ? "Rp 80.000" : "Rp 300.000";
      };
    }
    return (tripType: "open" | "private") => formatUsd(startingPrices[tripType]);
  }, [locale, formatUsd]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      t,
      formatPrice,
      formatStartPrice,
      exchangeRate: rate,
      rateLoading,
    }),
    [locale, t, formatPrice, formatStartPrice, rate, rateLoading]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
