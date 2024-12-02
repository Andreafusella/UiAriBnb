import { ComponentProps, useState } from "react"
import Button from "./Button"
import Input from "./Input"
import { twMerge } from "tailwind-merge"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"


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

type FormData = {
    [key: string]: string;
}

function Dialog({ label, idModal, idForm, isOpen, onClose, inputs, ...props }: DialogProps) {
    const navigate = useNavigate()

    const [error, setError] = useState(false);

    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<FormData>();
    
    const sumbitHandler = async (data: FormData) => {
        console.log("Submitting:", data);
        
        if(idModal === "loginModal"){
            const email = data.email;
            const password = data.password;
            const res = await fetch("http://localhost:8000/login", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    data
                })
            })
            const dataLocal = await res.json();
            
            if (res.status === 201 && dataLocal.id) {
                localStorage.setItem('user', JSON.stringify({
                    id: dataLocal.id,
                }))

                onClose();
                navigate("/HomePage");
                setError(false);
                return
            }
        
            console.log("errore");
            setError(true)

        }        
    }

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation()
        const form = document.getElementById(idForm) as HTMLFormElement
        form.reset();
        setError(false)
        onClose()
    }

    return (
        <dialog id={idModal} className={twMerge("modal", props.className)} {...props} open={isOpen}>
            <div className="modal-box flex flex-col gap-4 bg-slate-200">
                <h1 className="font-bold text-xl text-black">{label}</h1>
                <form id={idForm} className="flex flex-col gap-4" onSubmit={handleSubmit(sumbitHandler)}>
                    {inputs.map((input) => (
                        <>
                        <h1>{input.text}</h1>
                        <Input {...register(input.name, {required: "E' necessario"})} key={input.id} id={input.id} name={input.name} placeholder={input.placeholder} type={input.type} error={error}></Input>
                        </> 
                    ))}
                    {error ? (
                        <p className="text-red-500 font-bold">Credenziali non valide</p>   
                    ) : (
                        <></>
                    )}
                    <div className="modal-action">
                        <Button type="button" onClick={handleClose}>Chiudi</Button>
                        <Button disabled={isSubmitting} type="submit" className="btn-primary">{label}</Button>
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





