import {JSX, ReactNode} from "react";

export interface ListProps {
    children: ReactNode;
}

export default function List({
    children,
}: ListProps): JSX.Element {
    return (
        <ul className="list-none md:list-disc list-inside">
            {children}
        </ul>
    )
}