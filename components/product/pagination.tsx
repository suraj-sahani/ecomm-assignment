"use client";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  onChange,
}: PaginationProps) {
  return (
    <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        className="label-mono text-foreground disabled:opacity-30 hover:text-[var(--accent)] transition-colors"
      >
        ← Previous
      </button>
      <div className="label-mono">
        {String(page).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
      </div>
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        className="label-mono text-foreground disabled:opacity-30 hover:text-[var(--accent)] transition-colors"
      >
        Next →
      </button>
    </div>
  );
}
