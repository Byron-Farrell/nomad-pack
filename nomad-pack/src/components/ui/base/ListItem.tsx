import {JSX, ReactNode} from "react";

export interface ListItemProps {
    children: ReactNode;
}

export default function ListItem({
    children,
}: ListItemProps): JSX.Element {
    return (
        <li>
            {children}
        </li>
    )
}