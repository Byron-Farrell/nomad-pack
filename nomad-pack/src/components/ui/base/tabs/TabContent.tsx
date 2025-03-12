"use client"

import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';


export interface TabContentProps {
    components: React.ReactNode[];
    selectedIndex: number;
    className?: string | undefined;
}

export default function TabContent({
    components,
    selectedIndex,
    className
}: TabContentProps) {
    return (
        <div className={className} role="tablist">
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{ ease: "easeIn", duration: 0.2 }}
                >
                    {components[selectedIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}