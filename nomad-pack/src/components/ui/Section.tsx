import React from 'react';
import clsx from "clsx";

export interface SectionProps extends React.HTMLProps<HTMLElement> {
    children?: React.ReactNode;
}

const BASE_CLASSES = '';

export default function Section({
    children,
    className
} : SectionProps): React.ReactElement {
    return (
        <section className={clsx(
            BASE_CLASSES,
            className
        )}>
            {children}
        </section>
    )
}