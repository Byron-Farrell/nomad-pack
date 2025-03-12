import Heading from "@/components/ui/base/Heading";
import Button from "@/components/ui/base/Button";
import Image from "next/image";
import Section from "@/components/ui/base/Section";
import Paragraph from "@/components/ui/base/Paragraph";

export default function Hero() {
    return (
        <Section className="flex h-screen items-center text-white justify-center bg-gradient-to-r from-stone-900 to-gray-700">
            <Section className="grow md:basis-3/5 lg:basis-1/2 gap-10 py-20 px-10 md:px-10">
                <Heading level={1}>Your Pack. Your Rules.</Heading>
                <Paragraph className="mb-10">Craft your ultimate survival pack with the gear you need for any adventure.
                    Whether you’re exploring the wilderness or preparing for the unexpected, Nomad Pack lets you
                    customize every essential to fit your journey. No excess. No compromises. Just the right tools
                    for you.</Paragraph>
                <Button variant="accent" className="w-1/2" size="lg">Build A Kit</Button>
            </Section>
            <Section className="hidden md:block basis-0 md:basis-2/5 lg:basis-1/2">
                <Image src="/hero.png" alt="kit" width="1000" height="1000"/>
            </Section>
        </Section>
    )
}