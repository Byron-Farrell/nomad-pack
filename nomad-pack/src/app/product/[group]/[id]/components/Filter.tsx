'use client'

import DropDownButton from "@/components/ui/DropDownButton";
import {useState} from "react";
import DropDownContent from "@/components/ui/DropDownContent";
import Checkbox from "@/components/ui/Checkbox";
import type {Product} from "@prisma/client";
import Button from "@/components/ui/Button";


export interface FilterType {
    name: string,
    enabled: boolean,
    handleFilter: (product: Product) => boolean,
}

export type FilterGroup = {
    label: string,
    filters: FilterType[],
}

export interface FilterProps {
    onFilterSelected: (state: boolean, label: string) => void;
    filterGroups: FilterGroup[];
    onApply?: () => void;
    onReset?: () => void;
}


export default function Filter({
    onFilterSelected,
    filterGroups = [],
    onApply = () => undefined,
    onReset = () => undefined
}: FilterProps) {
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

    function handleOnReset() {
        setSelected('');
        setFadeOut('smooth');
        onReset();
    }

    function handleOnApply() {
        setSelected('');
        setFadeOut('smooth');
        onApply();
    }

    return (
        <div>
            <div className="flex gap-4">
                <div className="flex gap-4 grow">
                    {filterGroups.map((group: FilterGroup, groupKey) => (
                        <DropDownButton
                            size="lg"
                            key={groupKey}
                            isSelected={selected === group.label}
                            label={group.label}
                            onSelected={handleOnSelected}
                        />
                    ))}

                </div>
            </div>
            <div>
                {filterGroups.map((group: FilterGroup, groupKey) => (
                    <DropDownContent
                        key={groupKey}
                        isOpen={selected === group.label}
                        fadeOut={fadeOut}
                        className="flex flex-col gap-3 w-full"
                    >
                        <div className="flex flex-col gap-3">
                            {group.filters.map((filter, filterKey) => (
                                <Checkbox
                                    key={filterKey}
                                    isChecked={filter.enabled}
                                    onSelected={(state) => onFilterSelected(state, filter.name)}
                                    size="lg"
                                    label={filter.name}
                                />
                            ))}
                        </div>
                        <div className="flex gap-3 mb-3">
                            <Button
                                noDarkMode
                                className="min-w-24"
                                onClick={handleOnApply}
                            >Apply</Button>
                            <Button
                                variant="secondary"
                                className="min-w-24"
                                onClick={handleOnReset}
                            >Reset</Button>
                        </div>
                    </DropDownContent>
                ))}
            </div>
        </div>
    )
}