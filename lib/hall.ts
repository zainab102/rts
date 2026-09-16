export const hallBudget = { min: 490, max: 820 };

export const hallKeeps = [
  "Blue walls, white walls, and the flower ceiling",
  "Wood laminate floor and existing lights",
  "Every cubicle separator — same height, same grid",
  "Navy sofas, coffee table, wooden desks, mesh chairs",
  "Glass partition, doors, ACs, and wall fans",
  "The last wooden desk as HR",
];

export const hallMoves = [
  {
    step: "01",
    title: "Keep the separators — finish the faces",
    cost: "$120–$220",
    body: "Day shift (AI, media, editors, HR, accounts, SEO, data entry) and night sales already need those panels so voices do not bounce. Do not pull them out. Cover the existing white faces with stick-on navy acoustic felt. Same height, same layout, less echo, less cheap-board look.",
  },
  {
    step: "02",
    title: "Clear the aisles and split the jobs of the room",
    cost: "Free",
    body: "Beanbags, floor sitting, and backpacks in the walkway make this look like a hostel, not a floor. Bags hang under desks. The front sofas are for visitors. The back sofa is a waiting nook. Cubicles are for work. The last wooden desk by the glass is HR — and only HR.",
  },
  {
    step: "03",
    title: "Warm the existing lights",
    cost: "$40–$70",
    body: "Swap cool white bulbs for 3000K LEDs in the fittings you already have. Optional peel-and-stick LED tape in the existing ceiling tray. No electrician, no new ceiling.",
  },
  {
    step: "04",
    title: "Ground the visitor lounge",
    cost: "$50–$90",
    body: "One beige-walnut rug under the two front sofas and the coffee table. Ivory and camel pillows, one throw each. One tray on the table. The empty stretch of floor is why the hall feels unfinished.",
  },
  {
    step: "05",
    title: "Cable-manage every pod, including night sales",
    cost: "$80–$140",
    body: "Under-desk cable baskets, CPU towers on the floor or in a sling, matching desk mats, headset stands. Sales at night still uses the same stations — they should pick up a clean desk, not a nest of wires. Small clip-on labels on cubicle ends: AI, Media, SEO, Night sales.",
  },
  {
    step: "06",
    title: "Make the last desk read as HR",
    cost: "$35–$55",
    body: "Keep the wooden desk. Hide the floor cables in an under-desk basket. Leather pad, file tray, acrylic “HR · Rising Tech Solutions” plate, one plant. The beige printer moves into the pedestal or a closed cabinet — not on display beside the desk.",
  },
  {
    step: "07",
    title: "Brand the blue wall and retire the green paper",
    cost: "$45–$85",
    body: "Removable white vinyl: Rising Tech Solutions. Replace the taped green sheet with a framed whiteboard of the same size, hung on the existing wall. Two plants in the empty corners. No new built-ins.",
  },
];

