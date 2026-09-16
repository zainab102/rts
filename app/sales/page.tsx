import { BeforeAfter } from "@/components/before-after";
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
  salesAngles,
  salesBudget,
  salesKeeps,
  salesMoves,
  salesShopping,
  salesWeekend,
} from "@/lib/sales";
import { Check, CircleDollarSign, Hammer, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales cabin · Rising Tech Solutions",
  description:
    "Budget restyle for the Rising Tech Solutions sales cabin. Desk dividers stay for call privacy. No reconstruction.",
};

export default function SalesPage() {
  const coreTotal = salesShopping.filter((item) => item.tier === "core");

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader kicker="Sales cabin · call floor" current="sales" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-4 border-primary/20 bg-white/70">
              Dividers stay · no reconstruction
            </Badge>
            <h1 className="font-heading max-w-xl text-4xl leading-[1.1] text-balance sm:text-5xl">
              Same cabin. Softer calls. A floor that looks ready before the first headset goes on.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              This room is for the sales team. The privacy screens stay so
              voices do not travel down the aisle. We felt the faces, hide the
              cables, and put Sales on the blue wall you already have. About $
              {salesBudget.min}–${salesBudget.max}.
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-3">
            {[
              { icon: Hammer, label: "Rebuild", value: "None" },
              {
                icon: CircleDollarSign,
                label: "Core spend",
                value: `$${salesBudget.min}+`,
              },
              { icon: Phone, label: "Dividers", value: "Keep" },
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
              <h2 className="font-heading text-3xl">Both angles</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Photoreal restyles from your two photos. Desk rows and blinds are
              unchanged. Drag: left is today, right is after.
            </p>
          </div>

          <Tabs defaultValue="windows">
            <TabsList className="mb-4 flex h-auto w-full flex-wrap bg-white/80 p-1 sm:w-fit">
              {salesAngles.map((angle) => (
                <TabsTrigger
                  key={angle.id}
                  value={angle.id}
                  className="px-3 py-2 text-xs sm:text-sm"
                >
                  {angle.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {salesAngles.map((angle) => (
              <TabsContent key={angle.id} value={angle.id} className="space-y-3">
                <BeforeAfter
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
                The layout is already a sales cabin. It currently looks like
                the machines were left on and the people went home.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                Hard black dividers bounce call audio. Cables on the floor, CPUs
                sitting proud, and chairs at random angles make a long aisle
                feel leftover. The blue wall at the end is unused brand space.
              </p>
              <p>
                Sales needs these screens. The job is to finish them, not to
                open the room into a silent hall.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                What we refuse to touch
              </CardTitle>
              <CardDescription>
                No new glass, no new desks, no pulling the blinds.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {salesKeeps.map((item) => (
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
            Five moves
          </p>
          <h2 className="font-heading mt-1 text-3xl">Finish the cabin you have</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {salesMoves.map((move) => (
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
                Core kit ${salesBudget.min}–${salesBudget.max}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Felt is the largest line and the one that helps live calls. Skip
              the runner if you need to cut.
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
                {salesShopping.map((row) => (
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
            {coreTotal.length} core items. Do not buy new cubicles or chairs.
          </p>
        </section>

        <section id="weekend" className="mt-16 scroll-mt-24">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Sequence
          </p>
          <h2 className="font-heading mt-1 text-3xl">One weekend</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {salesWeekend.map((block, index) => (
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
            <h2 className="font-heading text-3xl">House rules for this cabin</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
              <li>Dividers never come down. Felt stays on them.</li>
              <li>Headset on the stand. Bag on the hook. Chair tucked.</li>
              <li>Nothing lives on the floor in the aisle.</li>
              <li>The blue wall is the room name, not a dumping wall.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sales/after-blue.png"
              alt="Rising Tech Solutions sales cabin after restyle"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
