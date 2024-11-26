import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface InputProps extends ComponentProps<'input'> {
    text: string
}
function Input({ id, name, placeholder, type, text, ...props }: InputProps) {
  return (
    <>
        <label>{text}</label>
        <input id={id} name={name} type={type} placeholder={placeholder} className={twMerge("input input-bordered bg-slate-100", props.className)} {...props} />
    </>
  )
}

export default Input