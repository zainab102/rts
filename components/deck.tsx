"use client";

import { Button } from "@/components/ui/button";
import { roomBudgets, type Slide } from "@/lib/presentation";
import { photoSrc } from "@/lib/photos";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Printer,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type DeckProps = {
  slides: Slide[];
};

export function Deck({ slides }: DeckProps) {
  const [index, setIndex] = useState(0);
  const [printing, setPrinting] = useState(false);
  const last = slides.length - 1;

  const go = useCallback(
    (next: number) => {
      setIndex(Math.min(last, Math.max(0, next)));
    },
    [last],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === " " || event.key === "PageDown") {
        event.preventDefault();
        go(index + 1);
      } else if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        go(index - 1);
      } else if (event.key === "Home") {
        go(0);
      } else if (event.key === "End") {
        go(last);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, last]);

  useEffect(() => {
    const start = () => setPrinting(true);
    const end = () => setPrinting(false);
    window.addEventListener("beforeprint", start);
    window.addEventListener("afterprint", end);
    return () => {
      window.removeEventListener("beforeprint", start);
      window.removeEventListener("afterprint", end);
    };
  }, []);

  const fullscreen = () => {
    const node = document.documentElement;
    if (!document.fullscreenElement) void node.requestFullscreen();
    else void document.exitFullscreen();
  };

  return (
    <div className="flex min-h-dvh flex-col bg-[#15233b] text-white print:bg-white print:text-foreground">
      <header className="print:hidden flex items-center justify-between gap-3 px-4 py-3 text-xs text-white/70 sm:px-6">
        <Link href="/" className="hover:text-white">
          Exit to plans
        </Link>
        <p>
          {index + 1} / {slides.length} · arrows or click
        </p>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-white/80 hover:bg-white/10 hover:text-white"
            onClick={() => window.print()}
            aria-label="Print or save as PDF"
          >
            <Printer />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-white/80 hover:bg-white/10 hover:text-white"
            onClick={fullscreen}
            aria-label="Fullscreen"
          >
            <Maximize2 />
          </Button>
        </div>
      </header>

      <div className="flex flex-1 flex-col">
        {slides.map((item, i) => (
          <article
            key={item.id}
            className={cn(
              "flex flex-1 flex-col px-6 py-4 sm:px-12 sm:py-8",
              i === index ? "flex" : "hidden print:flex",
              "print:min-h-[100vh] print:break-after-page print:px-12 print:py-16",
            )}
          >
            <SlideBody
              slide={item}
              load={printing || Math.abs(i - index) <= 1}
              active={i === index}
            />
          </article>
        ))}
      </div>

      <footer className="print:hidden flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Button
          variant="secondary"
          size="lg"
          disabled={index === 0}
          onClick={() => go(index - 1)}
        >
          <ChevronLeft />
          Back
        </Button>
        <div className="flex flex-wrap justify-center gap-1.5">
          {slides.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === index ? "bg-white" : "bg-white/30 hover:bg-white/60",
              )}
            />
          ))}
        </div>
        <Button
          size="lg"
          disabled={index === last}
          onClick={() => go(index + 1)}
        >
          Next
          <ChevronRight />
        </Button>
      </footer>
    </div>
  );
}

