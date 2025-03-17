'use client'

import type { ButtonProps } from "@/components/ui/Button";
import Button from "@/components/ui/Button";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

export interface DropDownButtonProps extends ButtonProps {
    label: string;
    isSelected?: boolean;
    onSelected: (label: string) => void;
    noPadding?: boolean;
}

export default function DropDownButton({
    label,
    onSelected,
    isSelected = false,
    variant = 'none',
    animationType = 'none',
    className,
    noPadding = true,
    textAlign = 'left',
    ...props
}: DropDownButtonProps) {
    return (
        <Button
            variant={variant}
            animationType={animationType}
            textAlign={textAlign}
            onClick={() => onSelected(label)}
            className={clsx(
                noPadding && "!px-0",
                className
            )}
            { ...props }
        >
            <div className={clsx(
                "flex gap-2",
                isSelected && "font-medium",
            )}>
                <div className="grow">{ label }</div>
                <div className="flex items-center">
                    <ChevronUpIcon className={clsx(
                        "size-4",
                        "transition-transform duration-300",
                        isSelected && "rotate-180"
                    )}/>
                </div>
            </div>

        </Button>
    )
}