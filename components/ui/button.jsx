import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#ff9900] text-primary hover:bg-accent hover:text-primary", /* default is bg-accent text-primary hover:bg-accent hover:text-primary */
        primary: "bg-primary text-white",
        outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary"
      },
      size: {
        default: "h-[35px] px-6",
        sm: "h-[46px] px-4",
        lg: "h-[52px] px-8 text-sm uppercase tracking[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
