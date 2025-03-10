"use client"

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ColorThemeToggle from "@/components/ui/ColorThemeToggle";


export default function Navbar() {
    return (
        <nav className="p-3 text-emerald-500 dark:text-amber-500 bg-foreground rounded-t ring-[1px] shadow-sm ring-slate-950/1">
            <Container className="flex items-center justify-center">

                <div className="flex items-center gap-10 basis-1/3">
                    <div>Explore</div>
                    <div>Build</div>
                    <div>Login</div>
                </div>

                <section className="flex justify-center items-center basis-1/3">
                    <Heading level={3} noMargin={true} className="">Nomad pack</Heading>
                </section>

                <div className="flex flex-row-reverse items-center  basis-1/3">
                    <ColorThemeToggle></ColorThemeToggle>
                </div>


            </Container>
        </nav>
    )
};