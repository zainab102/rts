import { BeforeAfter } from "@/components/before-after";
import { Photo } from "@/components/photo";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  kitchenAngles,
  kitchenBudget,
  kitchenKeeps,
  kitchenMoves,
  kitchenShopping,
  kitchenWeekend,
} from "@/lib/kitchen";
import { Check, CircleDollarSign, Hammer, Refrigerator } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & washrooms · Rising Tech Solutions",
  description:
    "Budget restyle for the Rising Tech Solutions pantry, washroom corridor, and cabinet wall. No reconstruction.",
};

export default function KitchenPage() {
  const coreTotal = kitchenShopping.filter((item) => item.tier === "core");

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader kicker="Kitchen · washrooms · cabinets" current="kitchen" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-4 border-primary/20 bg-white/70">
              No reconstruction · keep every cabinet
            </Badge>
            <h1 className="font-heading max-w-xl text-4xl leading-[1.1] text-balance sm:text-5xl">
              Same pantry. Empty tops. A corridor that is only a corridor.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Washroom doors, the black cabinet, the fridge, and the kitchen
              units all stay. Boxes come off the cabinets, the extinguisher
              comes off the fridge, and nobody sits in the pantry. About $
              {kitchenBudget.min}–${kitchenBudget.max}.
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-3">
            {[
              { icon: Hammer, label: "Rebuild", value: "None" },
              {
                icon: CircleDollarSign,
                label: "Core spend",
                value: `$${kitchenBudget.min}+`,
              },
              { icon: Refrigerator, label: "Fridge", value: "Stays" },
            ].map((stat) => (
              <li
                key={stat.label}
                className="rounded-xl bg-white/70 p-4 ring-1 ring-foreground/8"
              >
                <stat.icon className="mb-3 h-4 w-4 text-primary" />
                <p className="text-lg font-medium">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="look" className="mt-14 scroll-mt-24">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                Reference images
              </p>
              <h2 className="font-heading text-3xl">Four angles</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Photoreal restyles from your photos. Drag: left is today, right is
              after. Cabinets and walls are unchanged.
            </p>
          </div>

          <Tabs defaultValue="corridor">
            <TabsList className="mb-4 flex h-auto w-full flex-wrap bg-white/80 p-1 sm:w-fit">
              {kitchenAngles.map((angle) => (
                <TabsTrigger
                  key={angle.id}
                  value={angle.id}
                  className="px-3 py-2 text-xs sm:text-sm"
                >
                  {angle.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {kitchenAngles.map((angle) => (
              <TabsContent key={angle.id} value={angle.id} className="space-y-3">
                <BeforeAfter
                  key={angle.id}
                  beforeSrc={angle.before}
                  afterSrc={angle.after}
                  beforeAlt={`${angle.label} as it is today`}
                  afterAlt={`${angle.label} after the budget restyle`}
                />
                <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                  {angle.caption}
                </p>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                What is holding it back
              </CardTitle>
              <CardDescription>
                This is a working pantry and washroom hall. It currently stores
                leftover cardboard and acts as a second lounge.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                Boxes and spare bottles on top of the cabinets, a ladder in the
                walkway, and a fire extinguisher perched on the fridge make the
                corridor feel unfinished. Exposed CCTV wiring and scuffed paint
                do the rest.
              </p>
              <p>
                The kitchen counter is a dump: dishes, soap bottles, a person
                sitting in the corner. Once the tops are empty and the
                extinguisher is on the wall, the existing units already look
                like an office pantry.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                What we refuse to touch
              </CardTitle>
              <CardDescription>
                No new cabinets, no retile, no moving washrooms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {kitchenKeeps.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="plan" className="mt-16 scroll-mt-24">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Six moves
          </p>
          <h2 className="font-heading mt-1 text-3xl">A clean back-of-house</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {kitchenMoves.map((move) => (
              <article
                key={move.step}
                className="rounded-xl bg-white/75 p-5 ring-1 ring-foreground/8"
              >
                <div className="mb-3 flex items-baseline justify-between gap-3">
                  <p className="font-heading text-3xl text-primary/70">
                    {move.step}
                  </p>
                  <Badge variant="secondary">{move.cost}</Badge>
                </div>
                <h3 className="text-base font-medium">{move.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {move.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="budget" className="mt-16 scroll-mt-24">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
                Under a budget
              </p>
              <h2 className="font-heading text-3xl">
                Core kit ${kitchenBudget.min}–${kitchenBudget.max}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Most of this is organizing and a Saturday clean. Skip the runner
              if you need to cut.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl bg-white/80 ring-1 ring-foreground/8">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="border-b text-xs tracking-wide text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-3 font-medium">Item</th>
                  <th className="px-4 py-3 font-medium">Qty</th>
                  <th className="px-4 py-3 font-medium">Est.</th>
                  <th className="px-4 py-3 font-medium">Why</th>
                </tr>
              </thead>
              <tbody>
                {kitchenShopping.map((row) => (
                  <tr key={row.item} className="border-b last:border-0">
                    <td className="px-4 py-3">
                      <span className="font-medium">{row.item}</span>
                      {row.tier === "optional" ? (
                        <Badge variant="outline" className="ml-2">
                          Optional
                        </Badge>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.qty}</td>
                    <td className="px-4 py-3">{row.price}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {coreTotal.length} core items. Do not replace the cabinets, fridge,
            or bathroom doors.
          </p>
        </section>

        <section id="weekend" className="mt-16 scroll-mt-24">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Sequence
          </p>
          <h2 className="font-heading mt-1 text-3xl">One Saturday</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {kitchenWeekend.map((block, index) => (
              <Card key={block.title} className="bg-white/80">
                <CardHeader>
                  <p className="text-xs text-primary">{block.when}</p>
                  <CardTitle className="text-base">
                    {index + 1}. {block.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-6 text-muted-foreground">
                  {block.detail}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        <section className="grid gap-8 pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="font-heading text-3xl">House rules</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>Nothing on top of the kitchen cabinets. Ever.</li>
              <li>The pantry is not a seat. Chairs belong at desks.</li>
              <li>The extinguisher stays on the wall, never on the fridge.</li>
              <li>Spare water bottles live on the floor rack or in Pantry.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Photo
              src="/kitchen/after-sink.png"
              alt="Rising Tech Solutions pantry sink after restyle"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
