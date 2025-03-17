import type { Guide } from "@prisma/client";
import Heading from "@/components/ui/base/Heading";
import Section from "@/components/ui/base/Section";
import GuideCard from "@/app/home/components/GuideCard";

export default async function GuideShowcase() {
    const data = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/guide`);
    const guides: Guide[] = await data.json();

    return (
        <>
            <Heading level={2}>Guides</Heading>

            <Section className="flex flex-col md:flex-row gap-5" spacing="lg">
                {guides.map((guide) => (
                    <GuideCard key={guide.id} className="basis-1/3" title={guide.name} description={guide.description} imagePath={guide.imageUrl}/>
                ))}
            </Section>
        </>
    )
}