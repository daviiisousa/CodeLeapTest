import { Link } from "react-router-dom";

export function PageNotFound(){
    return(
        <div 
            className="h-screen flex justify-center items-center flex-col gap-6"
        >
            <h1
                className="text-center text-7xl text-primary  font-bold "
            >
                404 Error
            </h1>
            <Link to={"/"} className="underline hover:text-primary transition">
                voltar para Login
            </Link>
        </div>
    )
}