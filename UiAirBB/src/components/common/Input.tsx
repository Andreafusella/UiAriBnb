import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends ComponentProps<'input'> {
    error?: boolean
}
function Input({ id, name, placeholder, type, className, error, children, ...props }: InputProps) {
  return (
    <>
        <input id={id} name={name} type={type} placeholder={placeholder} className={twMerge("input input-bordered ", error && "border-red-500 border-2" ,className)} {...props} />{children}
    </>
  )
}

export default Input