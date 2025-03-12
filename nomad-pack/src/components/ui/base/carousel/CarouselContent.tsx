import type {ReactNode, RefObject} from 'react';

export interface CarouselProps {
    components: ReactNode[];
    className?: string | undefined;
    ref?: RefObject<HTMLDivElement | null>
}

export default function Carousel({
    components,
    ref
}: CarouselProps) {
    return (
        <div ref={ref} className="overflow-x-hidden md:touch-none touch-auto" >
            <div className="flex gap-10">
                {components.map((item, i) => (
                    <div className="shrink-0" key={i}>{item}</div>
                ))}
            </div>
        </div>
    )
}