import React from 'react';
import Card, { CardProps } from '@/components/ui/Card';
import Heading from "@/components/ui/base/Heading";
import clsx from "clsx";
import Section from "@/components/ui/base/Section";

type CategoryCardColors = 'red' | 'dark' | 'green' | 'default';
type RotationDirection = 'right' | 'left';

export interface CategoryCardProps extends CardProps {
    color?: CategoryCardColors;
    rotate?: RotationDirection;
    heading: string;
    subHeading: string;
}

const COLOR_CLASSES: Record<CategoryCardColors, string> = {
    'red': 'text-white bg-gradient-to-r from-red-700 to-red-500',
    'dark': 'text-white bg-gradient-to-r from-neutral-900 to-neutral-700',
    'green': 'text-white bg-gradient-to-r from-emerald-700 to-emerald-500',
    'default': 'text-inherit bg-inherit'
}

const ROTATION_DIRECTION_CLASSES: Record<RotationDirection, string> = {
    'right': 'hover:rotate-1',
    'left': 'hover:-rotate-1',
}

const BASE_CLASSES = 'p-10 duration-200 hover:scale-105 hover:shadow-lg transition-transform transition-all hover:brightness-110';

export default function CategoryCard({
    color = 'default',
    rotate = 'right',
    children,
    heading,
    subHeading,
    className
}: CategoryCardProps) {
    return (
        <Card
            className={clsx(
                BASE_CLASSES,
                COLOR_CLASSES[color],
                ROTATION_DIRECTION_CLASSES[rotate],
                className
            )}>
            <Heading level={3}>{heading}</Heading>
            <Heading level={4}>{subHeading}</Heading>
            <Section>{children}</Section>
        </Card>
    )
}

