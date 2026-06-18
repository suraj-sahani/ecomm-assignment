"use client"


type RadioFilterProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export default function RadioFilter({
  label,
  active,
  onClick,
}: RadioFilterProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center gap-3 w-full text-left py-1 ${
        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      } transition-colors`}
    >
      <span
        className={`block h-px transition-all ${
          active ? "w-8 bg-[var(--accent)]" : "w-3 bg-border group-hover:w-6 group-hover:bg-foreground"
        }`}
      />
      <span className="text-sm capitalize">{label}</span>
    </button>
  );
}