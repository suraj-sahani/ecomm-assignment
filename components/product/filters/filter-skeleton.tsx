export default function FilterSkeleton() {
  return (
    <ul className="space-y-2">
      {Array.from({ length: 15 }).map((_, i) => (
        <li key={i} className="flex items-center gap-3 py-1">
          <span className="h-px w-3 bg-border" />
          <span
            className="h-3 bg-[var(--muted)] animate-pulse"
            style={{ width: `${50 + ((i * 13) % 40)}%` }}
          />
        </li>
      ))}
    </ul>
  );
}
