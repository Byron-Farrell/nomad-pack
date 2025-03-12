"use client"

import React from 'react';
import { useState } from "react";
import Button from "@/components/ui/base/Button";
import Section from "@/components/ui/base/Section";
import {AnimatePresence, motion} from 'framer-motion';

export type Tab = {
    name: string;
    content: React.ReactNode;
}

export interface TabListProps {
    tabs: Tab[];
    className?: string | undefined;
}

export default function TabList({
    tabs,
    className
}: TabListProps) {
    const [selected, setSelected] = useState<number>(0);
    return (
        <div className={className} role="tablist">
            <div className="flex gap-5">
                {tabs.map(({name}, index) => (
                    <Button
                        role="tab"
                        key={name}
                        variant={selected === index ? 'primary' : 'secondary'}
                        onClick={() => setSelected(index)}
                        aria-selected={selected === index}
                    >{name}</Button>
                ))}
            </div>
            <Section spacing="lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selected}
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        exit={{ opacity: 0}}
                        transition={{ ease: "easeIn", duration: 0.2 }}
                    >
                        {tabs[selected].content}
                    </motion.div>
                </AnimatePresence>

            </Section>
        </div>
    )
}