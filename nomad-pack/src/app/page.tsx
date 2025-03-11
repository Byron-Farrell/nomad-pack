import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

import Image from "next/image";

import Hero from '@/app/home/components/Hero';
import Section from "@/components/ui/Section";
import CategoryCard from "@/app/home/components/CategoryCard";
import Paragraph from "@/components/ui/Paragraph";

export default function Home() {
    return (
        <div>
            <Hero/>
            <Container className="">
                <Section spacing="lg">
                    <Heading level={2}>Best Sellers</Heading>
                    <div className="flex gap-20">
                        <CategoryCard
                            className="basis-1/3"
                            color="red"
                            heading="First Aid"
                            subHeading="Stay Safe. Stay Prepared"
                        >
                            <Paragraph>From minor cuts to major emergencies, your
                                survival kit starts with first aid essentials.</Paragraph>
                        </CategoryCard>

                        <CategoryCard
                            className="basis-1/3"
                            color="dark"
                            heading="Utility"
                            subHeading="Tools for Every Challenge."
                            rotate="left"
                        >
                            <Paragraph>nives, multitools, and torches—gear up with the essentials you need in the wild.</Paragraph>
                        </CategoryCard>

                        <CategoryCard
                            className="basis-1/3"
                            color="green"
                            heading="Navigation"
                            subHeading="Never Lose Your Way."
                        >
                            <Paragraph>Compasses, GPS devices, and emergency radios to keep you on track wherever adventure takes you.</Paragraph>
                        </CategoryCard>
                    </div>
                </Section>


                <Section spacing="lg">
                    <Heading level={2}>Premade Packs</Heading>

                    <div className="flex flex-col gap-6">
                        <div className="flex gap-6 grow">
                            <Card className="!bg-gradient-to-r !from-stone-200 !to-stone-100 flex items-center justify-center flex-col grow ">
                                <Heading level={3}>General First Aid</Heading>
                                <Image className="size-52" src="/kit-2.png" alt="kit" width="896" height="896"/>
                            </Card>
                            <Card className="!bg-gradient-to-r !from-stone-200 !to-stone-100 flex items-center justify-center flex-col grow">
                                <Heading level={3}>General First Aid</Heading>
                                <Image className="size-52" src="/kit-2.png" alt="kit" width="896" height="896"/>
                            </Card>
                            <Card className="!bg-gradient-to-r !from-stone-200 !to-stone-100 flex items-center justify-center flex-col grow">
                                <Heading level={3}>General First Aid</Heading>
                                <Image className="size-52" src="/kit-2.png" alt="kit" width="896" height="896"/>
                            </Card>
                            <Card className="!bg-gradient-to-r !from-stone-200 !to-stone-100 flex items-center justify-center flex-col grow">
                                <Heading level={3}>General First Aid</Heading>
                                <Image className="size-52" src="/kit-2.png" alt="kit" width="896" height="896"/>
                            </Card>
                        </div>
                    </div>
                </Section>
            </Container>
        </div>
    );
}
