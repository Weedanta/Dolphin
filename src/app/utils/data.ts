export type Currency = "IDR" | "USD";

export const openPackages = [
  {
    name: "Dolphin watching",
    price: "85k",
    priceNum: 85000,
    features: ["Shared Traditional Boat", "Sunrise Dolphin Sighting", "Life Jacket"],
  },
  {
    name: "Snorkeling",
    price: "80k",
    priceNum: 80000,
    features: ["Shared Boat", "Snorkeling Gear", "Life Jacket"],
  },
  {
    name: "Swimming with dolphin",
    price: "85k",
    priceNum: 85000,
    features: ["Shared Boat", "Dolphin interaction", "Life Jacket"],
  },
  {
    name: "Dolphin + snorkeling",
    price: "150k",
    priceNum: 150000,
    features: ["Shared Boat", "Dolphin watching + Snorkeling", "Gear & Life Jacket"],
    isPopular: true,
  },
  {
    name: "Dolphin watching + snorkeling + swimming",
    price: "235K",
    priceNum: 235000,
    features: ["Shared Boat", "Dolphins watching + Snorkel + Swim", "Gear & Life Jacket"],
  },
];

export const privatePackages = [
  {
    id: "dolphin",
    name: "Watching Dolphin",
    prices: { 2: 400000, 3: 450000, 4: 500000 } as Record<number, number>,
    details: { 2: "2 people dolphin sunrise 400k", 3: "3 people dolphin sunrise 450k", 4: "4 people dolphin sunrise 500k" },
    features: ["Private Boat", "Sunrise Dolphin Sighting", "Life Jackets included"],
  },
  {
    id: "snorkeling",
    name: "Snorkeling",
    prices: { 2: 300000, 3: 350000, 4: 400000 } as Record<number, number>,
    details: { 2: "2 people snorkeling 300k", 3: "3 people snorkeling 350k", 4: "4 people snorkeling 400k" },
    features: ["Private Boat", "Snorkeling gear included", "Life Jackets included"],
  },
  {
    id: "swim",
    name: "Watching + Swimming",
    prices: { 2: 500000, 3: 725000, 4: 950000 } as Record<number, number>,
    details: { 2: "2 people watching + swim 500k", 3: "3 people watching + swim 725k", 4: "4 people watching + swim 950k" },
    features: ["Private Boat", "Dolphin Sight + Swim", "Life Jackets & safety line"],
  },
  {
    id: "dolphin_snorkel",
    name: "Dolphins + Snorkeling",
    prices: { 2: 560000, 3: 690000, 4: 720000 } as Record<number, number>,
    details: { 2: "2 people dolphins + snorkel 560k", 3: "3 people dolphins + snorkel 690k", 4: "4 people dolphins + snorkel 720k" },
    features: ["Private Boat", "Dolphin Sight + Snorkeling", "Gear & Life Jackets"],
    isPopular: true,
  },
  {
    id: "full",
    name: "Dolphins + Swim + Snorkeling",
    prices: { 2: 730000, 3: 945000, 4: 1060000 } as Record<number, number>,
    details: { 2: "2 people dolphins + swim + snorkel 730k", 3: "3 people dolphins + swim + snorkel 945k", 4: "4 people dolphins + swim + snorkel 1.060k" },
    features: ["Private Boat", "Dolphin Watching + Swim + Snorkel", "Complete safety gear & guide"],
  },
];

/** Lowest starting price for each trip type (in IDR) */
export const startingPrices = {
  open: 80000,
  private: 300000,
};
