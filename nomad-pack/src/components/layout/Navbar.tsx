"use client"

import Container from "@/components/ui/base/Container";
import Heading from "@/components/ui/base/Heading";
import ColorThemeToggle from "@/components/ui/ColorThemeToggle";


export default function Navbar() {
    return (
        <nav className="fixed z-50 w-full p-3 bg-foreground text-contrast-foreground ring-[1px] shadow-sm ring-slate-950/1">
            <Container className="flex">
                <section className="flex items-center basis-1/3">
                    <Heading level={3} noMargin={true} className="">Nomad Pack</Heading>
                </section>

                <div className="flex items-center justify-center gap-10 basis-1/3">
                    <div>Explore</div>
                    <div>Build</div>
                    <div>Login</div>
                </div>

                <div className="flex flex-row-reverse items-center  basis-1/3">
                    <ColorThemeToggle></ColorThemeToggle>
                </div>


            </Container>
        </nav>
    )
};