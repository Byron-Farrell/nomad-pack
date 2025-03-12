import Container from "@/components/ui/base/Container";
import Heading from "@/components/ui/base/Heading";
import Hero from '@/app/home/components/Hero';
import Section from "@/components/ui/base/Section";
import ProductShowcase from "@/app/home/components/ProductShowcase";


export default function Home() {
    return (
        <div>
            <Hero/>
            <Container className="">

                <Section spacing="lg" className="mb-40">
                    <Heading level={2}>Explore</Heading>
                    <Section>
                        <ProductShowcase/>
                    </Section>
                </Section>


            </Container>
        </div>
    );
}