export const hallShopping = [
  {
    item: "Navy acoustic felt panels (stick-on) for cubicle faces",
    qty: "Enough for both sides of each separator",
    price: "$120–$220",
    note: "The one item that helps night sales and the look.",
    tier: "core" as const,
  },
  {
    item: "Warm 3000K LED bulbs",
    qty: "All existing downlights",
    price: "$40–$70",
    note: "Same fittings. Instantly less hospital.",
    tier: "core" as const,
  },
  {
    item: "Beige / walnut rug for the front lounge",
    qty: "1 large",
    price: "$50–$90",
    note: "Under both sofas and the coffee table.",
    tier: "core" as const,
  },
  {
    item: "Pillow covers + throws",
    qty: "Front sofas + back sofa",
    price: "$50–$80",
    note: "Ivory, camel, dusty blue. Keep the sofas.",
    tier: "core" as const,
  },
  {
    item: "Cable baskets, clips, CPU slings",
    qty: "Every workstation",
    price: "$50–$90",
    note: "Nothing on the floor. Shared day/night desks.",
    tier: "core" as const,
  },
  {
    item: "Matching desk mats + headset stands",
    qty: "One per pod",
    price: "$55–$90",
    note: "Headsets off the partition tops.",
    tier: "core" as const,
  },
  {
    item: "Under-desk bag hooks",
    qty: "One per chair",
    price: "$15–$25",
    note: "Bags leave the aisle and the separators.",
    tier: "core" as const,
  },
  {
    item: "Cubicle-end team clips",
    qty: "AI, Media, SEO, Night sales, HR",
    price: "$15–$25",
    note: "Printable inserts. Swap if teams move.",
    tier: "core" as const,
  },
  {
    item: "HR desk kit",
    qty: "Pad, file tray, nameplate, cable basket",
    price: "$35–$55",
    note: "Last wooden desk by the glass. Keep the desk.",
    tier: "core" as const,
  },
  {
    item: "Vinyl wall lettering",
    qty: "1",
    price: "$20–$40",
    note: "White on the blue wall. Peel-off.",
    tier: "core" as const,
  },
  {
    item: "Framed whiteboard",
    qty: "1",
    price: "$25–$45",
    note: "Replaces the taped green paper. Same wall.",
    tier: "core" as const,
  },
  {
    item: "Floor plants + pots",
    qty: "2–3",
    price: "$40–$70",
    note: "Corners only. Not on every desk.",
    tier: "core" as const,
  },
  {
    item: "Peel-and-stick LED tape for ceiling tray",
    qty: "1–2 rolls",
    price: "$20–$35",
    note: "Optional. Sits in the existing coffer.",
    tier: "optional" as const,
  },
  {
    item: "Small rug at the back sofa",
    qty: "1",
    price: "$30–$50",
    note: "Optional. Matches the front lounge.",
    tier: "optional" as const,
  },
];

export const hallWeekend = [
  {
    when: "Friday evening · 2 hours · $0",
    title: "Empty aisles, park the printer, label HR",
    detail:
      "Beanbags and floor rugs in the walkway leave the hall. Bags under desks. Printer into the pedestal. Align monitors. Wipe cubicle faces so felt will stick. Put a temporary HR card on the last wooden desk.",
  },
  {
    when: "Saturday · shopping + felt",
    title: "Buy the list. Cover every separator face.",
    detail:
      "Felt is the long job. Cut panels, spray-adhere to the existing boards, trim flush. Do not build new walls. Swap bulbs while the felt dries. Stay in navy, ivory, camel, beige.",
  },
  {
    when: "Sunday · lounge, HR, labels",
    title: "Rug, pillows, nameplates, then stop",
    detail:
      "Lounge rug. Style three sofas. HR pad, tray, plate, hidden cables. Vinyl on the blue wall. Whiteboard up. Team clips on cubicle ends. Photograph the four angles. If an aisle still has a bag, remove it.",
  },
];

export const hallAngles = [
  {
    id: "lounge",
    label: "Visitor lounge",
    caption:
      "Same sofas, same coffee table, same cubicle grid. Felt on the existing separators, a rug under the lounge, and Rising Tech Solutions on the blue wall — vinyl, not construction.",
    before: "/hall/before-lounge.jpg",
    after: "/hall/after-lounge.png",
  },
  {
    id: "cubicles",
    label: "Work rows · back sofa",
    caption:
      "Separators stay for day teams and night sales. Navy felt cuts echo. The back sofa becomes a waiting nook. The taped green sheet becomes a framed board on the same wall.",
    before: "/hall/before-cubicles.jpg",
    after: "/hall/after-cubicles.png",
  },
  {
    id: "aisle",
    label: "Aisle toward HR",
    caption:
      "Clear center aisle. Last wooden desk on the glass side is HR. Cubicle heads get small team clips so night sales sits in a labelled pod, not a leftover mess.",
    before: "/hall/before-aisle.jpg",
    after: "/hall/after-aisle.png",
  },
  {
    id: "hr",
    label: "HR desk",
    caption:
      "Keep this desk. Hide the floor cables in an under-desk basket, add a pad, a file tray, and an HR nameplate. The printer does not live beside it.",
    before: "/hall/before-hr.jpg",
    after: "/hall/after-hr.png",
  },
];
