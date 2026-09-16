import { Deck } from "@/components/deck";
import { slides } from "@/lib/presentation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Present · Rising Tech Solutions office restyle",
  description:
    "Leadership slideshow: no-reconstruction restyle for four areas of the Rising Tech Solutions office.",
};

export default function PresentPage() {
  return <Deck slides={slides} />;
}
