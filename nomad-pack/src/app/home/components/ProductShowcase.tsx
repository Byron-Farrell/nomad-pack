"use client"

import Tabs from "@/components/ui/base/tabs/Tabs";
import TabContent from "@/components/ui/base/tabs/TabContent";

import {useEffect, useRef, useState} from "react";
import Section from "@/components/ui/base/Section";
import CarouselContent from "@/components/ui/base/carousel/CarouselContent";
import CarouselNavigation from "@/components/ui/base/carousel/CarouselNavigation";
import Image from "next/image";
import Card from "@/components/ui/base/Card";

const components1 = [
    <Card shadow={false} key="1" className="!p-0"><Image className="size-72" src="/navigation/band1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="2" className="!p-0"><Image className="size-72" src="/navigation/band2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="3" className="!p-0"><Image className="size-72" src="/navigation/band3.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="4" className="!p-0"><Image className="size-72" src="/navigation/band4.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="5" className="!p-0"><Image className="size-72" src="/navigation/band1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="11" className="!p-0"><Image className="size-72" src="/navigation/band2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="21" className="!p-0"><Image className="size-72" src="/navigation/band3.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="13" className="!p-0"><Image className="size-72" src="/navigation/band4.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="41" className="!p-0"><Image className="size-72" src="/navigation/band1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="51" className="!p-0"><Image className="size-72" src="/navigation/band2.jpeg" alt={"knife"} height="896" width="896"/></Card>,

]

const components = [
    <Card shadow={false} key="1" className="!p-0  flex justify-center items-center"><Image className="size-72" src="/tools/knife1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="2" className="!p-0"><Image className="size-72" src="/tools/knife2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="3" className="!p-0"><Image className="size-72" src="/tools/knife3.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="4" className="!p-0"><Image className="size-72" src="/tools/knife4.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="5" className="!p-0"><Image className="size-72" src="/tools/knife1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="11" className="!p-0"><Image className="size-72" src="/tools/knife2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="21" className="!p-0"><Image className="size-72" src="/tools/knife3.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="13" className="!p-0"><Image className="size-72" src="/tools/knife4.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="41" className="!p-0"><Image className="size-72" src="/tools/knife1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="51" className="!p-0"><Image className="size-72" src="/tools/knife2.jpeg" alt={"knife"} height="896" width="896"/></Card>,

]


const tabsTwo: string[] = [
    'NAVIGATION',
    'TOOLS',
]

export default function ProductShowcase() {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const refScroll = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [index, setIndex] = useState(0);

    const card1 = <CarouselContent components={components1} ref={refScroll}/>
    const card2 = <CarouselContent components={components} ref={refScroll}/>

    const TabContentComponents = [
        card1,
        card2,
    ]

    useEffect(() => {
        if (refScroll.current) {
            refScroll.current.scrollTo({left: scrollPosition, behavior: 'smooth'});
        }
    }, [scrollPosition])

    function next() {

        if (index < components.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
            setScrollPosition(prev => prev + 400);
        }
    }

    function previous() {
        if (index != 0) {
            setIndex(prevIndex => prevIndex - 1);
            setScrollPosition(prev => prev - 400);
        }
    }

    function onSelected(index: number) {
        setSelectedTab(index);
        if (refScroll.current) {
            setIndex(0);
            setScrollPosition(0);
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center">
                <Tabs className="grow" tabs={tabsTwo} onSelected={onSelected} selectedIndex={selectedTab} />
                <CarouselNavigation next={next} previous={previous}/>
            </div>

            <Section spacing="lg">
                <TabContent components={TabContentComponents} selectedIndex={selectedTab} />
            </Section>
        </div>
    )
}