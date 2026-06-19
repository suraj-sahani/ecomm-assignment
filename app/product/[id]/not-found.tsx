import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <div>
        <div className="label-mono mb-4 text-[var(--accent)]">Error</div>
        <h1 className="text-3xl font-semibold tracking-tight mb-6">
          Couldn't load this product.
        </h1>
        <Link
          href={"/"}
          className="label-mono text-[var(--accent)] hover:underline underline-offset-4"
        >
          ← Go back
        </Link>
      </div>
    </div>
  );
}
