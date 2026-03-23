import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "badge", // We use the .badge class defined in global.css
  {
    variants: {
      variant: {
        active: "badge-active",
        warning: "badge-warning",
        error: "badge-error",
        info: "badge-info",
        default: "bg-[var(--color-surface-raised)] text-[var(--color-text-primary)]",
        secondary: "bg-[var(--color-surface-raised)] text-[var(--color-text-primary)]",
        outline: "border border-[var(--color-border)] text-[var(--color-text-secondary)]",
        destructive: "badge-error"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
