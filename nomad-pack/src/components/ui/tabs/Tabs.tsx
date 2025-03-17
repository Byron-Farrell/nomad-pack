"use client"

import React from 'react';
import Button from "@/components/ui/Button";

export interface TabProps {
    tabs: string[];
    className?: string | undefined;
    onSelected: (selected: number) => void;
    selectedIndex?: number;
}

export default function Tabs({
    tabs,
    className,
    onSelected = (selected: number) => selected,
    selectedIndex = 0,
}: TabProps) {
    return (
        <div className={className}>
            <div className="flex gap-5">
                {tabs.map((tab, index) => (
                    <Button
                        noDarkMode
                        role="tab"
                        key={tab}
                        animationType="none"
                        variant={selectedIndex === index ? 'primary' : 'secondary'}
                        onClick={() => onSelected(index)}
                        aria-selected={selectedIndex === index}
                    >{tab}</Button>
                ))}
            </div>
        </div>
    )
}