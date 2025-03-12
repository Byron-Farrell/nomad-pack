import React from 'react';
import clsx from "clsx";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    level: HeadingLevel;
    noMargin?: boolean;
    children?: React.ReactNode;
    className?: string;
}

const HeadingTagRecords: Record<HeadingLevel, HeadingTag> = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
};

const HEADING_CLASSES: Record<HeadingLevel, string> = {
    1: "text-6xl font-bold",
    2: "text-5xl font-bold",
    3: "text-3xl font-bold",
    4: "text-xl",
    5: "text-lg",
    6: "text-base opacity-90",
};

const SPACING_CLASSES: Record<HeadingLevel, string> = {
    1: "mb-12",
    2: "mb-10",
    3: "mb-8",
    4: "mb-6",
    5: "mb-4",
    6: "mb-2"
};


export default function Heading({
    level,
    children,
    className,
    noMargin = false,
    ...props
}: HeadingProps) {

    const Tag = HeadingTagRecords[level];

    return (
            <Tag
                role="heading"
                aria-level={level}
                className={clsx(
                    HEADING_CLASSES[level],
                    noMargin ? noMargin : SPACING_CLASSES[level],
                    className)}
                {...props}
            >
            {children}
        </Tag>
    );
}