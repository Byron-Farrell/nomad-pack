import React from "react";
import clsx from "clsx";

const BASE_CLASSES = 'pt-16';

export default function Page({
    children,
    className,
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={clsx(
            BASE_CLASSES,
            className
        )}>
            {children}
        </div>
    )
}