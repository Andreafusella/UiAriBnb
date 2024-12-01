import { ComponentProps, useState } from "react"
import Button from "./Button"
import Input from "./Input"
import { twMerge } from "tailwind-merge"
import { useNavigate } from "react-router-dom"

interface DialogProps extends ComponentProps<'dialog'> {
    label: string
    idModal: string
    idForm: string
    isOpen: boolean
    onClose: () => void
    inputs: {
        id: string
        name: string
        text: string
        placeholder: string
        type: string
    }[]
}

function Dialog({ label, idModal, idForm, isOpen, onClose, inputs, ...props }: DialogProps) {
    const navigate = useNavigate()

    const [error, setError] = useState(false);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
       
        //aggiornare logica submit

        const form = document.getElementById(idForm) as HTMLFormElement

        if(idModal === "loginModal"){
            const email = (form.elements.namedItem("email") as HTMLInputElement).value
            const password = (form.elements.namedItem("password") as HTMLInputElement).value
            const res = await fetch("http://localhost:8000/users")
            const data = await res.json()
            data.forEach((user: any) => {
                if(user.email === email && user.password === password){

                    localStorage.setItem('user', JSON.stringify({
                        id: user.id,
                        name: user.username,
                    }))

                    onClose()
                    navigate("/HomePage")
                    setError(false)
                    return
                }
            })
            console.log("errore");
            setError(true)

        }

        if(idModal === "registerModal"){
            const name = (form.elements.namedItem("name") as HTMLInputElement).value
            const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value
            const email = (form.elements.namedItem("email") as HTMLInputElement).value
            const password = (form.elements.namedItem("password") as HTMLInputElement).value
            console.log(name, lastName, email, password)
        }
        
        
    }

    const handleClose = (e: React.MouseEvent) => {
        e.preventDefault()
        const form = document.getElementById(idForm) as HTMLFormElement
        form.reset();
        setError(false)
        onClose()
    }

    return (
        <dialog id={idModal} className={twMerge("modal", props.className)} {...props} open={isOpen}>
            <div className="modal-box flex flex-col gap-4 bg-slate-200">
                <h1 className="font-bold text-xl text-black">{label}</h1>
                <form id={idForm} className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    {inputs.map((input) => (
                        <>
                            <h1>{input.text}</h1>
                            <Input key={input.id} id={input.id} name={input.name} placeholder={input.placeholder} type={input.type} error={error}></Input>
                        </>
                    ))}
                    {error ? (
                        <p className="text-red-500 font-bold">Credenziali non valide</p>   
                    ) : (
                        <></>
                    )}
                    <div className="modal-action">
                        <Button onClick={handleClose}>Chiudi</Button>
                        <Button type="submit" className="btn-primary">{label}</Button>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={handleClose}>close</button>
            </form>
        </dialog>
    )
}

export default Dialog   