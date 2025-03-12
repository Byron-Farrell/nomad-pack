import React from 'react';
import clsx from "clsx";

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    shadow?: boolean;
}

const BASE_CLASSES = 'bg-foreground text-contrast-foreground p-6 rounded-lg';
const SHADOW_CLASSES = 'ring-[1px] shadow-xl ring-slate-950/10';

export default function Card({
    children,
    className,
    shadow = true,
    ...props
} : CardProps): React.ReactElement {
    return (
        <div
            {...props}
            className={clsx(
                BASE_CLASSES,
                className,
                shadow && SHADOW_CLASSES
            )}
        >
            {children}
        </div>
    )
}