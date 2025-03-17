import Image from "next/image";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/base/Section";
import Button from "@/components/ui/Button";
import Paragraph from "@/components/ui/base/Paragraph";
import Heading from "@/components/ui/base/Heading";
import clsx from "clsx";

export interface GuideCardProps {
    title: string;
    description: string;
    imagePath: string;
    className?: string;
}

export default function GuideCard({
    title,
    description,
    imagePath,
    className
}: GuideCardProps) {
    return (
        <Card noPadding className={clsx(
            "flex flex-col overflow-hidden",
            className
        )}>
            <Image style={{objectFit: "contain"}}  className="w-full" src={imagePath} alt="knife" width="1024" height="1024"/>

            <Section className="flex flex-col gap-5 p-6">
                <div>
                    <Heading foreground level={3}>{title}</Heading>
                    <Paragraph>{description}</Paragraph>
                </div>

                <Button size="lg" variant="primary">Read More</Button>
            </Section>
        </Card>
    )
}