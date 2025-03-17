'use client'

import DropDownButton from "@/components/ui/DropDownButton";
import {useState} from "react";
import DropDownContent from "@/components/ui/DropDownContent";
import GuideShowcase from "@/app/home/components/GuideShowcase";
import ProductShowcase from "@/app/home/components/ProductShowcase";
import List from "@/components/ui/base/List";
import ListItem from "@/components/ui/base/ListItem";

const buttons = [
    { label: "Sort By" },
    { label: "Price Range" },
]

export default function Filter() {
    const [selected, setSelected] = useState<string>('');
    const [fadeOut, setFadeOut] = useState<'smooth' | 'instant'>('smooth');

    function handleOnSelected(label: string) {
        if (selected === label) {
            setSelected('');
            setFadeOut('smooth');
        }
        else {
            setSelected(label);
            setFadeOut('instant');
        }
    }


    return (
        <div>
            <div className="flex gap-4">
                {buttons.map(({ label }, i) => (
                    <DropDownButton
                        size="lg"
                        isSelected={selected === label}
                        key={i} label={label}
                        onSelected={handleOnSelected}
                    />
                ))}
            </div>
            <div>
                {buttons.map(({ label }, i) => (
                    <DropDownContent
                        isOpen={selected === label}
                        key={i}
                        fadeOut={fadeOut}
                    >
                        <List>
                            <ListItem>Bandages</ListItem>
                            <ListItem>Bandages</ListItem>
                            <ListItem>Bandages</ListItem>
                            <ListItem>Bandages</ListItem>
                            <ListItem>Bandages</ListItem>
                            <ListItem>Bandages</ListItem>
                            <ListItem>Bandages</ListItem>
                        </List>
                    </DropDownContent>
                ))}
            </div>
        </div>
    )
}