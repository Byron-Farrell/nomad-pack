'use client'

import Card from "@/components/ui/Card";
import Image from "next/image";
import Section from "@/components/ui/base/Section";
import Heading from "@/components/ui/base/Heading";
import clsx from "clsx";
import Button from "@/components/ui/Button";
import type {Product, ProductSubCategory} from "@prisma/client";
import {useEffect, useState} from "react";
import Container from "@/components/ui/base/Container";
import Filter from "@/app/product/[group]/[id]/components/Filter";
import Sort from "@/app/product/[group]/[id]/components/Sort";
import type { FilterGroup } from "@/app/product/[group]/[id]/components/Filter";
import Pill from "@/components/ui/Pill";

export type SortBy = 'latest' | 'lowest' | 'highest'

export interface ProductListProps {
    group: string;
    id: string;
}



const INITIAL_PRICE_FILTERS: FilterGroup = {
    label: 'Price',
    filters: [
        {
            name: 'Less than \$10',
            enabled: false,
            handleFilter: (product: Product) => product.price <= 10,
        },
        {
            name: '\$10 - \$25',
            enabled: false,
            handleFilter: (product: Product) => product.price >= 10 && product.price <= 25,
        },
        {
            name: '\$25+',
            enabled: false,
            handleFilter: (product: Product) => product.price >= 25,
        }
    ]
}

export default function ProductList({
    group,
    id,
}: ProductListProps) {
    const [products, setProducts] = useState<Product[]>([])
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    const [title, setTitle] = useState<string>("")
    const [sortBy, setSortBy] = useState<SortBy>("latest");
    const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([]);

    useEffect(() => {
        fetch(`/api/${group}/${id}/products`)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            })
            .catch(error => console.error(error));

        fetch(`/api/${group}/${id}`)
            .then(response => response.json())
            .then(data => setTitle(data.name))
            .catch(error => console.error(error));

        fetch(`/api/${group}/${id}/product-sub-categories`)
            .then(response => response.json())
            .then((data: ProductSubCategory[]) => {

                const newFilterGroups = [INITIAL_PRICE_FILTERS]
                const typeFilters: FilterGroup = {
                    label: 'Type',
                    filters: data.map(productSubCategory => {
                        return {
                            name: productSubCategory.name,
                            enabled: false,
                            handleFilter: (product: Product) => product.name.toLowerCase().includes(productSubCategory.name.toLowerCase())
                        }
                    })
                }
                newFilterGroups.push(typeFilters);
                setFilterGroups(newFilterGroups);
            })
            .catch(error => console.error(error));
    }, [group, id]);


    function sort(a: Product, b: Product) {
        if (sortBy === "lowest") {
            return a.price - b.price
        }
        else if (sortBy === "highest") {
            return b.price - a.price
        }
        else {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
    }

    function filterProduct(product: Product) {
        let returnProduct = false;

        for (const group of filterGroups) {
            returnProduct = false;
            let disabledFilters = 0;
            group.filters.forEach(filter => {
                if (filter.enabled && filter.handleFilter(product)) {
                    returnProduct = true;
                }
                if (!filter.enabled) {
                    disabledFilters += 1;
                }
            })

            if (!returnProduct && disabledFilters != group.filters.length) {
                break
            }
            else {
                returnProduct = true;
            }
        }

        return returnProduct;
    }

    function getProducts() {
        return filteredProducts
            .sort((a, b) => sort(a, b))
    }

    function handleFilterSelected(state: boolean, name: string) {
        setFilterGroups(prevState => {
            const filterGroups = [...prevState]

            return filterGroups.map(group => {
                const {label, filters} = {...group};

                const updatedFilters = filters.map(filter => {
                    const filterCopy = {...filter}
                    if (filterCopy.name === name) {
                        filterCopy.enabled = state
                    }
                    return filterCopy;
                })

                return {
                    label: label,
                    filters: updatedFilters,
                }
            })
        })
    }

    function handleReset() {
        setFilterGroups(prevState => {
            const filterGroups = [...prevState]

            return filterGroups.map(group => {
                const {label, filters} = {...group};

                const updatedFilters = filters.map(filter => {
                    const filterCopy = {...filter}
                    filterCopy.enabled = false
                    return filterCopy;
                })

                return {
                    label: label,
                    filters: updatedFilters,
                }
            })
        })
        setFilteredProducts(products)
    }

    function handleApplyFilters() {
        setFilteredProducts(products
            .filter(product => filterProduct(product))
        )
    }

    return (
        <div>
            <div className="ring-[1px] shadow-sm ring-slate-950/10">
                <Container>
                    <Section className="flex">
                        <div className="grow">
                            <Filter onFilterSelected={handleFilterSelected}
                                    filterGroups={filterGroups}
                                    onReset={handleReset}
                                    onApply={handleApplyFilters}
                            />
                        </div>
                        <div>
                            <Sort onSortChange={(sort) => setSortBy(sort as SortBy)}/>
                        </div>
                    </Section>
                </Container>
            </div>
            <Container>
                <Section spacing="md" className="flex flex-col">
                    <div className="flex gap-2">
                        {filterGroups.map((group, groupKey) => (
                            <div key={groupKey} className="flex gap-2 flex-none">
                                {group.filters.filter(filter => filter.enabled).map((filter, filterKey) => (
                                    <Pill key={filterKey}>
                                        {filter.name}
                                    </Pill>
                                ))}
                            </div>
                        ))}
                    </div>
                    <Heading level={1} className="text-center">{title}</Heading>
                    <Section>
                        <div className="grid grid-cols-5 gap-4">
                            {getProducts().map(({id, name, imageUrl, price}) => (
                                <Card noPadding className="" key={id}>
                                    <Image src={imageUrl} alt={''} width={1000} height={1000}/>
                                    <Section className="p-2 flex flex-col min-h-44">
                                        <div>
                                            <Heading foreground
                                                     level={4}
                                                     className={clsx()}>{name}
                                            </Heading>
                                        </div>
                                        <div className="grow">
                                            <Heading foreground
                                                     level={6}
                                                     className={clsx()}>{price}
                                            </Heading>
                                        </div>
                                        <div>
                                            <Button className="w-full">Add to Cart</Button>
                                        </div>
                                    </Section>
                                </Card>
                            ))}
                        </div>
                    </Section>
                </Section>
            </Container>
        </div>
    )
}