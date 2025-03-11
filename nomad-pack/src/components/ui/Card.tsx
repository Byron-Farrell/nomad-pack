import React from 'react';
import clsx from "clsx";

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
}

const BASE_CLASSES = 'bg-foreground  p-6 ring-[1px] shadow-xl ring-slate-950/10';

export default function Card({
    children,
    className
} : CardProps): React.ReactElement {
    return (
        <div className={clsx(
            BASE_CLASSES,
            className
        )}>
            {children}
        </div>
    )
}