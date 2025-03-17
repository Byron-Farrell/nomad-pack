"use client"

import { ReactNode, useEffect, useRef, useState } from 'react';
import Section from "@/components/ui/base/Section";
import CarouselNavigation from '@/components/ui/carousel/CarouselNavigation'
import CarouselContent from '@/components/ui/carousel/CarouselContent'

export interface CarouselProps {
    components: ReactNode[];
    scrollDistance?: number;
    className?: string | undefined;
}

export default function Carousel({
     components,
     className,
     scrollDistance = 400,
 }: CarouselProps) {
    const refScroll = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (refScroll.current) {
            refScroll.current.scrollTo({left: scrollPosition, behavior: "smooth"});
        }
    }, [scrollPosition])

    function next() {

        if (index < components.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
            setScrollPosition(prev => prev + scrollDistance);
        }
    }

    function previous() {
        if (index != 0) {
            setIndex(prevIndex => prevIndex - 1);
            setScrollPosition(prev => prev - scrollDistance);
        }
    }

    return (
        <div className={className}>
            <CarouselNavigation next={next} previous={previous}/>
            <Section spacing="md" className="relative w-full overflow-x-hidden" >
                <CarouselContent components={components} ref={refScroll}/>
            </Section>
        </div>
    )
}