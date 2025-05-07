import React from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../components/Input";

export function SignUp() {
    const navigate = useNavigate()
    const [user, setUser] = React.useState("")

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        if(user === "user"){
            navigate("/home")
        }

        return toast.error("Username not registered")
    }

    return (
        <div className="md:h-full flex items-center justify-center">
            <ToastContainer />
            <div className="bg-white rounded-2xl p-6 border border-terciary w-[500px]">
                <h1 className="font-bold text-title mb-6">Welcome to CodeLeap network!</h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                     <Input 
                        label="Please enter your username"
                        onChange={({target}) => setUser(target.value)} 
                        type="text"
                        id="username"
                        placeholder="John doe"
                        value={user}
                        className="mb-4"
                    />
                    <Button 
                        className="w-[111px] self-end" 
                        disabled={user.trim() === ""} 
                        type="submit"
                    >
                        ENTER
                    </Button>
                </form>
            </div>
        </div>
    )
}