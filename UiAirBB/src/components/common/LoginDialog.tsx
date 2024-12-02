import { ComponentProps } from "react"
import { useNavigate } from "react-router-dom"
import {Input} from "../ui/input"
import { useForm } from "react-hook-form"
import { twMerge } from "tailwind-merge"
import Button from "./Button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

interface ILoginDialog extends ComponentProps<'dialog'> {
    isOpen: boolean
    onClose: () => void
}

const loginSchema = z.object({
    email: z.string()
      .min(1, "L'email è obbligatoria"),
    //   .email("Formato email non valido"),
    password: z.string()
      .min(1, "La password è obbligatoria")
      .min(3, "La password deve essere di almeno 3 caratteri")
})

type LoginFormData = z.infer<typeof loginSchema>

function LoginDialog({isOpen, onClose, className, ...props}: ILoginDialog) {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: 'onSubmit'
    })

    const navigate = useNavigate()

    function handleClose() {
        const form = document.getElementById("loginForm") as HTMLFormElement;
        form.reset();
        onClose()
    }

    async function submitHandler(data: LoginFormData) {
        
        try {
            const email = data.email;
            const password = data.password;
            const res = await fetch("http://localhost:8000/login", {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            
            if (res.status === 201) {
                const resJson = await res.json();
                console.log(resJson);
                localStorage.setItem('user', JSON.stringify({
                    id: resJson.id
                }))

                onClose();
                navigate("/HomePage");
                return
            } else {
                console.log("altro errore");
            }

        } catch (err) {
            console.log(err);
        }
    }

    return(
        <dialog open={isOpen} className={twMerge("modal", className)} {...props}>
            <div className="modal-box flex flex-col gap-4 bg-slate-200">
                <h1 className="font-bold text-xl text-black">Login</h1>
                <form id="loginForm" className="flex flex-col gap-4" onSubmit={handleSubmit(submitHandler)}>
                    <h1>Email</h1>
                    <Input 
                        {...register("email", {required: true})}
                        id="emailValue"
                        name="email"
                        placeholder="text@try.com"
                        type="text"    
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
                    
                    <h1>Password</h1>
                    <Input
                        {...register("password", {required: true})}
                        id="passwordValue"
                        name="password"
                        placeholder="********"
                        type="password"              
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message?.toString()}</span>}
                    
                    <div className="modal-action">
                        <Button onClick={handleClose} type="button">Chiudi</Button>
                        <Button disabled={isSubmitting} type="submit" className="btn-primary">Login</Button>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={handleClose} type="button">close</button>
            </form>
        </dialog>
    )
}

export default LoginDialog