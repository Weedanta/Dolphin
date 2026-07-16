export const openPackages = [
  {
    name: "Dolphin watching",
    price: "100k",
    priceNum: 100000,
    features: ["Shared Traditional Boat", "Sunrise Dolphin Sighting", "Life Jacket"],
  },
  {
    name: "Snorkeling",
    price: "100k",
    priceNum: 100000,
    features: ["Shared Boat", "Snorkeling Gear", "Life Jacket"],
  },
  {
    name: "Swimming with dolphin",
    price: "95k",
    priceNum: 95000,
    features: ["Shared Boat", "Dolphin interaction", "Life Jacket"],
  },
  {
    name: "Dolphin + snorkeling",
    price: "180k",
    priceNum: 180000,
    features: ["Shared Boat", "Dolphin watching + Snorkeling", "Gear & Life Jacket"],
    isPopular: true,
  },
  {
    name: "Dolphin watching + snorkeling + swimming",
    price: "250K",
    priceNum: 250000,
    features: ["Shared Boat", "Dolphins watching + Snorkel + Swim", "Gear & Life Jacket"],
  },
];

export const privatePackages = [
  {
    id: "dolphin",
    name: "Watching Dolphin",
    prices: { 2: 450000, 3: 500000, 4: 550000 } as Record<number, number>,
    details: { 2: "2 people dolphin sunrise 450k", 3: "3 people dolphin sunrise 500k", 4: "4 people dolphin sunrise 550k" },
    features: ["Private Boat", "Sunrise Dolphin Sighting", "Life Jackets included"],
  },
  {
    id: "snorkeling",
    name: "Snorkeling",
    prices: { 2: 400000, 3: 450000, 4: 500000 } as Record<number, number>,
    details: { 2: "2 people snorkeling 400k", 3: "3 people snorkeling 450k", 4: "4 people snorkeling 500k" },
    features: ["Private Boat", "Snorkeling gear included", "Life Jackets included"],
  },
  {
    id: "swim",
    name: "Watching + Swimming",
    prices: { 2: 580000, 3: 800000, 4: 1000000 } as Record<number, number>,
    details: { 2: "2 people watching + swim 580k", 3: "3 people watching + swim 800k", 4: "4 people watching + swim 1.000k" },
    features: ["Private Boat", "Dolphin Sight + Swim", "Life Jackets & safety line"],
  },
  {
    id: "dolphin_snorkel",
    name: "Dolphins + Snorkeling",
    prices: { 2: 600000, 3: 750000, 4: 800000 } as Record<number, number>,
    details: { 2: "2 people dolphins + snorkel 600k", 3: "3 people dolphins + snorkel 750k", 4: "4 people dolphins + snorkel 800k" },
    features: ["Private Boat", "Dolphin Sight + Snorkeling", "Gear & Life Jackets"],
    isPopular: true,
  },
  {
    id: "full",
    name: "Dolphins + Swim + Snorkeling",
    prices: { 2: 800000, 3: 1000000, 4: 1300000 } as Record<number, number>,
    details: { 2: "2 people dolphins + swim + snorkel 800k", 3: "3 people dolphins + swim + snorkel 1.000k", 4: "4 people dolphins + swim + snorkel 1.300k" },
    features: ["Private Boat", "Dolphin Watching + Swim + Snorkel", "Complete safety gear"],
  },
];

/** Lowest starting price for each trip type (in IDR) */
export const startingPrices = {
  open: 95000,
  private: 400000,
};

/** Paid add-on services, not included in package prices */
export const additionalServices = [
  { id: "insta360", name: "Insta360 Rental", priceNum: 150000 },
  { id: "guide", name: "Guide", priceNum: 100000 },
];
