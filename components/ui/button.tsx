import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center font-mono font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-150 outline-none select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "relative text-accent bg-transparent px-0 hover:text-accent focus-visible:ring-accent",
        outline:
          "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-6 focus-visible:ring-foreground",
        secondary:
          "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-6 focus-visible:ring-foreground",
        ghost:
          "relative text-muted-foreground bg-transparent px-4 hover:text-foreground focus-visible:ring-foreground",
      },
      size: {
        default: "h-12 py-3 gap-2.5 text-sm",
        sm: "h-10 py-2 gap-2 text-xs",
        lg: "h-14 py-4 gap-3 text-base",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {variant === "default" ? (
        <span className="relative inline-flex items-center gap-2">
          {children}
          <span className="absolute bottom-[-4px] left-0 h-[2px] w-full bg-accent origin-left transition-transform duration-150 ease-[cubic-bezier(0.25,0,0,1)] scale-x-100 group-hover/button:scale-x-110" />
        </span>
      ) : variant === "ghost" ? (
        <span className="relative inline-flex items-center gap-2">
          {children}
          <span className="absolute bottom-[-2px] left-0 h-[1px] w-full bg-foreground origin-left transition-transform duration-150 ease-[cubic-bezier(0.25,0,0,1)] scale-x-0 group-hover/button:scale-x-100" />
        </span>
      ) : (
        children
      )}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }

