import { budgetTotal, company } from "@/lib/plan";
import { hallBudget } from "@/lib/hall";
import { kitchenBudget } from "@/lib/kitchen";
import { salesBudget } from "@/lib/sales";

export const grandTotal = {
  min: budgetTotal.min + hallBudget.min + kitchenBudget.min + salesBudget.min,
  max: budgetTotal.max + hallBudget.max + kitchenBudget.max + salesBudget.max,
};

export const roomBudgets = [
  { name: "Founders office", range: `$${budgetTotal.min}–${budgetTotal.max}`, note: "Guest-facing room" },
  { name: "Main hall", range: `$${hallBudget.min}–${hallBudget.max}`, note: "Day teams + night sales" },
  { name: "Sales cabin", range: `$${salesBudget.min}–${salesBudget.max}`, note: "Call floor" },
  { name: "Kitchen & washrooms", range: `$${kitchenBudget.min}–${kitchenBudget.max}`, note: "Back of house" },
];

export type Slide =
  | {
      id: string;
      kind: "title";
      kicker: string;
      title: string;
      subtitle: string;
    }
  | {
      id: string;
      kind: "points";
      kicker: string;
      title: string;
      points: { heading: string; body: string }[];
    }
  | {
      id: string;
      kind: "compare";
      kicker: string;
      title: string;
      body: string;
      before: string;
      after: string;
      beforeLabel?: string;
      afterLabel?: string;
    }
  | {
      id: string;
      kind: "budget";
      kicker: string;
      title: string;
      body: string;
    }
  | {
      id: string;
      kind: "close";
      kicker: string;
      title: string;
      points: string[];
    };

export const slides: Slide[] = [
  {
    id: "title",
    kind: "title",
    kicker: company,
    title: "Office restyle proposal",
    subtitle: `No reconstruction. Keep every wall, desk, and cubicle separator. Whole office about $${grandTotal.min.toLocaleString()}–$${grandTotal.max.toLocaleString()}.`,
  },
  {
    id: "why",
    kind: "points",
    kicker: "Why this, why now",
    title: "The rooms work. They do not look like the company yet.",
    points: [
      {
        heading: "Guests see the founders office and the hall first",
        body: "Gym gear, bags, and a printer on the floor undercut a tech company before anyone sits down.",
      },
      {
        heading: "Two shifts share the same desks",
        body: "Day: AI, media, editors, HR, accounts, SEO, data entry. Night: sales. The floor has to reset clean.",
      },
      {
        heading: "Calls need the separators we already have",
        body: "We do not open the cubicles. We finish them so voices stop bouncing.",
      },
    ],
  },
  {
    id: "rules",
    kind: "points",
    kicker: "The brief",
    title: "Three rules we will not break",
    points: [
      {
        heading: "No reconstruction",
        body: "Walls, glass, ceiling, floor, washrooms, cabinets, sofas, and desks stay. No paint job required on the blue walls.",
      },
      {
        heading: "Separators stay",
        body: "Main hall and sales cabin keep every privacy screen. Night sales and mixed day teams need them.",
      },
      {
        heading: "One shopping list, not a contractor",
        body: "Felt, warm bulbs, rugs, cable kits, vinyl lettering. Work we can do over weekends.",
      },
    ],
  },
  {
    id: "founders",
    kind: "compare",
    kicker: "1 · Founders office",
    title: "The room visitors walk into",
    body: `Keep the blue wall, glass, sofa, and desks. Declutter, warm the lights, add a rug. About $${budgetTotal.min}–${budgetTotal.max}.`,
    before: "/office/before-blue.jpg",
    after: "/office/after-blue.png",
  },
  {
    id: "hall",
    kind: "compare",
    kicker: "2 · Main hall",
    title: "Where most of the company sits",
    body: `Separators stay for day teams and night sales. Navy felt on the existing boards, visitor lounge, last wooden desk marked HR. About $${hallBudget.min}–${hallBudget.max}.`,
    before: "/hall/before-lounge.jpg",
    after: "/hall/after-lounge.png",
  },
  {
    id: "sales",
    kind: "compare",
    kicker: "3 · Sales cabin",
    title: "A call floor that looks ready",
    body: `Same desk rows and blinds. Felt on the screens you already have, cables off the floor, Sales on the blue wall. About $${salesBudget.min}–${salesBudget.max}.`,
    before: "/sales/before-blue.jpg",
    after: "/sales/after-blue.png",
  },
  {
    id: "kitchen",
    kind: "compare",
    kicker: "4 · Kitchen & washrooms",
    title: "Back of house, not leftover storage",
    body: `Same cabinets, fridge, and bathroom doors. Nothing on top of the units. Extinguisher on the wall. About $${kitchenBudget.min}–${kitchenBudget.max}.`,
    before: "/kitchen/before-sink.jpg",
    after: "/kitchen/after-sink.png",
  },
  {
    id: "budget",
    kind: "budget",
    kicker: "The number",
    title: `$${grandTotal.min.toLocaleString()}–$${grandTotal.max.toLocaleString()} for all four areas`,
    body: "Skip the optional lines (runners, extra LED tape) and you still get the look. No contractor, no downtime from demolition.",
  },
  {
    id: "time",
    kind: "points",
    kicker: "How we do it",
    title: "Weekends. No shutdown.",
    points: [
      {
        heading: "Kitchen — one Saturday",
        body: "Empty cabinet tops, mount the extinguisher, cable covers, labels. Smallest spend, fastest win.",
      },
      {
        heading: "Founders office — one weekend",
        body: "Declutter Friday. Shop Saturday. Rug, pillows, bulbs, vinyl Sunday.",
      },
      {
        heading: "Hall + sales cabin — felt is the long job",
        body: "Same navy felt on both floors so they match. Desks keep working; we cover screens after hours.",
      },
    ],
  },
  {
    id: "ask",
    kind: "close",
    kicker: "The ask",
    title: "Approve the kit. We do not hire a builder.",
    points: [
      `Cap the whole restyle at $${grandTotal.max.toLocaleString()}.`,
      "Keep every wall, cubicle separator, cabinet, and desk.",
      "Start with kitchen + founders (visible, cheap), then felt the two sales floors.",
      "Full photo plans and shopping lists are in this same site.",
    ],
  },
];
