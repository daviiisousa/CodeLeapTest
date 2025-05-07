import { clsx } from "clsx";
import React from "react";

type InputProps = {
    label?: string;
    className?: string;
  } & React.InputHTMLAttributes<HTMLInputElement>;
  
  export function Input({ label, className, id, ...props }: InputProps) {
    return (
      <>
        {label && (
          <label htmlFor={id} className="mb-2">
            {label}
          </label>
        )}
        <input
          id={id}
          className={clsx("p-2 rounded-lg border border-secondary placeholder:text-terciary", className)}
          {...props}
        />
      </>
    );
  }
  