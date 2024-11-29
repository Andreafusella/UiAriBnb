import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends ComponentProps<'input'> {
    
}
function Input({ id, name, placeholder, type, children, ...props }: InputProps) {
  return (
    <>
        <input id={id} name={name} type={type} placeholder={placeholder} className={twMerge("input input-bordered bg-slate-100", props.className)} {...props} />{children}
    </>
  )
}

export default Input