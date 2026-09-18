"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { photoSrc } from "@/lib/photos";

type BeforeAfterProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

function markIfComplete(
  image: HTMLImageElement | null,
  setReady: (value: boolean) => void,
) {
  if (image?.complete && image.naturalWidth > 0) setReady(true);
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterProps) {
  const [pos, setPos] = useState(52);
  const [beforeReady, setBeforeReady] = useState(false);
  const [afterReady, setAfterReady] = useState(false);
  const [frameWidth, setFrameWidth] = useState(0);
  const frame = useRef<HTMLDivElement>(null);
  const labelId = useId();

  useEffect(() => {
    setBeforeReady(false);
    setAfterReady(false);
    setPos(52);
  }, [beforeSrc, afterSrc]);

  useLayoutEffect(() => {
    const el = frame.current;
    if (!el) return;
    const update = () => setFrameWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const move = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(97, Math.max(3, next)));
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={frame}
        className="relative isolate aspect-[4/3] w-full cursor-ew-resize overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-foreground/10"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          move(event.clientX);
        }}
        onPointerMove={(event) => {
          if (event.buttons !== 1) return;
          move(event.clientX);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc(afterSrc)}
          alt={afterAlt}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
          draggable={false}
          decoding="async"
          loading="eager"
          fetchPriority="high"
          ref={(image) => markIfComplete(image, setAfterReady)}
          onLoad={() => setAfterReady(true)}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${pos}%` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc(beforeSrc)}
            alt={beforeAlt}
            className="pointer-events-none absolute inset-y-0 left-0 h-full max-w-none object-cover select-none"
            style={{
              width: frameWidth ? `${frameWidth}px` : "100%",
              opacity: beforeReady ? 1 : 0,
            }}
            draggable={false}
            decoding="async"
            loading="eager"
            ref={(image) => markIfComplete(image, setBeforeReady)}
            onLoad={() => setBeforeReady(true)}
          />
        </div>
        {afterReady ? (
          <>
            <div
              className="absolute inset-y-0 z-10 w-px bg-white"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md ring-1 ring-black/10">
                <span className="sr-only">Drag to compare</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 12H4m0 0 3-3M4 12l3 3M16 12h4m0 0-3-3m3 3-3 3" />
                </svg>
              </div>
            </div>
            <span className="absolute top-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white uppercase">
              Now
            </span>
            <span className="absolute top-3 right-3 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white uppercase">
              After
            </span>
          </>
        ) : null}
      </div>
      <label className="flex items-center gap-3 text-xs text-muted-foreground">
        <span id={labelId}>Drag to compare</span>
        <input
          type="range"
          min={3}
          max={97}
          value={pos}
          aria-labelledby={labelId}
          onChange={(event) => setPos(Number(event.target.value))}
          className="h-1.5 w-full accent-primary"
        />
      </label>
    </div>
  );
}
