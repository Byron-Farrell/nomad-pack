import Card from "@/components/ui/base/Card";
import Image from "next/image";
import Heading from "@/components/ui/base/Heading";
import Paragraph from "@/components/ui/base/Paragraph";
import Button from "@/components/ui/base/Button";
import Section from "@/components/ui/base/Section";

export default function PremadePacks() {
    return (
        <div>
            <Card>
                <Heading level={3}>Pre-Made Packs</Heading>

                <Section spacing="sm" className="flex gap-10">
                    <div className="flex items-center bg-blue-500" >
                        <Image className="w-52" src="/bags/pack1.jpeg" alt="Premade Packs" width={1024} height={1024} />
                    </div>

                    <Paragraph className="grow">
                        BLA BLA
                    </Paragraph>
                </Section>

                <Section spacing="sm" className="flex flex-row-reverse">
                    <Button className="w-52" size="lg" variant="accent">Explore</Button>
                </Section>

            </Card>
        </div>
    )
}