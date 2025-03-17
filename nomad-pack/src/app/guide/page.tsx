import Container from "@/components/ui/base/Container";
import Image from "next/image";
import Heading from "@/components/ui/base/Heading";
import Section from "@/components/ui/base/Section";
import Paragraph from "@/components/ui/base/Paragraph";
import List from "@/components/ui/base/List";
import ListItem from "@/components/ui/base/ListItem";


export default function Guide() {
    return (
        <div className="min-h-screen =">
            <Image className="w-full" src="/hero-banner.jpeg" alt="knife" width="1536" height="512"/>
            <Container>
                <Section spacing="lg">
                    <Heading level={1}>The Ultimate Survival Essentials Guide</Heading>

                    <Section>
                        <Heading level={3}>Be Prepared. Stay Alive. Thrive in the Wild.</Heading>
                        <Paragraph>
                            Whether you’re venturing deep into the wilderness, preparing for an emergency, or simply exploring the great outdoors, having the right survival gear can mean the difference between safety and disaster.
                        </Paragraph>
                        <Paragraph>
                            This guide covers the absolute must-have survival essentials—from shelter and fire-starting tools to navigation and first aid.
                        </Paragraph>
                    </Section>

                    <Section spacing="sm">
                        <Section>
                            <Heading level={3}>Shelter & Protection</Heading>
                            <Paragraph>
                                Why it’s essential: Exposure to extreme cold, rain, or heat can be life-threatening. Your first priority in survival is shelter to protect yourself from the elements.
                            </Paragraph>
                        </Section>
                        <Section spacing="sm">
                            <Heading level={4}>What to Pack:</Heading>

                            <List>
                                <ListItem>Emergency Survival Tent or Tarp – Lightweight, waterproof, and easy to set up.</ListItem>
                                <ListItem>Sleeping Bag or Bivvy Sack – Insulated and weather-resistant for warmth.</ListItem>
                                <ListItem>Paracord (550 Cord) – Strong, multipurpose cord for shelter building, repairs, and traps.</ListItem>
                                <ListItem>Thermal Blanket – Reflects body heat and prevents hypothermia.</ListItem>
                            </List>
                        </Section>
                    </Section>
                </Section>
            </Container>
        </div>
    );
}
