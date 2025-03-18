'use client'

import DropDownButton from "@/components/ui/DropDownButton";
import {useState} from "react";
import DropDownContent from "@/components/ui/DropDownContent";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import clsx from "clsx";

const sortBy = [
    { label: "latest" },
    { label: "lowest" },
    { label: "highest" }
]

export interface SortProps {
    onSortChange: (sort: string) => void
}

export default function Sort({
    onSortChange,
}: SortProps) {
    const [selected, setSelected] = useState<string>('');
    const [selectedSort, setSelectedSort] = useState<string>('latest');

    function handleOnSelected(label: string) {
        if (selected === label) {
            setSelected('');
        }
        else {
            setSelected(label);
        }
    }

    function handleOnSortChange(sort: string) {
        setSelectedSort(sort);
        onSortChange(sort);
    }

    return (
        <div className="flex gap-4">
            <div>
                <DropDownButton
                    size="lg"
                    isSelected={selected === 'Sort By'}
                    label={'Sort By'}
                    onSelected={handleOnSelected}
                />
                <DropDownContent
                    isOpen={selected === 'Sort By'}
                    className="absolute flex flex-col gap-4"
                >
                    <div className="p-2 border border-neutral-200 rounded flex flex-col bg-background">
                        {sortBy.map(({label}, index) => (
                            <Button
                                className={clsx(
                                    label === selectedSort && 'font-bold',
                                )}
                                onClick={() => handleOnSortChange(label)}
                                key={index}
                                size="md"
                                animationType="opacity"
                                variant="none"
                            > {label} </Button>
                        ))}
                    </div>
                </DropDownContent>
            </div>
        </div>

    )
}