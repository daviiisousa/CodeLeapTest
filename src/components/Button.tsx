import React from "react";
import { clsx } from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "py-1.5 px-6 rounded-lg font-bold text-white transition",
        props.disabled
          ? "bg-secondary cursor-not-allowed"
          : "bg-primary hover:bg-primary/90 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
