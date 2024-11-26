import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

function Button({ children, className, ...props }: ComponentProps<'button'>) {
  return (
    <button className={twMerge("btn", className)} {...props}>
        {children}
    </button>
  )
}

export default Button