'use client'


import {HTMLAttributes, JSX, useEffect, useState} from 'react';
import clsx from "clsx";

type CheckboxSizes = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    size?: CheckboxSizes;
    onSelected?: (state: boolean) => void;
    isChecked?: boolean;
}

const BASE_CLASSES = "flex gap-2 items-center p-1 ";

const CHECKBOX_SIZE_CLASSES: Record<CheckboxSizes, string> = {
    sm: 'scale-100',
    md: 'scale-125',
    lg: 'scale-150',
}


export default function Checkbox({
    className,
    label = '',
    size = 'md',
    onSelected = () => '',
    isChecked = false,
    ...props
}: CheckboxProps): JSX.Element {
    const [checked, setChecked] = useState<boolean>(isChecked);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);
    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        onSelected(!checked);
        setChecked(prev => !prev)

    }
    return (
        <label className={clsx(
            BASE_CLASSES,
            className
        )}>
            <input
                className={clsx(
                    CHECKBOX_SIZE_CLASSES[size]
                )}
                type="checkbox"
                checked={checked}
                onChange={handleOnChange}
                {...props}
            />
            <span>{label}</span>
        </label>

    )
}


