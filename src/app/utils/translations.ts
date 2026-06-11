export type Locale = "id" | "en";

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // ── Header ──
    "nav.whatYouGet": "What You Get",
    "nav.packages": "Packages",
    "nav.openTrip": "Open Trip",
    "nav.privateBoat": "Private Boat",
    "nav.bookNow": "Book Now",
    "nav.toggleMenu": "Toggle menu",

    // ── Hero ──
    "hero.h1": "Doltrip Lovina | Best Dolphin Watching & Snorkeling Tours in Lovina Beach, Bali",
    "hero.openTrip": "Open Trip",
    "hero.subtitle": "Doltrip Lovina",
    "hero.sharingBoat": "Sharing Boat",
    "hero.privateBoat": "Private Boat",
    "hero.startFrom": "Start From",
    "hero.bookNow": "Book Now!",
    "hero.tourList": "Tour Packages List",
    "hero.selectPassengers": "Select Number of Passengers",
    "hero.people": "People",
    "hero.priceNotice": "Price is per boat. More than 5 people price will be the same as share boat.",
    "hero.bookWhatsapp": "Book via WhatsApp",
    "hero.sunriseDolphin": "Sunrise Dolphin",
    "hero.dolphinTour": "Dolphin Tour",
    "hero.lovinaCalmSea": "Lovina Calm Sea",
    "hero.sunriseLovina": "Sunrise Lovina",

    // ── Journey ──
    "journey.tag": "THE JOURNEY",
    "journey.title": "What You'll Experience",
    "journey.desc": "Every trip with Doltrip Lovina is equipped with premium facilities and high safety standards for the maximum comfort of your adventure.",
    "journey.schedule": "2–3 Hour Trip | Departures: 06:00 · 09:00 · 16:00",
    "journey.balinese": "Balinese",
    "journey.ceremony": "Ceremony",
    "journey.lifeJackets": "Life Jackets",
    "journey.snorkelingGear": "Snorkeling Gear",
    "journey.freePhotos": "Free Photos",
    "journey.goProRental": "Insta360 Rental",
    "journey.professional": "Professional",
    "journey.guide": "Guide",

    // ── Pricing ──
    "pricing.title": "Choose Your Experience",
    "pricing.desc": "Select the option that best fits your group. Join other travelers or book a private boat for an exclusive journey.",
    "pricing.openTrip": "Open Trip",
    "pricing.privateBoat": "Private Boat",
    "pricing.selectPassengers": "Select Number of Passengers",
    "pricing.people": "People",
    "pricing.priceNotice": "Price is per boat. For 5+ people, standard sharing rates apply.",
    "pricing.bestValue": "Best Value",
    "pricing.perPax": "/ pax",
    "pricing.perBoat": "/ boat",
    "pricing.totalPrice": "Total Price",
    "pricing.bookOpen": "Book Open Trip",
    "pricing.bookPrivate": "Book Private Boat",
    "pricing.liveRate": "Live rate: 1 USD = Rp",

    // ── Footer ──
    "footer.readyTitle": "Ready to Meet the Dolphins?",
    "footer.readyDesc": "Dolphin spots fill up quickly! Reach out to secure your booking today for the most memorable sunrise cruise in Lovina, Bali.",
    "footer.bookWhatsapp": "Book via WhatsApp",
    "footer.followIg": "Follow Instagram",
    "footer.brandDesc": "Premium marine tourism experiences in Lovina, Bali. Eco-friendly sunrise dolphin cruises and coral reef snorkeling led by local professional guides.",
    "footer.quickLinks": "Quick Links",
    "footer.ourJourney": "Our Journey",
    "footer.packagesPricing": "Packages & Pricing",
    "footer.customTours": "Custom Tours",
    "footer.connectWithUs": "Connect With Us",
    "footer.connectDesc": "Feel free to follow us or chat with our admin directly through our social media channels.",
    "footer.copyright": "© 2026 Doltrip Lovina. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // ── WhatsApp ──
    "wa.greeting": "Hello Doltrip Lovina, I would like to book the",
    "wa.package": "package",
    "wa.privateBoat": "Private Boat for",
    "wa.people": "People",
    "wa.openTrip": "Open Trip / Sharing Boat",
    "wa.closing": "Please check the availability of slots. Thank you!",
  },

  id: {
    // ── Header ──
    "nav.whatYouGet": "Apa Yang Didapat",
    "nav.packages": "Paket",
    "nav.openTrip": "Open Trip",
    "nav.privateBoat": "Private Boat",
    "nav.bookNow": "Pesan Sekarang",
    "nav.toggleMenu": "Buka menu",

    // ── Hero ──
    "hero.h1": "Doltrip Lovina | Tour Dolphin Watching & Snorkeling Terbaik di Lovina Beach, Bali",
    "hero.openTrip": "Open Trip",
    "hero.subtitle": "Doltrip Lovina",
    "hero.sharingBoat": "Sharing Boat",
    "hero.privateBoat": "Private Boat",
    "hero.startFrom": "Mulai Dari",
    "hero.bookNow": "Pesan Sekarang!",
    "hero.tourList": "Daftar Paket Tour",
    "hero.selectPassengers": "Pilih Jumlah Penumpang",
    "hero.people": "Orang",
    "hero.priceNotice": "Harga per boat. Lebih dari 5 orang harga sama dengan share boat.",
    "hero.bookWhatsapp": "Pesan via WhatsApp",
    "hero.sunriseDolphin": "Sunrise Dolphin",
    "hero.dolphinTour": "Dolphin Tour",
    "hero.lovinaCalmSea": "Laut Tenang Lovina",
    "hero.sunriseLovina": "Sunrise Lovina",

    // ── Journey ──
    "journey.tag": "PERJALANAN",
    "journey.title": "Yang Akan Anda Rasakan",
    "journey.desc": "Setiap perjalanan bersama Doltrip Lovina dilengkapi fasilitas premium dan standar keselamatan tinggi untuk kenyamanan maksimal petualangan Anda.",
    "journey.schedule": "Durasi 2–3 Jam | Keberangkatan: 06:00 · 09:00 · 16:00",
    "journey.balinese": "Upacara",
    "journey.ceremony": "Bali",
    "journey.lifeJackets": "Pelampung",
    "journey.snorkelingGear": "Alat Snorkeling",
    "journey.freePhotos": "Foto Gratis",
    "journey.goProRental": "Sewa Insta360",
    "journey.professional": "Pemandu",
    "journey.guide": "Profesional",

    // ── Pricing ──
    "pricing.title": "Pilih Pengalaman Anda",
    "pricing.desc": "Pilih opsi yang paling sesuai dengan grup Anda. Bergabung dengan wisatawan lain atau sewa boat privat untuk perjalanan eksklusif.",
    "pricing.openTrip": "Open Trip",
    "pricing.privateBoat": "Private Boat",
    "pricing.selectPassengers": "Pilih Jumlah Penumpang",
    "pricing.people": "Orang",
    "pricing.priceNotice": "Harga per boat. Untuk 5+ orang, tarif sharing berlaku.",
    "pricing.bestValue": "Terbaik",
    "pricing.perPax": "/ pax",
    "pricing.perBoat": "/ boat",
    "pricing.totalPrice": "Total Harga",
    "pricing.bookOpen": "Pesan Open Trip",
    "pricing.bookPrivate": "Pesan Private Boat",
    "pricing.liveRate": "Kurs langsung: 1 USD = Rp",

    // ── Footer ──
    "footer.readyTitle": "Siap Bertemu Lumba-Lumba?",
    "footer.readyDesc": "Slot dolphin cepat habis! Hubungi kami sekarang untuk memesan pengalaman sunrise cruise paling berkesan di Lovina, Bali.",
    "footer.bookWhatsapp": "Pesan via WhatsApp",
    "footer.followIg": "Ikuti Instagram",
    "footer.brandDesc": "Pengalaman wisata bahari premium di Lovina, Bali. Cruise sunrise dolphin ramah lingkungan dan snorkeling terumbu karang dipandu oleh pemandu lokal profesional.",
    "footer.quickLinks": "Menu",
    "footer.ourJourney": "Perjalanan Kami",
    "footer.packagesPricing": "Paket & Harga",
    "footer.customTours": "Tour Khusus",
    "footer.connectWithUs": "Hubungi Kami",
    "footer.connectDesc": "Silakan ikuti kami atau hubungi admin langsung melalui media sosial kami.",
    "footer.copyright": "© 2026 Doltrip Lovina. Hak cipta dilindungi.",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Syarat & Ketentuan",

    // ── WhatsApp ──
    "wa.greeting": "Halo Doltrip Lovina, saya ingin memesan paket",
    "wa.package": "",
    "wa.privateBoat": "Private Boat untuk",
    "wa.people": "Orang",
    "wa.openTrip": "Open Trip / Sharing Boat",
    "wa.closing": "Mohon cek ketersediaan slot. Terima kasih!",
  },
};

export function getTranslation(locale: Locale) {
  const dict = translations[locale];
  return function t(key: string): string {
    return dict[key] ?? key;
  };
}

export default translations;
