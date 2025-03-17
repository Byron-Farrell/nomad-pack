"use client"

import clsx from "clsx";
import Section from "@/components/ui/base/Section";
import Button from "@/components/ui/Button";
import {useEffect, useState} from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import type { ProductCategory, Product } from "@prisma/client";
import Heading from "@/components/ui/base/Heading";
import Paragraph from "@/components/ui/base/Paragraph";
import Link from "next/link";

export interface ShopNavProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export default function ShopNav({
    isOpen,
    onClose,
    className,
}: ShopNavProps) {
    const [marketCategories, setMarketCategories] = useState<ProductCategory[]>([]);
    const [productCategories, setProductCategories] = useState<Product[]>([]);

    const [selected, setSelected] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/market-category')
            .then(response => response.json())
            .then(data => setMarketCategories(data))
            .catch(error => console.error(error));
    },[])

    useEffect(() => {
        if (!isOpen) {
            setSelected(null);
        }
    }, [isOpen]);

    useEffect(() => {
        if (selected) {
            fetch(`/api/market-category/${selected}/product-categories`)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        throw data.error;
                    }
                    else {
                        setProductCategories(data)
                        console.log(data)
                    }
                })
                .catch(error => console.error(error));
        }
    }, [selected]);

    function handleOnClose() {
        onClose();
    }

    return (
        <>
            <div
                className={clsx(
                    'h-screen w-full',
                    'relative top-0 left-0',
                    'flex flex-col',
                    'transition-transform -translate-x-full duration-500',
                    className,
                    isOpen && 'translate-x-0'
                )}
            >

                <div className="flex h-full">

                    <div
                        className={clsx(
                            'z-20 bg-foreground pl-14 min-w-72'
                        )}
                    >
                        <Section className="min-h-16 flex items-center">
                            <Heading foreground noMargin className="grow" level={2}>Shop</Heading>
                            {isOpen && !selected ?
                                <Button className="!text-end !p-0 mr-4 dark:text-contrast-foreground" animationType="scale" onClick={handleOnClose}
                                        variant="none"><XMarkIcon className="size-8"/></Button> :
                                null
                            }
                        </Section>

                        <Section spacing="md" className="flex gap-6 flex-col">
                            {marketCategories.map(({id, name}) => (
                                <Heading
                                    foreground
                                    noMargin
                                    level={3}
                                    className={clsx(
                                        'w-fit',
                                        selected == id && 'font-bold'
                                    )}
                                    key={id}
                                    onClick={() => setSelected(id)}
                                >{name}</Heading>
                            ))}
                        </Section>

                    </div>

                    <div
                        className={clsx(
                            '-z-10',
                            'transition-[z-index] delay-500',
                            (isOpen && selected) && 'z-10',
                        )}
                    >
                        <div
                            className={clsx(
                                'h-full bg-foreground min-w-44 ',
                                'transition-transform -translate-x-full duration-500 visible-none',
                                (isOpen && selected) && 'translate-x-0 visible',
                            )}>
                            <Section  className="min-h-16 flex flex-row-reverse items-center">
                                {isOpen && selected ?
                                    <Button className="!text-end !p-0 mr-4 dark:text-contrast-foreground" animationType="scale" onClick={handleOnClose}
                                            variant="none"><XMarkIcon className="size-8"/></Button> :
                                    null
                                }
                            </Section>

                            <Section spacing="md" className="flex gap-4 flex-col">
                                <Heading foreground noMargin level={4}><Link href={`/product/market-category/${selected}`} onClick={handleOnClose}>All</Link></Heading>
                                {productCategories.length !== 0 ?
                                    productCategories.map(({id, name}) => (
                                        <Heading foreground noMargin level={5} key={id}><Link href={`/product/product-category/${id}`} onClick={handleOnClose}>{name}</Link> </Heading>
                                )) : <Paragraph>No productCategories Yet!</Paragraph>}
                            </Section>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}