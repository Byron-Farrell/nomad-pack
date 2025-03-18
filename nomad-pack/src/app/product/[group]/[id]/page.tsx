import Page from "@/components/ui/Page";
import ProductList from "@/app/product/[group]/[id]/components/ProductList";

export default async function Category({ params }: { params: Promise<{ group: string, id: string }> }) {
    const { group, id } = await params;

    return (
        <Page className="!mb-96">
            <ProductList group={group} id={id}/>
        </Page>
)
}