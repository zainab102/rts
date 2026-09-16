export const company = "Rising Tech Solutions";

export const budgetTotal = { min: 295, max: 505 };

export const keeps = [
  "Blue accent wall and white walls",
  "Glass partition and frost film",
  "Ceiling tray, circular feature, and existing lights",
  "Wood laminate floor",
  "Navy sofa, black desks, mesh chairs",
  "Wardrobe, coffee table, certificate frames",
  "Air conditioner and door positions",
];

export const moves = [
  {
    step: "01",
    title: "Declutter and split the room into three zones",
    cost: "Free",
    body: "This office currently does three jobs at once: founders’ desks, a guest lounge, and a storage/gym corner. Move the weight buckets, slippers, backpacks, and printer out of sight. Keep bags and the printer inside the wardrobe. The lounge is for guests. The meeting table is for conversations, not dumping.",
  },
  {
    step: "02",
    title: "Warm the existing lights",
    cost: "$20–$60",
    body: "The ceiling is already good. Swap the cool white bulbs for 3000K LEDs in the same fittings. Optional: peel-and-stick LED tape in the existing ceiling tray. No electrician, no new ceiling, no reconstruction — just a less clinical glow.",
  },
  {
    step: "03",
    title: "Ground the lounge with a rug",
    cost: "$45–$80",
    body: "A beige-walnut rug under the sofa and coffee table is the single biggest visual upgrade. It hides the empty stretch of floor, ties the navy sofa to the wood, and tells guests where to sit.",
  },
  {
    step: "04",
    title: "Style the sofa you already own",
    cost: "$35–$55",
    body: "Keep the navy sofa. Add three pillows in ivory, camel, and dusty blue, plus a cream throw. Style the glass coffee table with one tray, two books, and a small plant. That is enough. Tissue boxes and loose papers come off.",
  },
  {
    step: "05",
    title: "Make both founder desks look executive",
    cost: "$50–$80",
    body: "Matching leather desk pads, hidden cables, one plant, one mug. Guest chairs tucked under when not in use. The back desk stays where it is — just tidy. A small plug-in lamp at the sofa or desk adds warmth without touching the walls.",
  },
  {
    step: "06",
    title: "Put the company on the wall — without building anything",
    cost: "$32–$60",
    body: "Keep every certificate frame. Tighten the grid around the clock. Add removable white vinyl lettering, “Rising Tech Solutions,” on the blue wall. A small acrylic nameplate on the meeting table. Peel-off branding, not construction.",
  },
  {
    step: "07",
    title: "Add plants, hide the rest",
    cost: "$45–$75",
    body: "One tall plant beside the wardrobe, one already by the rear desk, one small plant on the table. Storage bins inside the wardrobe for the printer, sanitizer bulk, and anything gym-related. The room should look like a CEO office, not a storeroom.",
  },
];

export const shopping = [
  {
    item: "Warm 3000K LED bulbs (existing fittings)",
    qty: "8–10",
    price: "$20–$35",
    note: "Do this first. Instantly changes the mood.",
    tier: "core" as const,
  },
  {
    item: "Beige / walnut area rug, ~5×7 ft",
    qty: "1",
    price: "$45–$80",
    note: "Under sofa + coffee table only.",
    tier: "core" as const,
  },
  {
    item: "Pillow covers + cream throw",
    qty: "3 + 1",
    price: "$35–$55",
    note: "Ivory, camel, dusty blue. Keep the sofa.",
    tier: "core" as const,
  },
  {
    item: "Tall plant + small table plant + pots",
    qty: "2–3",
    price: "$30–$50",
    note: "Keep the plant you already have.",
    tier: "core" as const,
  },
  {
    item: "Plug-in floor lamp",
    qty: "1",
    price: "$35–$60",
    note: "Behind the sofa. No wiring work.",
    tier: "core" as const,
  },
  {
    item: "Leather desk pads",
    qty: "2",
    price: "$20–$35",
    note: "Same color on both founder desks.",
    tier: "core" as const,
  },
  {
    item: "Cable clips / box",
    qty: "1 set",
    price: "$10–$15",
    note: "Nothing hanging off the desks.",
    tier: "core" as const,
  },
  {
    item: "Wardrobe storage bins",
    qty: "3–4",
    price: "$15–$25",
    note: "Printer, bags, gym gear, bulk sanitizer.",
    tier: "core" as const,
  },
  {
    item: "Acrylic nameplate",
    qty: "1",
    price: "$12–$20",
    note: "Rising Tech Solutions on the meeting table.",
    tier: "core" as const,
  },
  {
    item: "Removable vinyl wall lettering",
    qty: "1",
    price: "$20–$40",
    note: "White sans-serif on the blue wall.",
    tier: "core" as const,
  },
  {
    item: "Coffee-table tray + 2 books",
    qty: "1 set",
    price: "$20–$35",
    note: "One tray. That is the whole rule.",
    tier: "core" as const,
  },
  {
    item: "Peel-and-stick LED tape for ceiling tray",
    qty: "1 roll",
    price: "$15–$25",
    note: "Optional. Sits in the existing coffer.",
    tier: "optional" as const,
  },
  {
    item: "Small desk lamp",
    qty: "1",
    price: "$18–$30",
    note: "Optional. Back workstation only.",
    tier: "optional" as const,
  },
];

export const weekend = [
  {
    when: "Friday evening · 90 minutes · $0",
    title: "Empty the room of anything that is not work or guests",
    detail:
      "Gym weights and slippers leave this office. Backpacks go in the wardrobe. Printer goes in the wardrobe. Papers off the meeting table. Align the certificate frames into a tighter grid. Wipe the glass table, desks, and wardrobe doors.",
  },
  {
    when: "Saturday · shopping",
    title: "Buy the core list in one trip",
    detail:
      "Rug, pillows, throw, bulbs, plants, lamp, desk pads, bins, tray, nameplate, vinyl letters. Stay in beige, ivory, camel, and navy. Do not buy another black cabinet.",
  },
  {
    when: "Sunday · style",
    title: "Swap bulbs, lay the rug, then stop adding things",
    detail:
      "Rug under sofa and table. Three pillows, one throw. Tray on the table. Plants in the two empty corners. Nameplate on the meeting table. Vinyl on the blue wall. Chairs tucked. Photograph both angles. If a surface still looks busy, remove one more object.",
  },
];

export const angles = [
  {
    id: "blue",
    label: "Blue wall · lounge",
    caption:
      "Same blue wall, same sofa, same desks, same certificates. The gym gear is gone, the rug lands the lounge, and the company name sits on the wall as vinyl — not construction.",
    before: "/office/before-blue.jpg",
    after: "/office/after-blue.png",
  },
  {
    id: "glass",
    label: "Glass partition · meeting table",
    caption:
      "Same glass, same wardrobe, same back desk. Warm light in the existing ceiling tray, a clear meeting table with a Rising Tech Solutions plaque, and nowhere for bags to live on the furniture.",
    before: "/office/before-glass.jpg",
    after: "/office/after-glass.png",
  },
];
