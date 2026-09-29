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
import {
  entranceAngles,
  entranceBudget,
  entranceKeeps,
  entranceMoves,
  entranceShopping,
  entranceWeekend,
} from "@/lib/entrance";
import { Check, CircleDollarSign, DoorOpen, Hammer } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrance · Rising Tech Solutions",
  description:
    "Budget restyle for the Rising Tech Solutions office entrance. Same door and logo — cleaner light and polish.",
};

export default function EntrancePage() {
  const coreTotal = entranceShopping.filter((item) => item.tier === "core");
  const angle = entranceAngles[0];

  return (
    <div className="flex flex-1 flex-col">
      <SiteHeader kicker="Office entrance" current="entrance" />

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <section className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <Badge variant="outline" className="mb-4 border-primary/20 bg-white/70">
              No reconstruction · keep the door
            </Badge>
            <h1 className="font-heading max-w-xl text-4xl leading-[1.1] text-balance sm:text-5xl">
              Same door. Soft light on the logo. A walk-up that looks like Rising
              Tech.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              The arched door, acrylic sign, biometric pad, and handrail stay.
              Scuffs go, glare softens, hardware gets polished. About $
              {entranceBudget.min}–${entranceBudget.max}.
            </p>
          </div>
          <ul className="grid grid-cols-3 gap-3">
            {[
              { icon: Hammer, label: "Rebuild", value: "None" },
              {
                icon: CircleDollarSign,
                label: "Core spend",
                value: `$${entranceBudget.min}+`,
              },
              { icon: DoorOpen, label: "Door", value: "Stays" },
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
              <h2 className="font-heading text-3xl">Front door</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Photoreal restyle from your photo. Drag: left is today, right is
              after. Door and sign stay.
            </p>
          </div>

          <div className="space-y-3">
            <BeforeAfter
              beforeSrc={angle.before}
              afterSrc={angle.after}
              beforeAlt="Entrance as it is today"
              afterAlt="Entrance after the budget restyle"
            />
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {angle.caption}
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                What is holding it back
              </CardTitle>
              <CardDescription>
                Guests meet the company at this door before they see any desk.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p>
                Wall scuffs, a harsh yellow hotspot under the sign, and dull
                hardware make a solid door feel temporary.
              </p>
              <p>
                Soft light on the Rising Tech Solutions acrylic and a polished
                arched door are enough — the logo and access gear already do the
                branding work.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/80">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                What we refuse to touch
              </CardTitle>
              <CardDescription>
                No new door, no new cladding, no moving the access system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {entranceKeeps.map((item) => (
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
          <h2 className="font-heading mt-1 text-3xl">A cleaner first impression</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {entranceMoves.map((move) => (
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
                Core kit ${entranceBudget.min}–${entranceBudget.max}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Light and polish do most of the work. Skip the doormat if the
              threshold is tight.
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
                {entranceShopping.map((row) => (
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
            {coreTotal.length} core items. Do not replace the door or the logo
            sign.
          </p>
        </section>

        <section id="weekend" className="mt-16 scroll-mt-24">
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Sequence
          </p>
          <h2 className="font-heading mt-1 text-3xl">One Saturday</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {entranceWeekend.map((block, index) => (
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
              <li>Nothing stacked against the front door.</li>
              <li>The logo light stays soft — never a yellow hotspot.</li>
              <li>Wipe the acrylic sign weekly so Rising Tech stays sharp.</li>
              <li>Access pad and fire alarm stay level and fingerprint-free.</li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Photo
              src="/entrance/after-door.jpg"
              alt="Rising Tech Solutions entrance after restyle"
              className="h-full w-full object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
