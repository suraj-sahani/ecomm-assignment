import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-6 flex items-center justify-between">
        <Link href="/" className="label-mono text-foreground font-semibold">
          ※ CATALOG / 2026
        </Link>
        <div className="label-mono text-muted-foreground uppercase text-[10px] hidden sm:block">
          Find the products you need.
        </div>
      </div>
    </header>
  );
}
