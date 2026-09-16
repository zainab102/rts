export const salesBudget = { min: 380, max: 640 };

export const salesKeeps = [
  "Flower ceiling, recessed lights, and wood floor",
  "Window wall and the existing white blinds",
  "Frosted glass partition on the opposite side",
  "Both rows of desks and every privacy divider",
  "Black mesh chairs, CPUs, and the blue end wall",
  "Whiteboard, shelves, AC, clock, and wall fans",
];

export const salesMoves = [
  {
    step: "01",
    title: "Keep the dividers — felt the faces",
    cost: "$140–$240",
    body: "This cabin is for sales. The black screens stay so calls do not bleed across the aisle. Cover the existing faces with stick-on navy acoustic felt — same height, same grid as the main hall. Do not pull a single panel.",
  },
  {
    step: "02",
    title: "Cable-manage every pod the same way",
    cost: "$90–$150",
    body: "Floor cables, loose CPUs, and a water bottle on the desk are why an empty cabin looks abandoned. Matching mats, headset stands, CPUs aligned, bag hooks under the desk. Night or day, every seat resets the same.",
  },
  {
    step: "03",
    title: "Warm the existing lights",
    cost: "$25–$45",
    body: "3000K bulbs in the fittings you already have. Optional peel-and-stick LED tape in the existing ceiling tray around the flower feature. No new ceiling.",
  },
  {
    step: "04",
    title: "Name the room on the wall you already painted",
    cost: "$20–$40",
    body: "Removable vinyl on the blue end wall: Sales, with Rising Tech Solutions under it. Keep the AC, clock, and fans. One plant in the far corner. Whiteboard stays for huddles.",
  },
  {
    step: "05",
    title: "Straighten the far end and the aisle",
    cost: "Free–$50",
    body: "Binders on the grey shelves. Speaker stand away if it is not used on calls. Chairs tucked in a line. Optional slim runner down the center so the long cabin does not feel like a leftover corridor.",
  },
];

export const salesShopping = [
  {
    item: "Navy acoustic felt for cubicle faces",
    qty: "Both sides of every divider",
    price: "$140–$240",
    note: "Same product as the main hall. Sales needs the sound soak.",
    tier: "core" as const,
  },
  {
    item: "Warm 3000K LED bulbs",
    qty: "Existing downlights",
    price: "$25–$45",
    note: "Same fittings. Less clinic, more cabin.",
    tier: "core" as const,
  },
  {
    item: "Desk mats + headset stands",
    qty: "One per seat",
    price: "$55–$90",
    note: "Headsets off the divider tops.",
    tier: "core" as const,
  },
  {
    item: "Cable sleeves, clips, CPU alignment",
    qty: "Every workstation",
    price: "$35–$60",
    note: "Nothing on the floor in the aisle.",
    tier: "core" as const,
  },
  {
    item: "Under-desk bag hooks",
    qty: "One per chair",
    price: "$15–$25",
    note: "Bags leave the walkway.",
    tier: "core" as const,
  },
  {
    item: "Vinyl lettering on the blue wall",
    qty: "1",
    price: "$20–$40",
    note: "Sales / Rising Tech Solutions. Peel-off.",
    tier: "core" as const,
  },
  {
    item: "Corner plant",
    qty: "1",
    price: "$25–$40",
    note: "Far blue wall only. Not on every desk.",
    tier: "core" as const,
  },
  {
    item: "Slim aisle runner",
    qty: "1",
    price: "$30–$50",
    note: "Optional. Softens the long empty floor.",
    tier: "optional" as const,
  },
  {
    item: "Peel-and-stick LED tape for ceiling tray",
    qty: "1 roll",
    price: "$15–$25",
    note: "Optional. Sits in the existing coffer.",
    tier: "optional" as const,
  },
];

export const salesWeekend = [
  {
    when: "Friday evening · 60 minutes · $0",
    title: "Tuck, wipe, and empty the aisle",
    detail:
      "Chairs in a line. Water bottles off desks. Cables coiled. Binders on the shelves. Speaker stand out if it is not used.",
  },
  {
    when: "Saturday · felt + bulbs",
    title: "Cover every divider face. Swap the lamps.",
    detail:
      "Same navy felt as the main hall. Stick to the existing black screens. 3000K bulbs in the current fittings. Vinyl on the blue wall while the felt sets.",
  },
  {
    when: "Sunday · desks",
    title: "Mats, headsets, hooks, then stop",
    detail:
      "One mat and one headset stand per seat. Bag hook under each desk. Plant in the far corner. Photograph both angles. If a cable is still on the floor, it is not done.",
  },
];

export const salesAngles = [
  {
    id: "windows",
    label: "Toward the whiteboard",
    caption:
      "Same glass, same blinds, same desk rows. Felt on the existing dividers, headsets on stands, optional runner in the aisle, and Sales on the far wall as vinyl.",
    before: "/sales/before-windows.jpg",
    after: "/sales/after-windows.png",
  },
  {
    id: "blue",
    label: "Toward the blue wall",
    caption:
      "Same blue end wall, AC, clock, and fans. Dividers stay for call privacy. Vinyl reads Sales · Rising Tech Solutions. No floor cables.",
    before: "/sales/before-blue.jpg",
    after: "/sales/after-blue.png",
  },
];
