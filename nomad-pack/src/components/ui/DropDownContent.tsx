import clsx from "clsx";
import { ReactNode } from "react";

export interface DropDownContentProps {
    children: ReactNode;
    className?: string;
    isOpen?: boolean;
    fadeOut?: 'smooth' | 'instant';
}

export default function DropDownContent({
    children,
    className,
    isOpen = false,
    fadeOut = 'smooth',
}: DropDownContentProps) {
    return (
        <div className={clsx(
            "relative overflow-hidden",
            "transition-[max-height] max-h-0 w-full  ease-in",
            isOpen && "max-h-[200px] !duration-400",
            fadeOut === "smooth" ? "duration-400" : "duration-0",
            className,
        )}>
            {children}
        </div>

    )
}