"use client";

type PriceFilterProps = {
  placeholder: string;
  value: number | "";
  onChange: (v: number | undefined) => void;
};

export default function PriceFilter({
  placeholder,
  value,
  onChange,
}: PriceFilterProps) {
  return (
    <input
      type="number"
      inputMode="numeric"
      min={0}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        const v = e.target.value;
        onChange(v === "" ? undefined : Number(v));
      }}
      className="w-full h-12 bg-[var(--input)] border border-border px-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[var(--accent)] outline-none transition-colors"
    />
  );
}
