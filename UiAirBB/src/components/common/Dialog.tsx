import { ComponentProps } from "react"
import Button from "./Button"
import Input from "./Input"
import { twMerge } from "tailwind-merge"

interface DialogProps extends ComponentProps<'dialog'> {
    label: string
    idModal: string
    idForm: string
}

// modificare i dialog per login e register

function Dialog({ label, idModal, idForm, ...props }: DialogProps) {
  return (
            <dialog id={idModal} className={twMerge("modal", props.className)} {...props}>
                <div className="modal-box flex flex-col gap-4 bg-slate-200">
                    <h1 className="font-bold text-xl text-black">{label}</h1>
                    <form id={idForm} className="flex flex-col gap-4">
                        <Input id="inputEmail" name="email" text="Email" placeholder="example@ex.it" type="email"></Input>
                        <Input id="inputPassword" name="password" text="Password" placeholder="********" type="password"></Input>
                        <div className="modal-action">
                            <Button onClick={() => {}}>Chiudi</Button>
                            <Button type="submit" className="btn-primary">{label}</Button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
  )
}

export default Dialog   