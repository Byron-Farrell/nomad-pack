"use client"

import {ComponentProps, JSX, ReactNode} from "react";
import clsx from 'clsx';
import { motion } from 'framer-motion';

type TextAlign = "left" | "center" | "right";
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outlined' | 'none' ;
type AnimationType = 'scale' | 'none' | 'opacity';

export interface ButtonProps extends ComponentProps<typeof motion.button> {
    size?: ButtonSize;
    textAlign?: TextAlign;
    variant?: ButtonVariant;
    isLoading?: boolean;
    children?: ReactNode;
    noDarkMode?: boolean;
    animationType?: AnimationType;
}

const BASE_CLASSES = 'rounded cursor-pointer ';

const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-md',
    lg: 'px-5 py-3 text-lg',
}

const BUTTON_TEXT_ALIGN_CLASSES: Record<TextAlign, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
}
const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
    primary: 'bg-neutral-900 text-white',
    secondary: 'bg-neutral-200 text-black',
    accent: 'bg-linear-to-r from-red-500 to-amber-500  text-white',
    outlined: 'bg-transparent border border-neutral-900 ',
    none: 'bg-transparent',
}

const BUTTON_VARIANT_DARK_MODE_CLASSES: Record<ButtonVariant, string> = {
    primary: 'dark:bg-neutral-100 dark:text-black',
    secondary: '',
    accent: '',
    outlined: '',
    none: '',
}

const ANIMATION_TYPES: Record<AnimationType, any> = {
    scale: {
        whileHover: {scale: 1.1},
        whileTap: {scale: 0.95}
    },
    none: {
        whileHover: {},
        whileTap: {}
    },
    opacity: {
        whileHover: {opacity: 0.8},
        whileTap: {scale: 0.95}
    },
}

export default function Button({
    size = 'md',
    variant = 'primary',
    isLoading = false,
    className = '',
    children,
    noDarkMode = false,
    animationType = 'opacity',
    textAlign = 'center',
    ...rest
}: ButtonProps): JSX.Element {
    return (
        <motion.button
            whileHover={ANIMATION_TYPES[animationType].whileHover}
            whileTap={ANIMATION_TYPES[animationType].whileTap}
            disabled={isLoading}
            aria-disabled={isLoading}
            className={clsx(
                BASE_CLASSES,
                BUTTON_VARIANT_CLASSES[variant],
                !noDarkMode && BUTTON_VARIANT_DARK_MODE_CLASSES[variant],
                BUTTON_SIZE_CLASSES[size],
                BUTTON_TEXT_ALIGN_CLASSES[textAlign],
                className,
                isLoading && 'opacity-50 cursor-not-allowed'
            )}
            {...rest}
        >
            {children}
        </motion.button>
    )
}