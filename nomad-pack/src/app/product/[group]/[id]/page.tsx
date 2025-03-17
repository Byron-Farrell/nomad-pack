import type {Product} from "@prisma/client";
import clsx from "clsx";
import Page from "@/components/ui/Page";
import Container from "@/components/ui/base/Container";
import Heading from "@/components/ui/base/Heading";
import Section from "@/components/ui/base/Section";
import Card from "@/components/ui/Card";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Filter from "@/app/product/[group]/[id]/components/Filter";

export default async function Category({ params }: { params: Promise<{ group: string, id: string }> }) {
    const { group, id } = await params;
    const productData = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/${group}/${id}/products`);
    const products: Product[] = await productData.json();
    const categoryData = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/${group}/${id}`);
    const { name } = await categoryData.json();

    return (
        <Page className="!mb-96">
            <Container>
                <Section spacing="md" className="flex flex-col">
                    <Heading level={1} className="text-center">{name}</Heading>

                    <Section>
                        <Filter/>
                    </Section>
                    <Section>
                        <div className="flex gap-4">
                            {products.map(({id, name, imageUrl}) => (
                                <Card noPadding className="basis-1/5" key={id}>
                                    <Image src={imageUrl} alt={''} width={1000} height={1000}/>
                                    <Section className="p-2">
                                        <Heading foreground level={3} key={id} className={clsx()}>{name}</Heading>
                                        <Button className="w-full">Buy</Button>
                                    </Section>
                                </Card>
                            ))}
                        </div>
                    </Section>
                </Section>
            </Container>
        </Page>
    )
}