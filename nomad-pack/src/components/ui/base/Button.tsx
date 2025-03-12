"use client"

import {ComponentProps, ElementType, ReactNode} from "react";
import clsx from 'clsx';
import { motion } from 'framer-motion';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outlined';

export interface ButtonProps extends ComponentProps<typeof motion.button> {
    size?: ButtonSize;
    variant?: ButtonVariant;
    isLoading?: boolean;
    children?: ReactNode;
}

const BASE__CLASSES = 'rounded text-center cursor-pointer ';

const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-5 py-3 text-lg',
}

const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: 'bg-neutral-900 text-white',
    secondary: 'bg-neutral-200 text-black',
    accent: 'bg-linear-to-r from-red-500 to-amber-500',
    outlined: 'bg-transparent border border-neutral-900',
}

export default function Button({
    size = 'md',
    variant = 'primary',
    isLoading = false,
    className = '',
    children,
    ...rest
}: ButtonProps): ReactNode {
    return (
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            className={clsx(
                BASE__CLASSES,
                BUTTON_VARIANT_CLASSES[variant],
                BUTTON_SIZE_CLASSES[size],
                className,
                isLoading && 'opacity-50 cursor-not-allowed'
            )}
            {...rest}
        >
            {children}
        </motion.button>
    )
}