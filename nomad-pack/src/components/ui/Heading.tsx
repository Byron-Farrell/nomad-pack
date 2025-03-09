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
    1: "text-4xl font-bold",
    2: "text-3xl font-bold",
    3: "text-2xl font-bold",
    4: "text-xl font-bold",
    5: "text-lg font-bold",
    6: "text-base font-bold"
};

const SPACING_CLASSES: Record<HeadingLevel, string> = {
    1: "mb-6",
    2: "mb-5",
    3: "mb-4",
    4: "mb-3",
    5: "mb-2",
    6: "mb-1"
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