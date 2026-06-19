import ProductGallery from "@/components/product/product-gallery";
import { getProductDetails } from "@/lib/services/product.service";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ returnTo?: string }>;
}

export default async function ProductPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const search = await searchParams;
  const returnTo = search.returnTo || "";

  const product = await getProductDetails(id);

  if (!product) notFound();

  return (
    <>
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 py-6 flex items-center justify-between">
        <Link
          href={`/?${returnTo}`}
          className="label-mono text-foreground hover:text-[var(--accent)] transition-colors"
        >
          ← Back
        </Link>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 grid lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Gallery */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        {/* Info */}
        <div className="lg:col-span-5">
          <div className="label-mono mb-6">
            #{String(product.id).padStart(4, "0")} · {product.category}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[0.95]">
            {product.title}
          </h1>

          <div className="mt-8 flex items-baseline gap-6 border-y border-border py-6">
            <div className="text-5xl font-semibold tracking-tighter text-[var(--accent)]">
              ${product.price.toFixed(2)}
            </div>
          </div>

          <div className="mt-6 p-6 flex items-center justify-between gap-6">
            <div className="flex items-baseline gap-3">
              <span className="text-6xl text-[var(--accent)] font-semibold tracking-tighter leading-none">
                {product.rating.toFixed(1)}
              </span>
              <span className="label-mono opacity-80">/ 5.0</span>
            </div>
            <div className="text-right">
              <div
                className="text-2xl tracking-tight text-[var(--accent)] leading-none"
                aria-label={`${product.rating.toFixed(1)} out of 5 stars`}
              >
                {"★".repeat(Math.round(product.rating))}
                <span className="opacity-30">
                  {"★".repeat(5 - Math.round(product.rating))}
                </span>
              </div>
              <div className="label-mono mt-2 opacity-80">Customer rating</div>
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-px bg-border border border-border">
            <Detail label="Brand" value={product.brand ?? "—"} />
            <Detail label="Category" value={product.category} />
            <Detail
              label="Stock"
              value={product.stock != null ? String(product.stock) : "—"}
            />
            <Detail
              label="Discount"
              value={
                product.discountPercentage != null
                  ? `${product.discountPercentage.toFixed(1)}%`
                  : "—"
              }
            />
          </dl>

          <div className="mt-10 flex items-center gap-8">
            <button className="relative inline-flex items-center gap-3 py-3 label-mono text-[var(--accent)] group">
              Add to bag →
              <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[var(--accent)] transition-transform group-hover:scale-x-110" />
            </button>
            <Link
              href={`/?${returnTo}`}
              className="label-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              Continue browsing
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-5">
      <dt className="label-mono mb-2">{label}</dt>
      <dd className="text-base text-foreground capitalize">{value}</dd>
    </div>
  );
}
