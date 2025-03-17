import React from 'react';
import clsx from "clsx";

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    shadow?: boolean;
    noPadding?: boolean;
}

const BASE_CLASSES = 'bg-foreground text-contrast-foreground rounded-lg';
const SPACING_CLASSES = 'p-6';

const SHADOW_CLASSES = 'ring-[1px] shadow-xl ring-slate-950/10';

export default function Card({
    children,
    className,
    shadow = true,
    noPadding = false,
    ...props
} : CardProps): React.ReactElement {
    return (
        <div
            {...props}
            className={clsx(
                BASE_CLASSES,
                className,
                shadow && SHADOW_CLASSES,
                !noPadding && SPACING_CLASSES
            )}
        >
            {children}
        </div>
    )
}