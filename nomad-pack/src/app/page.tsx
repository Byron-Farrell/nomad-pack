import Container from "@/components/ui/base/Container";
import Heading from "@/components/ui/base/Heading";
import Hero from '@/app/home/components/Hero';
import Section from "@/components/ui/base/Section";
import ProductShowcase from "@/app/home/components/ProductShowcase";
import GuideShowcase from "@/app/home/components/GuideShowcase";

export default function Home() {
    return (
        <div>
            <Hero/>
            <Container className="">

                <Section spacing="lg">
                    <Heading level={2}>Best Sellers</Heading>
                    <Section>
                        <ProductShowcase/>
                    </Section>
                </Section>

                <Section spacing="lg">
                    <GuideShowcase/>
                </Section>

            </Container>
        </div>
    );
}
