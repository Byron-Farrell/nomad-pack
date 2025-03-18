'use client'


import ProductList from "@/app/product/[group]/[id]/components/ProductList";

export interface ProductPageProps {
    id: string;
    group: string;
}
export default function ProductPage({
    id = '',
    group = ''
}: ProductPageProps) {

    return (
        <div>
            <ProductList group={group} id={id}/>
        </div>
    )
}