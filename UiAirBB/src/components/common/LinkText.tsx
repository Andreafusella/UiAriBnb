import { ComponentProps } from "react";

function LinkText({ children, className, ...props }: ComponentProps<'a'>) {
  return (
    <a className={`${className}`} {...props}>
        {children}
    </a>
  )
}

export default LinkText 