import React from 'react';
import clsx from 'clsx';


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'accent';
    isLoading?: boolean;
}

const BASE_STYLES = 'rounded';

const SIZES = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-5 py-3 text-lg',
}

const VARIANTS = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    accent: 'bg-accent',
}

export default function Button({
    size = 'md',
    variant = 'primary',
    isLoading = false,
    children,
    className,
    ...rest
}: ButtonProps): React.ReactElement {
    return (
        <button
            className={clsx(
                BASE_STYLES, VARIANTS[variant], SIZES[size], className,
                isLoading && 'opacity-50 cursor-not-allowed'
            )}
            {...rest}
        >{children}</button>
    )
}
