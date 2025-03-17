"use client"

import Container from "@/components/ui/base/Container";
import Heading from "@/components/ui/base/Heading";
import ColorThemeToggle from "@/components/ui/ColorThemeToggle";
import Link from "next/link";
import {useState} from "react";
import ShopNav from "@/components/layout/ShopNav";
import clsx from "clsx";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function handleIsOpen() {
        if (isOpen) {
            setIsOpen(false);
        }
    }

    return (
        <nav className="z-10 fixed h-16 w-full  ring-[1px] shadow-sm ring-slate-950/10">
            <div className="w-full h-full p-3 bg-foreground text-contrast-foreground" onClick={handleIsOpen}>
                <Container className="flex">
                    <section className="flex items-center basis-1/3">
                        <Link href="/">
                            <Heading foreground level={3} noMargin={true} className="">Nomad Pack</Heading>
                        </Link>

                    </section>

                    <div className="flex items-center justify-center gap-10 basis-1/3">
                        <div onClick={() => setIsOpen(prev => !prev)}>Explore</div>
                        <Link href="/">Build</Link>
                        <Link href="/guide">Guides</Link>
                    </div>

                    <div className="flex flex-row-reverse items-center  basis-1/3">
                        <ColorThemeToggle></ColorThemeToggle>
                    </div>
                </Container>
            </div>

            <ShopNav isOpen={isOpen} onClose={() => setIsOpen(false)}/>

            <div
                className={clsx(
                    'bg-neutral-500',
                    'absolute -z-10 top-0 left-0 w-0 h-0',
                    'transition-opacity opacity-0 duration-500',
                    isOpen && 'opacity-70 w-screen h-screen',
                )}
            />
        </nav>
    )
};