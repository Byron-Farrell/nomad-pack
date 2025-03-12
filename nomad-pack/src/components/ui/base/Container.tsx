import React from 'react';
import clsx  from "clsx";


export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

const BASE_CSS = 'container md:px-0 mx-auto px-4';

export default function Container({
    children,
    className = '',
    ...rest
}: ContainerProps) {

    return (
        <div {...rest} className={clsx(BASE_CSS, className)}>
            { children }
        </div>
    )
}