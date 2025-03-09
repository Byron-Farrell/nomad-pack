import React, { ElementType } from 'react';
import clsx from 'clsx';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'accent';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    isLoading?: boolean;
    icon?: ElementType;
}

const BASE__CLASSES = 'rounded';

const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-5 py-3 text-lg',
}

const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: 'bg-emerald-500 hover:bg-emerald-600',
    secondary: 'bg-amber-500',
    accent: 'bg-accent',
}


export default function Button({
    size = 'md',
    variant = 'primary',
    isLoading = false,
    className = '',
    children,
    icon: Icon,
    ...rest
}: ButtonProps): React.ReactElement {
    return (
        <button
            className={clsx(
                BASE__CLASSES,
                BUTTON_VARIANT_CLASSES[variant],
                BUTTON_SIZE_CLASSES[size], className,
                isLoading && 'opacity-50 cursor-not-allowed'
            )}
            {...rest}
        >
            <div className="flex items-center gap-1">
                {Icon && <Icon className="size-4" />}
                {children && <span>{children}</span>}
            </div>

        </button>
    )
}
