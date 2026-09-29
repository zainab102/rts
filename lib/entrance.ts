export const entranceBudget = { min: 120, max: 240 };

export const entranceKeeps = [
  "Dark arched wooden door and existing hardware",
  "Rising Tech Solutions acrylic sign with chevron logo",
  "Biometric access pad and fire alarm box",
  "Stair handrail and wall switch positions",
  "Current door frame and magnetic lock",
];

export const entranceMoves = [
  {
    step: "01",
    title: "Touch up the wall, do not rebuild it",
    cost: "$15–$30",
    body: "Same off-white. Wipe scuffs around the sign, pad, and switch. A roller and leftover paint is enough — no new cladding.",
  },
  {
    step: "02",
    title: "Polish the door, keep the arch",
    cost: "$20–$40",
    body: "Clean and condition the dark wood so the grain reads intentional. Wipe the silver handle and magnetic lock. The door stays.",
  },
  {
    step: "03",
    title: "Fix the glare on the company sign",
    cost: "$25–$45",
    body: "Replace the harsh yellow wall light with a soft warm LED wash aimed at the acrylic sign. Guests should read Rising Tech Solutions, not a hotspot.",
  },
  {
    step: "04",
    title: "Align the security gear",
    cost: "$12–$25",
    body: "Level the biometric pad and fire alarm box. Wipe fingerprints. Optional slim cable clip so nothing hangs crooked under the sign.",
  },
  {
    step: "05",
    title: "Make the threshold guest-ready",
    cost: "$18–$35",
    body: "Wipe the stair rail, add a slim doormat inside if floor allows, and keep the approach free of boxes. First impression is the door and the logo.",
  },
  {
    step: "06",
    title: "Night check for the logo glow",
    cost: "Free",
    body: "After dark, confirm the sign is evenly lit and the pad screen is readable. Adjust aim once — then leave it.",
  },
];

export const entranceShopping = [
  {
    item: "Same-white touch-up paint + roller",
    qty: "1 kit",
    price: "$15–$30",
    note: "Scuffs only. No full repaint required.",
    tier: "core" as const,
  },
  {
    item: "Wood cleaner + conditioner",
    qty: "1 set",
    price: "$20–$40",
    note: "Door stays. Grain should look intentional.",
    tier: "core" as const,
  },
  {
    item: "Warm LED wall wash for the sign",
    qty: "1",
    price: "$25–$45",
    note: "Replace the harsh yellow fixture.",
    tier: "core" as const,
  },
  {
    item: "Microfiber + metal polish for hardware",
    qty: "1 kit",
    price: "$8–$15",
    note: "Handle, lock, and standoffs.",
    tier: "core" as const,
  },
  {
    item: "Cable clips / level for access pad",
    qty: "1 pack",
    price: "$6–$12",
    note: "Pad sits straight under the logo.",
    tier: "core" as const,
  },
  {
    item: "Slim indoor doormat",
    qty: "1",
    price: "$18–$35",
    note: "Only if the threshold has space.",
    tier: "optional" as const,
  },
  {
    item: "Spare acrylic cleaner for the sign",
    qty: "1",
    price: "$8–$14",
    note: "Keeps RISING TECH readable.",
    tier: "optional" as const,
  },
];

export const entranceWeekend = [
  {
    when: "Morning",
    title: "Wall and door",
    detail:
      "Touch up scuffs, polish wood and hardware, wipe the acrylic sign and standoffs.",
  },
  {
    when: "Afternoon",
    title: "Light and access",
    detail:
      "Swap the wall wash, level the biometric pad, tidy the fire alarm and switch plate.",
  },
  {
    when: "End of day",
    title: "Guest walk-up",
    detail:
      "Approach from the stairs. Confirm the logo reads clearly and nothing distracts from the door.",
  },
];

export const entranceAngles = [
  {
    id: "door",
    label: "Front door",
    caption:
      "Same arched door and Rising Tech Solutions sign. Clean wall, soft light on the logo, polished hardware.",
    before: "/entrance/before-door.jpg",
    after: "/entrance/after-door.jpg",
  },
];
