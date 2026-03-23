import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[var(--space-2)] whitespace-nowrap rounded-[var(--radius-md)] text-[length:var(--text-sm)] font-semibold font-body tracking-[var(--tracking-wide)] transition-all disabled:pointer-events-none disabled:opacity-40 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-signal)] focus-visible:ring-offset-2 focus-visible:ring-offset-background [&>svg]:size-5 shrink-0",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        secondary: "bg-[var(--color-surface)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-[var(--color-surface-raised)] hover:border-[var(--color-border-focus)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)]",
        ghost: "bg-transparent text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]",
        danger: "bg-[var(--color-red)] text-[var(--color-text-inverse)] hover:bg-[#DC2626]",
        call: "btn-call",
        // Shadcn fallbacks
        default: "btn-primary",
        outline: "bg-transparent border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-border-focus)] hover:bg-[var(--color-surface-raised)]",
        link: "text-[var(--color-signal)] underline-offset-4 hover:underline",
        destructive: "bg-[var(--color-red)] text-white hover:bg-[#DC2626]",
      },
      size: {
        default: "px-[var(--space-6)] py-[var(--space-3)]",
        sm: "h-8 px-[var(--space-4)] text-[length:var(--text-xs)]",
        lg: "h-12 px-[var(--space-8)] text-[length:var(--text-base)]",
        icon: "size-10",
        call: "size-16 !p-0 !rounded-[var(--radius-full)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
