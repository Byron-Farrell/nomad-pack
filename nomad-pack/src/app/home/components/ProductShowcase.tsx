"use client"

import Tabs from "@/components/ui/tabs/Tabs";
import TabContent from "@/components/ui/tabs/TabContent";

import {useEffect, useRef, useState} from "react";
import Section from "@/components/ui/base/Section";
import CarouselContent from "@/components/ui/carousel/CarouselContent";
import CarouselNavigation from "@/components/ui/carousel/CarouselNavigation";
import Image from "next/image";
import Card from "@/components/ui/Card";

const navigationComponents = [
    <Card shadow={false} key="12" className="!p-0"><Image className="size-72" src="/navigation/compass1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="12" className="!p-0"><Image className="size-72" src="/navigation/compass2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="1" className="!p-0"><Image className="size-72" src="/navigation/band1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="2" className="!p-0"><Image className="size-72" src="/navigation/band2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="3" className="!p-0"><Image className="size-72" src="/navigation/band3.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="4" className="!p-0"><Image className="size-72" src="/navigation/band4.jpeg" alt={"knife"} height="896" width="896"/></Card>,
]

const toolComponents = [
    <Card shadow={false} key="1" className="!p-0"><Image className="size-72" src="/tools/knife1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="2" className="!p-0"><Image className="size-72" src="/tools/knife2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="3" className="!p-0"><Image className="size-72" src="/tools/knife3.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="4" className="!p-0"><Image className="size-72" src="/tools/knife4.jpeg" alt={"knife"} height="896" width="896"/></Card>,
]

const firstAidComponents = [
    <Card shadow={false} key="2" className="!p-0"><Image className="size-72" src="/first-aid/tourniquet1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="3" className="!p-0"><Image className="size-72" src="/first-aid/tourniquet2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="4" className="!p-0"><Image className="size-72" src="/first-aid/tourniquet3.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="5" className="!p-0"><Image className="size-72" src="/first-aid/tourniquet4.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="11" className="!p-0"><Image className="size-72" src="/first-aid/bandage1.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="21" className="!p-0"><Image className="size-72" src="/first-aid/bandage2.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="13" className="!p-0"><Image className="size-72" src="/first-aid/bandage3.jpeg" alt={"knife"} height="896" width="896"/></Card>,
    <Card shadow={false} key="41" className="!p-0"><Image className="size-72" src="/first-aid/bandage4.jpeg" alt={"knife"} height="896" width="896"/></Card>,
]


const tabs: object[] = [
    {
        title: 'FIRST AID',
        components: firstAidComponents
    },
    {
        title: 'NAVIGATION',
        components: navigationComponents
    },
    {
        title: 'TOOLS',
        components: toolComponents
    },
    {
        title: 'DIGITAL NOMAD',
        components: firstAidComponents
    }
]

export default function ProductShowcase() {
    const [selectedTab, setSelectedTab] = useState<number>(0);
    const refScroll = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [index, setIndex] = useState(0);

    const TabContentComponents = [
        firstAidComponents,
        navigationComponents,
        toolComponents,
        firstAidComponents
    ]

    const TabNames = [
        'FIRST AID',
        'NAVIGATION',
        'TOOLS',
        'DIGITAL NOMAD'
    ]
    const carouseContent1 = <CarouselContent ref={refScroll} components={firstAidComponents}/>
    const carouseContent2 = <CarouselContent ref={refScroll} components={navigationComponents}/>
    const carouseContent3 = <CarouselContent ref={refScroll} components={toolComponents}/>
    const carouseContent4 = <CarouselContent ref={refScroll} components={firstAidComponents}/>

    const content = [
        carouseContent1,
        carouseContent2,
        carouseContent3,
        carouseContent4,
    ]


    useEffect(() => {
        if (refScroll.current) {
            refScroll.current.scrollTo({left: scrollPosition, behavior: 'smooth'});
        }
    }, [scrollPosition])

    function next() {

        if (index < TabContentComponents[selectedTab].length - 1) {
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
                <Tabs className="grow" tabs={TabNames} onSelected={onSelected} selectedIndex={selectedTab} />
                <CarouselNavigation next={next} previous={previous}/>
            </div>

            <Section spacing="lg">
                <TabContent components={content} selectedIndex={selectedTab} />
            </Section>
        </div>
    )
}