function SlideBody({
  slide,
  load,
  active,
}: {
  slide: Slide;
  load: boolean;
  active: boolean;
}) {
  if (slide.kind === "title") {
    return (
      <div className="mx-auto flex max-w-5xl flex-1 flex-col justify-center print:text-foreground">
        <p className="text-xs font-medium tracking-[0.28em] text-[#c4b59a] uppercase print:text-primary">
          {slide.kicker}
        </p>
        <h1 className="font-heading mt-4 max-w-3xl text-4xl leading-[1.1] text-balance sm:text-6xl">
          {slide.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 print:text-muted-foreground">
          {slide.subtitle}
        </p>
      </div>
    );
  }

  if (slide.kind === "points") {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center print:text-foreground">
        <p className="text-xs font-medium tracking-[0.22em] text-[#c4b59a] uppercase print:text-primary">
          {slide.kicker}
        </p>
        <h2 className="font-heading mt-3 max-w-3xl text-3xl leading-tight text-balance sm:text-4xl">
          {slide.title}
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {slide.points.map((point) => (
            <li
              key={point.heading}
              className="rounded-xl bg-white/10 p-5 ring-1 ring-white/10 print:bg-muted print:text-foreground print:ring-border"
            >
              <p className="text-base font-medium">{point.heading}</p>
              <p className="mt-2 text-sm leading-6 text-white/70 print:text-muted-foreground">
                {point.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (slide.kind === "compare") {
    return (
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col print:text-foreground">
        <p className="text-xs font-medium tracking-[0.22em] text-[#c4b59a] uppercase print:text-primary">
          {slide.kicker}
        </p>
        <h2 className="font-heading mt-2 text-3xl leading-tight sm:text-4xl">
          {slide.title}
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70 print:text-muted-foreground sm:text-base">
          {slide.body}
        </p>
        <div className="mt-6 grid min-h-0 flex-1 gap-4 sm:grid-cols-2">
          <figure className="min-h-0">
            <p className="mb-2 text-[11px] font-medium tracking-wide text-white/55 uppercase print:text-muted-foreground">
              Now
            </p>
            {load ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photoSrc(slide.before)}
                alt=""
                loading={active ? "eager" : "lazy"}
                decoding="async"
                className="h-[min(52vh,420px)] w-full rounded-xl object-cover ring-1 ring-white/10 print:h-auto print:ring-border"
              />
            ) : (
              <div className="h-[min(52vh,420px)] w-full rounded-xl bg-white/10" />
            )}
          </figure>
          <figure className="min-h-0">
            <p className="mb-2 text-[11px] font-medium tracking-wide text-[#c4b59a] uppercase print:text-primary">
              Proposed
            </p>
            {load ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photoSrc(slide.after)}
                alt=""
                loading={active ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={active ? "high" : undefined}
                className="h-[min(52vh,420px)] w-full rounded-xl object-cover ring-1 ring-white/10 print:h-auto print:ring-border"
              />
            ) : (
              <div className="h-[min(52vh,420px)] w-full rounded-xl bg-white/10" />
            )}
          </figure>
        </div>
      </div>
    );
  }

  if (slide.kind === "budget") {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center print:text-foreground">
        <p className="text-xs font-medium tracking-[0.22em] text-[#c4b59a] uppercase print:text-primary">
          {slide.kicker}
        </p>
        <h2 className="font-heading mt-3 max-w-4xl text-3xl leading-tight sm:text-5xl">
          {slide.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 print:text-muted-foreground">
          {slide.body}
        </p>
        <div className="mt-10 overflow-hidden rounded-xl ring-1 ring-white/15 print:ring-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/8 text-xs tracking-wide text-white/55 uppercase print:bg-muted print:text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Area</th>
                <th className="px-4 py-3 font-medium">Est. spend</th>
                <th className="px-4 py-3 font-medium">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              {roomBudgets.map((row) => (
                <tr key={row.name} className="border-t border-white/10 print:border-border">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3">{row.range}</td>
                  <td className="px-4 py-3 text-white/70 print:text-muted-foreground">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center print:text-foreground">
      <p className="text-xs font-medium tracking-[0.22em] text-[#c4b59a] uppercase print:text-primary">
        {slide.kicker}
      </p>
      <h2 className="font-heading mt-3 max-w-3xl text-3xl leading-tight sm:text-5xl">
        {slide.title}
      </h2>
      <ol className="mt-10 space-y-4">
        {slide.points.map((point, i) => (
          <li key={point} className="flex gap-4 text-lg leading-8 text-white/85 print:text-foreground">
            <span className="font-heading text-2xl text-[#c4b59a] print:text-primary">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
