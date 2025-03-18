import {HTMLProps, ReactNode} from "react";
import clsx from "clsx";

export type PillSize = 'sm' | 'md' | 'lg';
export interface PillProps extends HTMLProps<HTMLDivElement> {
    className?: string
    pillSize?: PillSize
    children?: ReactNode
}

const PILL_SIZE_CLASSES: Record<PillSize, string> = {
    sm: 'text-xs px-2',
    md: 'text-base px-2',
    lg: 'text-lg px-2',
}
const BASE_CLASSES = 'bg-neutral-300 rounded-lg';


export default function Pill({
    className,
    pillSize = 'sm',
    children,
}: PillProps) {
    return (
        <div className={clsx(
            BASE_CLASSES,
            PILL_SIZE_CLASSES[pillSize],
            className,
        )}>
            {children}
        </div>
    )
}