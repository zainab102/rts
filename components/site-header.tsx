import Link from "next/link";
import { company } from "@/lib/plan";

type SiteHeaderProps = {
  kicker?: string;
  current?: "home" | "founders" | "hall" | "kitchen" | "sales" | "present";
};

export function SiteHeader({
  kicker = "Office restyle",
  current = "home",
}: SiteHeaderProps) {
  const linkClass = (id: SiteHeaderProps["current"]) =>
    `hover:text-foreground ${current === id ? "text-foreground" : ""}`;

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="min-w-0">
          <p className="text-[11px] font-medium tracking-[0.22em] text-primary uppercase">
            {company}
          </p>
          <p className="truncate text-sm text-muted-foreground">{kicker}</p>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-muted-foreground sm:gap-5">
          <Link href="/present" className={linkClass("present")}>
            Present
          </Link>
          <Link href="/" className={linkClass("home")}>
            Overview
          </Link>
          <Link href="/founders" className={linkClass("founders")}>
            Founders
          </Link>
          <Link href="/hall" className={linkClass("hall")}>
            Main hall
          </Link>
          <Link href="/sales" className={linkClass("sales")}>
            Sales
          </Link>
          <Link href="/kitchen" className={linkClass("kitchen")}>
            Kitchen
          </Link>
        </nav>
      </div>
    </header>
  );
}
