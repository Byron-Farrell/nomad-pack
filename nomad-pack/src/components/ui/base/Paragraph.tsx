import React from 'react';

export interface ParagraphProps extends React.HTMLProps<HTMLParagraphElement> {
    children: React.ReactNode;
}

export default function Paragraph({
    children,
    ...props
}: ParagraphProps) {
    return (
        <p {...props}>{ children }</p>
    )
}