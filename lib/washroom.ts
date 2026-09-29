export const washroomBudget = { min: 95, max: 180 };

export const washroomKeeps = [
  "Existing wall tiles, bands, and mosaic strip",
  "Patterned floor tiles and drain",
  "Vessel sink, granite counter, and chrome faucet",
  "Round LED mirror and toilet fixtures",
  "Door frames and adjacent utility room",
];

export const washroomMoves = [
  {
    step: "01",
    title: "Clear the construction clutter",
    cost: "Free",
    body: "Ladder, trash can, spare tools, and loose cloth leave the washroom. The ladder already has a home in the kitchen cabinet. Guests should only see fixtures.",
  },
  {
    step: "02",
    title: "Deep clean tiles and grout",
    cost: "$12–$22",
    body: "Degreaser on the bands, grout pen on the floor joints, glass cleaner on the LED mirror. Same tiles — they just need to look finished.",
  },
  {
    step: "03",
    title: "One soap, one towel rule",
    cost: "$18–$32",
    body: "Replace the mixed pink bottles with a single matching dispenser and a folded white hand towel. Optional small plant on the counter only if it stays tidy.",
  },
  {
    step: "04",
    title: "Hide exposed caps and hooks",
    cost: "$8–$15",
    body: "Cover unused pipe caps with matching trim plates. Remove the pink adhesive hook. Bidet sprayer stays — just hang it neatly.",
  },
  {
    step: "05",
    title: "Warm, even light",
    cost: "$25–$45",
    body: "Keep the LED ring. Swap any harsh cool bulb in the ceiling for a warm 2700–3000K LED so the wood-grain bands read intentional, not yellow.",
  },
  {
    step: "06",
    title: "Close the utility door when guests visit",
    cost: "Free",
    body: "The yellow ladder room stays as storage. The door stays shut during meetings so the washroom reads as one finished space.",
  },
];

export const washroomShopping = [
  {
    item: "Grout pen + bathroom degreaser",
    qty: "1 kit",
    price: "$12–$22",
    note: "Tiles stay. Clean is the upgrade.",
    tier: "core" as const,
  },
  {
    item: "Matching soap dispenser",
    qty: "1",
    price: "$10–$18",
    note: "One bottle on the counter. Nothing else.",
    tier: "core" as const,
  },
  {
    item: "White hand towels",
    qty: "2–4",
    price: "$8–$14",
    note: "Folded, not hung on random hooks.",
    tier: "core" as const,
  },
  {
    item: "Warm LED bulb for ceiling",
    qty: "1",
    price: "$8–$15",
    note: "Matches the mirror glow.",
    tier: "core" as const,
  },
  {
    item: "Trim plates for unused pipe caps",
    qty: "2",
    price: "$8–$15",
    note: "Covers the blue-capped stubs by the toilet.",
    tier: "core" as const,
  },
  {
    item: "Slim trash bin that tucks under counter",
    qty: "1",
    price: "$12–$20",
    note: "Replace the bright red plastic can.",
    tier: "core" as const,
  },
  {
    item: "Small counter plant",
    qty: "1",
    price: "$10–$18",
    note: "Only if someone will water it.",
    tier: "optional" as const,
  },
  {
    item: "Fresh toilet paper + spare roll cover",
    qty: "1 pack",
    price: "$6–$10",
    note: "Chrome holder stays.",
    tier: "optional" as const,
  },
];

export const washroomWeekend = [
  {
    when: "Morning",
    title: "Empty and scrub",
    detail:
      "Remove ladder and clutter. Degrease bands, scrub floor, wipe mirror and chrome.",
  },
  {
    when: "Afternoon",
    title: "Style the vanity",
    detail:
      "Set one dispenser, towels, slim bin. Cap unused pipes. Swap the ceiling bulb.",
  },
  {
    when: "End of day",
    title: "Guest check",
    detail:
      "Close the utility door. Stand at the doorway — if anything looks like storage, put it away.",
  },
];

export const washroomAngles = [
  {
    id: "vanity",
    label: "Vanity",
    caption:
      "Same vessel sink, granite top, and LED ring. Clutter gone, light even, one soap and a towel.",
    before: "/washroom/before-vanity.jpg",
    after: "/washroom/after-vanity.jpg",
  },
  {
    id: "toilet",
    label: "Full washroom",
    caption:
      "Same tiles, toilet, and bidet sprayer. Caps covered, hooks removed, vanity staged clean.",
    before: "/washroom/before-toilet.jpg",
    after: "/washroom/after-toilet.jpg",
  },
];
