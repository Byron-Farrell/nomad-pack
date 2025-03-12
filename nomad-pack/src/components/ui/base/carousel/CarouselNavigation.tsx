"use client"

import Button from "@/components/ui/base/Button";
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

export interface CarouselNavigationProps {
    className?: string | undefined;
    next: () => void;
    previous: () => void;
}

export default function Carousel({
    className,
    next,
    previous,
}: CarouselNavigationProps) {
    return (
        <div className={className}>
            <div className="flex gap-5 items-center">
                <Button onClick={previous} variant={"outlined"} className="rounded-full size-12" ><ArrowLeftIcon/></Button>
                <Button onClick={next} variant={"outlined"} className="rounded-full size-12"><ArrowRightIcon/></Button>
            </div>
        </div>
    )
}