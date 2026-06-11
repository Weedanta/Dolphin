import { useState, useEffect, useCallback } from "react";

const CACHE_KEY = "exchange_rate_usd_idr";
const CACHE_TTL = 60 * 60 * 1000; // 1 hour
const FALLBACK_RATE = 16000; // Fallback IDR per 1 USD

interface CachedRate {
  rate: number;
  timestamp: number;
}

function getCachedRate(): number | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached: CachedRate = JSON.parse(raw);
    if (Date.now() - cached.timestamp < CACHE_TTL) {
      return cached.rate;
    }
  } catch {
    // ignore parse errors
  }
  return null;
}

function setCachedRate(rate: number) {
  try {
    const data: CachedRate = { rate, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // ignore storage errors
  }
}

export function useExchangeRate() {
  const [rate, setRate] = useState<number>(() => getCachedRate() ?? FALLBACK_RATE);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cached = getCachedRate();
    if (cached) {
      setRate(cached);
      return;
    }

    let cancelled = false;
    setLoading(true);

    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled && data?.rates?.IDR) {
          const idrRate = data.rates.IDR;
          setRate(idrRate);
          setCachedRate(idrRate);
        }
      })
      .catch(() => {
        // Keep fallback rate on error
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  /** Convert an IDR amount to USD using the live rate */
  const convertIdrToUsd = useCallback(
    (idrAmount: number): number => {
      return Math.round((idrAmount / rate) * 100) / 100;
    },
    [rate]
  );

  /** Format a USD price nicely (e.g. $5.31 or $19) */
  const formatUsd = useCallback(
    (idrAmount: number): string => {
      const usd = convertIdrToUsd(idrAmount);
      // If it's a round number, no decimals; otherwise 2 decimals
      if (usd === Math.floor(usd)) {
        return `$${usd}`;
      }
      return `$${usd.toFixed(2)}`;
    },
    [convertIdrToUsd]
  );

  return { rate, loading, convertIdrToUsd, formatUsd };
}
