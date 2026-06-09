export const getWhatsAppLink = (packageName: string, isPrivate: boolean, paxCount?: number) => {
  const phone = "6281947723849";
  let text = `Hello Doltrip Lovina, I would like to book the *${packageName}* package`;
  if (isPrivate) {
    text += ` (Private Boat for *${paxCount} People*)`;
  } else {
    text += ` (Open Trip / Sharing Boat)`;
  }
  text += `. Please check the availability of slots. Thank you!`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
