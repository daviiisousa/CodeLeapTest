import React from "react";

type ModalProps = {
    children: React.ReactNode
}

export function Modal({children}: ModalProps){
    return(
        <div className="bg-secondary/80 w-screen h-screen z-10 fixed inset-0 flex justify-center items-center">
            <div className="border p-6 rounded-2xl border-line bg-white w-1/2">
                {children}
            </div>
        </div>
    )
}