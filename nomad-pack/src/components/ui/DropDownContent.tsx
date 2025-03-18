import clsx from "clsx";
import { ReactNode } from "react";

export interface DropDownContentProps {
    children: ReactNode;
    className?: string;
    isOpen?: boolean;
    fadeOut?: 'smooth' | 'instant';
}

const BASE_CLASSES = 'overflow-hidden transition-[max-height] max-h-0 ease-in';

export default function DropDownContent({
    children,
    className,
    isOpen = false,
    fadeOut = 'smooth',
}: DropDownContentProps) {
    return (
        <div className={clsx(
            BASE_CLASSES,
            isOpen && "max-h-[200px] !duration-200",
            fadeOut === "smooth" ? "duration-400" : "duration-0",
            className,
        )}>
            {children}
        </div>

    )
}