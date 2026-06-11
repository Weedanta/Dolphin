import type { Locale } from "@/app/utils/translations";

export const getWhatsAppLink = (
  packageName: string,
  isPrivate: boolean,
  paxCount?: number,
  locale: Locale = "en"
) => {
  const phone = "6281947723849";

  if (locale === "id") {
    let text = `Halo Doltrip Lovina, saya ingin memesan paket *${packageName}*`;
    if (isPrivate) {
      text += ` (Private Boat untuk *${paxCount} Orang*)`;
    } else {
      text += ` (Open Trip / Sharing Boat)`;
    }
    text += `. Mohon cek ketersediaan slot. Terima kasih!`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  let text = `Hello Doltrip Lovina, I would like to book the *${packageName}* package`;
  if (isPrivate) {
    text += ` (Private Boat for *${paxCount} People*)`;
  } else {
    text += ` (Open Trip / Sharing Boat)`;
  }
  text += `. Please check the availability of slots. Thank you!`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
