export default function ProductPageLoading() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-6 flex items-center justify-between">
          <div className="h-3 w-16 bg-[var(--muted)] animate-pulse" />
          <div className="h-3 w-24 bg-[var(--muted)] animate-pulse" />
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="aspect-square bg-[var(--muted)] animate-pulse border border-border" />
          <div className="mt-4 grid grid-cols-5 gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-[var(--muted)] animate-pulse border border-border"
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="h-3 w-40 bg-[var(--muted)] animate-pulse mb-6" />
          <div className="space-y-3">
            <div className="h-12 w-full bg-[var(--muted)] animate-pulse" />
            <div className="h-12 w-3/4 bg-[var(--muted)] animate-pulse" />
          </div>
          <div className="mt-8 flex items-baseline gap-6 border-y border-border py-6">
            <div className="h-12 w-40 bg-[var(--muted)] animate-pulse" />
            <div className="h-3 w-24 bg-[var(--muted)] animate-pulse" />
          </div>
          <div className="mt-8 space-y-3">
            <div className="h-4 w-full bg-[var(--muted)] animate-pulse" />
            <div className="h-4 w-full bg-[var(--muted)] animate-pulse" />
            <div className="h-4 w-2/3 bg-[var(--muted)] animate-pulse" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px bg-border border border-border">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-background p-5">
                <div className="h-3 w-16 bg-[var(--muted)] animate-pulse mb-3" />
                <div className="h-4 w-24 bg-[var(--muted)] animate-pulse" />
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-8">
            <div className="h-3 w-32 bg-[var(--muted)] animate-pulse" />
            <div className="h-3 w-40 bg-[var(--muted)] animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
