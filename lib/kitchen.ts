export const kitchenBudget = { min: 165, max: 310 };

export const kitchenKeeps = [
  "White walls, wood floor, and existing ceiling lights",
  "Both washroom doors and frames",
  "The tall black cabinet at the end of the corridor",
  "Haier fridge in the same spot",
  "Existing kitchen cabinets, counter, tiles, and sink",
  "Microwave, kettle, water dispenser, and CCTV desk",
];

export const kitchenMoves = [
  {
    step: "01",
    title: "Nothing lives on top of the cabinets",
    cost: "Free",
    body: "The Haier boxes, spare bottles, and cardboard on the soffit are why this pantry looks like a storeroom. That stuff goes inside the black corridor cabinet — the one already labeled for this job. The kitchen is for making tea, not for sitting, and not for dead packaging.",
  },
  {
    step: "02",
    title: "Clear the corridor",
    cost: "Free–$15",
    body: "The ladder goes in the cabinet. The fire extinguisher comes off the fridge and onto a wall bracket — that is also the correct safety position. Wipe the scuffed paint with the same white. Do not rebuild the hall; just stop using it as overflow storage.",
  },
  {
    step: "03",
    title: "Hide the wire nest without opening walls",
    cost: "$12–$20",
    body: "Adhesive white cable raceway from the CCTV desk up into the existing electrical box. Same box, same fridge, same desk. The Pakistan flag can stay if it is pinned flat. No new conduit, no electrician if the circuits already work.",
  },
  {
    step: "04",
    title: "Give the pantry a working counter",
    cost: "$55–$90",
    body: "Keep the cabinets and the marble-look top. Deep clean, grout pen on the tiles, peel-and-stick LED under the existing uppers. Matching soap dispenser, dish rack, two canisters, bottle rack on the floor for spare 19L jars. Microwave and kettle stay.",
  },
  {
    step: "05",
    title: "Label the black cabinet and park the extras",
    cost: "$28–$47",
    body: "Simple labels: Supplies / Pantry. Cheap bins inside for cleaning products, extra bottles, and the ladder. The corridor then only has to do three jobs: walk, fridge, washrooms.",
  },
  {
    step: "06",
    title: "Tidy the CCTV nook next to the fridge",
    cost: "$15–$25",
    body: "That desk stays — it is already a monitor station. Desk mat, tucked chair, cables in the raceway. Optional navy felt on the existing cubicle face so it matches the main hall. Do not add a second lounge here.",
  },
];

export const kitchenShopping = [
  {
    item: "Wall bracket for the fire extinguisher",
    qty: "1",
    price: "$8–$15",
    note: "Off the fridge. Onto the wall. Required anyway.",
    tier: "core" as const,
  },
  {
    item: "White adhesive cable raceway",
    qty: "1 pack",
    price: "$12–$20",
    note: "Covers the CCTV and pantry wires. No chasing walls.",
    tier: "core" as const,
  },
  {
    item: "Under-cabinet LED tape",
    qty: "1 roll",
    price: "$15–$25",
    note: "Peel-and-stick on the cabinets you already have.",
    tier: "core" as const,
  },
  {
    item: "Grout pen + degreaser + same-white touch-up",
    qty: "1 kit",
    price: "$15–$25",
    note: "Tiles and scuffs. Not a retile.",
    tier: "core" as const,
  },
  {
    item: "Dish rack, soap dispenser, 2 canisters",
    qty: "1 set",
    price: "$25–$40",
    note: "The whole counter rule: if it is not this, it is away.",
    tier: "core" as const,
  },
  {
    item: "Floor rack for spare water bottles",
    qty: "1",
    price: "$15–$25",
    note: "Bottles off the counter and off the cabinet tops.",
    tier: "core" as const,
  },
  {
    item: "Bins + labels for the black cabinet",
    qty: "4–6 bins",
    price: "$20–$35",
    note: "Supplies / Pantry. Ladder lives here too.",
    tier: "core" as const,
  },
  {
    item: "CCTV desk mat + clip kit",
    qty: "1",
    price: "$15–$25",
    note: "Keep the desk. Stop the cable nest.",
    tier: "core" as const,
  },
  {
    item: "Slim corridor runner",
    qty: "1",
    price: "$25–$45",
    note: "Optional. Makes the fridge hall feel finished.",
    tier: "optional" as const,
  },
  {
    item: "Navy felt on the CCTV cubicle face",
    qty: "1 panel",
    price: "$12–$20",
    note: "Optional. Match the main hall separators.",
    tier: "optional" as const,
  },
];

export const kitchenWeekend = [
  {
    when: "Friday evening · 90 minutes · $0",
    title: "Empty the tops, park the ladder, wash the sink",
    detail:
      "Boxes and bottles off the cabinets. Ladder into the black cupboard. Dishes away. Fridge top cleared. Person-chair out of the pantry — this room is not a seat.",
  },
  {
    when: "Saturday morning",
    title: "Clean, grout pen, raceway, extinguisher bracket",
    detail:
      "Degrease tiles and counter. Grout pen. Stick cable covers over the visible wires. Mount the extinguisher on the wall. Wipe wall scuffs with the same white.",
  },
  {
    when: "Saturday afternoon",
    title: "Rack, LEDs, labels, then stop adding objects",
    detail:
      "Bottle rack on the floor. Under-cabinet lights. Bins and labels in the black cabinet. Soap, rack, canisters on the sink wall. Photograph all four angles. If something is still on a cabinet top, it is wrong.",
  },
];

export const kitchenAngles = [
  {
    id: "corridor",
    label: "Washroom corridor",
    caption:
      "Same fridge, same bathroom doors, same black cabinet. Ladder gone, extinguisher on the wall, cabinet labeled Supplies / Pantry. Optional runner only.",
    before: "/kitchen/before-corridor.jpg",
    after: "/kitchen/after-corridor.png",
  },
  {
    id: "nook",
    label: "Fridge · CCTV nook",
    caption:
      "Fridge stays. The monitor desk stays. Wires go into adhesive trunking. Nothing sits on the fridge. Extinguisher is on the wall, not the appliance.",
    before: "/kitchen/before-nook.jpg",
    after: "/kitchen/after-nook.png",
  },
  {
    id: "pantry",
    label: "Pantry corner",
    caption:
      "Same cabinets and counter. No one sitting here. No boxes on top. Spare bottles on a floor rack. Microwave and kettle earn their place on a clear worktop.",
    before: "/kitchen/before-pantry.jpg",
    after: "/kitchen/after-pantry.png",
  },
  {
    id: "sink",
    label: "Sink wall",
    caption:
      "Keep the sink, tiles, and patterned doors. Under-cabinet light, dish rack, matching dispenser. Cabinet tops stay empty — that is the whole trick.",
    before: "/kitchen/before-sink.jpg",
    after: "/kitchen/after-sink.png",
  },
];
