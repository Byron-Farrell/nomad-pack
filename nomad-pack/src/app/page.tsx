import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

import Image from "next/image";
import { WrenchIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
      <Container className="pt-20">
          <div className="flex flex-col gap-5 h-screen">
              <Card className="flex items-center text-white justify-center bg-gradient-to-r from-stone-900 to-gray-700">

                  <section className="grow md:basis-3/5 lg:basis-1/2 gap-10 py-20 px-10 md:px-10">
                      <Heading level={1}>Your Pack. Your Rules.</Heading>
                      <p className="mb-10">Craft your ultimate survival pack with the gear you need for any adventure.
                          Whether you’re exploring the wilderness or preparing for the unexpected, Nomad Pack lets you
                          customize every essential to fit your journey. No excess. No compromises. Just the right tools
                          for you.</p>
                      <Button icon={WrenchIcon} variant="accent" className="w-1/2" size="lg">Build A Kit</Button>
                  </section>
                  <section className="hidden md:block basis-0 md:basis-2/5 lg:basis-1/2">
                      <Image src="/kit-2.png" alt="kit" width="1000" height="1000"/>
                  </section>
              </Card>
          </div>

          <Heading level={2}>Gear Up for Anything.</Heading>
          <div className="flex gap-20">
              <Card
                  className="basis-1/3 bg-gradient-to-r text-white from-red-800 to-red-500 p-10 duration-200 hover:rotate-1 hover:scale-105 hover:shadow-lg transition-transform transition-all hover:brightness-110">
                  <Heading level={3}>First Aid</Heading>
                  <Heading level={4}>Stay Safe. Stay Prepared</Heading>
                  <p>From minor cuts to major emergencies, your survival kit starts with first aid essentials.</p>
              </Card>

              <Card
                  className="text-white basis-1/3 bg-gradient-to-r from-neutral-900 to-neutral-700 p-10 duration-200 hover:-rotate-1 hover:scale-105 hover:shadow-lg transition-transform transition-all hover:brightness-110">
                  <Heading level={3}>Utility</Heading>
                  <Heading level={4}>Tools for Every Challenge.</Heading>
                  <p>Knives, multitools, and torches—gear up with the essentials you need in the wild.</p>
              </Card>

              <Card
                  className="basis-1/3 bg-gradient-to-r from-emerald-700 to-emerald-500  text-white p-10 duration-200 hover:rotate-1 hover:scale-105 hover:shadow-lg transition-transform transition-all hover:brightness-110">
                  <Heading level={3}>Navigation</Heading>
                  <Heading level={4}>Never Lose Your Way.</Heading>
                  <p>Compasses, GPS devices, and emergency radios to keep you on track wherever adventure takes you.</p>
              </Card>
          </div>


          <Heading className="mt-20" level={1}>Premade Packs</Heading>

          <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 grow">
                  <div className="basis-1/2">
                      <Heading level={3}>General First Aid</Heading>
                      <Card className="flex flex-col gap-5 basis-1/2">


                          <div className="flex">
                              <div className="flex items-center ">
                                  <Image className="size-52" src="/kit-2.png" alt="kit" width="896" height="896"/>
                              </div>


                              <p className="basis-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue
                                  laoreet
                                  nisl,
                                  quis mattis nisl commodo
                                  vel. Sed congue leo nec justo varius mollis. Mauris sit amet eleifend nulla. Phasellus vel
                                  elementum ex.
                                  Mauris quis enim quam. Fusce at lectus semper, cursus libero at, malesuada augue. Donec
                                  pretium
                                  malesuada
                                  urna, eget luctus sem maximus non. Donec feugiat in urna et pharetra. In hac habitasse platea
                                  dictumst.
                                  Nam vel porta sem.
                              </p>
                          </div>
                      </Card>
                  </div>
                  <div className="basis-1/2">
                      <Heading level={3}>General First Aid</Heading>
                      <Card className="flex flex-col gap-5 basis-1/2">


                          <div className="flex">
                              <div className="flex items-center ">
                                  <Image className="size-52" src="/kit-2.png" alt="kit" width="896" height="896"/>
                              </div>


                              <p className="basis-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                  congue
                                  laoreet
                                  nisl,
                                  quis mattis nisl commodo
                                  vel. Sed congue leo nec justo varius mollis. Mauris sit amet eleifend nulla. Phasellus
                                  vel
                                  elementum ex.
                                  Mauris quis enim quam. Fusce at lectus semper, cursus libero at, malesuada augue.
                                  Donec
                                  pretium
                                  malesuada
                                  urna, eget luctus sem maximus non. Donec feugiat in urna et pharetra. In hac habitasse
                                  platea
                                  dictumst.
                                  Nam vel porta sem.
                              </p>
                          </div>
                      </Card>
                  </div>
              </div>

              <div className="flex items-center gap-6 grow">
                  <div className="basis-1/2">
                      <Heading level={3}>General First Aid</Heading>
                      <Card className="flex flex-col gap-5 basis-1/2">


                          <div className="flex">
                              <div className="flex items-center ">
                                  <Image className="size-52" src="/kit-2.png" alt="kit" width="896" height="896"/>
                              </div>


                              <p className="basis-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                  congue
                                  laoreet
                                  nisl,
                                  quis mattis nisl commodo
                                  vel. Sed congue leo nec justo varius mollis. Mauris sit amet eleifend nulla. Phasellus
                                  vel
                                  elementum ex.
                                  Mauris quis enim quam. Fusce at lectus semper, cursus libero at, malesuada augue.
                                  Donec
                                  pretium
                                  malesuada
                                  urna, eget luctus sem maximus non. Donec feugiat in urna et pharetra. In hac habitasse
                                  platea
                                  dictumst.
                                  Nam vel porta sem.
                              </p>
                          </div>
                      </Card>
                  </div>
                  <div className="basis-1/2">
                      <Heading level={3}>General First Aid</Heading>
                      <Card className="flex flex-col gap-5 basis-1/2">


                          <div className="flex">
                              <div className="flex items-center ">
                                  <Image className="size-52" src="/kit-2.png" alt="kit" width="896" height="896"/>
                              </div>


                              <p className="basis-2/3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                                  congue
                                  laoreet
                                  nisl,
                                  quis mattis nisl commodo
                                  vel. Sed congue leo nec justo varius mollis. Mauris sit amet eleifend nulla. Phasellus
                                  vel
                                  elementum ex.
                                  Mauris quis enim quam. Fusce at lectus semper, cursus libero at, malesuada augue.
                                  Donec
                                  pretium
                                  malesuada
                                  urna, eget luctus sem maximus non. Donec feugiat in urna et pharetra. In hac habitasse
                                  platea
                                  dictumst.
                                  Nam vel porta sem.
                              </p>
                          </div>
                      </Card>
                  </div>
              </div>
          </div>

      </Container>
  );
}
