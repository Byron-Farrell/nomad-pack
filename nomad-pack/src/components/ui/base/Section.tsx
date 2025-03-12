import React from 'react';
import clsx from "clsx";

type Spacing = 'sm' | 'md' | 'lg' | 'none';

export interface SectionProps extends React.HTMLProps<HTMLElement> {
    children: React.ReactNode;
    spacing?: Spacing;
}

const SPACING_CLASSES: Record<Spacing, string> = {
    sm: 'mt-4',
    md: 'mt-10',
    lg: 'mt-20',
    none: '',
}

const BASE_CLASSES = '';

export default function Section({
    children,
    className,
    spacing = 'none',
    ...props
} : SectionProps): React.ReactElement {
    return (
        <section
            {...props}
            className={clsx(
                BASE_CLASSES,
                SPACING_CLASSES[spacing],
                className
            )}
        >
            {children}
        </section>
    )
}