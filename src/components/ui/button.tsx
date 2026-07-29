import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent text-primary hover:bg-accent-light shadow-lg hover:shadow-accent/25",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border-2 border-accent text-accent hover:bg-accent hover:text-primary",
        secondary: "bg-primary text-white hover:bg-primary-light",
        ghost: "text-foreground hover:bg-muted",
        link: "text-accent underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-accent to-accent-light text-primary font-semibold shadow-xl hover:shadow-accent/30",
        "premium-outline": "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-13 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
