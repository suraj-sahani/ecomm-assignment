"use client"

type CheckboxFilterProps = {
  checked: boolean;
  onChange: () => void;
  label: string;
};

export default function CheckboxFilter({
  checked,
  onChange,
  label,
}: CheckboxFilterProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <span
        className={`size-4 border ${
          checked
            ? "bg-[var(--accent)] border-[var(--accent)]"
            : "border-border group-hover:border-foreground"
        } transition-colors`}
      />
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span className="text-sm group-hover:text-foreground text-muted-foreground transition-colors">
        {label}
      </span>
    </label>
  );
}
