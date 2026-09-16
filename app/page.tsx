import { Photo } from "@/components/photo";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { budgetTotal } from "@/lib/plan";
import { hallBudget } from "@/lib/hall";
import { kitchenBudget } from "@/lib/kitchen";
import { salesBudget } from "@/lib/sales";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rising Tech Solutions · Office restyle",
  description:
    "No-reconstruction restyles for the Rising Tech Solutions founders office, halls, sales cabin, and kitchen.",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader kicker="Office restyle · no reconstruction" current="home" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <Badge variant="outline" className="mb-4 border-primary/20 bg-white/70">
          Keep the walls · keep the cubicles
        </Badge>
        <h1 className="font-heading max-w-2xl text-4xl leading-[1.1] text-balance sm:text-5xl">
          Four areas. Same company. Styling only.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
          Rising Tech Solutions already has the blue walls, the glass, and the
          furniture. These plans do not rebuild anything. Open a room, drag the
          before/after sliders, and use the shopping list.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/present">
              Present to leadership
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Link
            href="/sales"
            className="group overflow-hidden rounded-xl bg-white/80 ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
          >
            <Photo
              src="/sales/after-blue.png"
              alt="Sales cabin after restyle"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                Sales team cabin
              </p>
              <h2 className="font-heading mt-1 text-2xl group-hover:underline">
                Sales
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Dividers stay for calls. Navy felt, hidden cables, Sales on the
                blue wall. ${salesBudget.min}–${salesBudget.max}.
              </p>
            </div>
          </Link>
          <Link
            href="/kitchen"
            className="group overflow-hidden rounded-xl bg-white/80 ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
          >
            <Photo
              src="/kitchen/after-sink.png"
              alt="Kitchen after restyle"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                Pantry · washrooms · cabinets
              </p>
              <h2 className="font-heading mt-1 text-2xl group-hover:underline">
                Kitchen
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Same cabinets and fridge. Empty tops, extinguisher on the wall,
                corridor cleared. ${kitchenBudget.min}–${kitchenBudget.max}.
              </p>
            </div>
          </Link>
          <Link
            href="/hall"
            className="group overflow-hidden rounded-xl bg-white/80 ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
          >
            <Photo
              src="/hall/after-lounge.png"
              alt="Main hall after restyle"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                Employees · HR · night sales
              </p>
              <h2 className="font-heading mt-1 text-2xl group-hover:underline">
                Main hall
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Separators stay so voices do not echo. Navy felt, a visitor
                lounge, and the last desk marked HR. ${hallBudget.min}–
                ${hallBudget.max}.
              </p>
            </div>
          </Link>

          <Link
            href="/founders"
            className="group overflow-hidden rounded-xl bg-white/80 ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
          >
            <Photo
              src="/office/after-blue.png"
              alt="Founders office after restyle"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-5">
              <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                CEO & founders
              </p>
              <h2 className="font-heading mt-1 text-2xl group-hover:underline">
                Founders office
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Same walls and furniture. Declutter, warm light, rug, and
                removable company lettering. ${budgetTotal.min}–${budgetTotal.max}.
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
