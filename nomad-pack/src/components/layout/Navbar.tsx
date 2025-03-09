import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

export default function Navbar() {
    return (
        <nav className=" text-contrast bg-foreground rounded-t ring-[1px] shadow-sm ring-slate-950/1">
            <section className="flex items-center justify-between">
                <section className="border-r border-gray-950/10 py-4 px-10">
                    <Heading level={5} noMargin={true} className="">Nomad pack</Heading>
                </section>


                <div className="absolute w-full flex justify-center items-center grow gap-2">

                    <div className="text-base g-slate-200 text-center rounded px-4 py-1 ">Explore</div>
                    <div className=" g-slate-200  text-center rounded px-4 py-1 ">Build</div>
                    <div className=" g-slate-200  text-center rounded px-4 py-1 ">Login</div>
                </div>


            </section>
        </nav>
    )
};