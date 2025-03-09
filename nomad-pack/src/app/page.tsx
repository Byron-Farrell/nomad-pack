import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Card from "@/components/ui/Card";

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'


export default function Home() {
  return (
      <Container className="bg-background-primary-dark pt-4">
          <Heading level={1}>Title</Heading>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue laoreet nisl, quis mattis nisl commodo
              vel. Sed congue leo nec justo varius mollis. Mauris sit amet eleifend nulla. Phasellus vel elementum ex.
              Mauris quis enim quam. Fusce at lectus semper, cursus libero at, malesuada augue. Donec pretium malesuada
              urna, eget luctus sem maximus non. Donec feugiat in urna et pharetra. In hac habitasse platea dictumst.
              Nam vel porta sem, a aliquet odio. In efficitur dolor et tempor sagittis. Sed tellus mauris, efficitur ut
              elementum et, hendrerit non quam. In fringilla, urna eu finibus sollicitudin, turpis nibh egestas sem,
              quis tempus turpis nisl lobortis sem. Phasellus ultrices vel quam non pellentesque. Fusce vel finibus
              mauris. Phasellus id erat ultricies, lobortis erat eu, fringilla nulla.</p>

          <Heading level={2} className="mt-6">Sub Title</Heading>

          <div className="flex items-center gap-6">
              <Card className="grow">
                  <Heading level={3} >Card Title</Heading>

                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue laoreet nisl,
                      quis mattis nisl commodo
                      vel. Sed congue leo nec justo varius mollis. Mauris sit amet eleifend nulla. Phasellus vel
                      elementum ex.
                      Mauris quis enim quam. Fusce at lectus semper, cursus libero at, malesuada augue. Donec pretium
                      malesuada
                      urna, eget luctus sem maximus non. Donec feugiat in urna et pharetra. In hac habitasse platea
                      dictumst.
                      Nam vel porta sem.
                  </p>

                  <Button icon={MagnifyingGlassIcon}>Default</Button>
              </Card>

              <Card className="grow">
                  <Heading level={3} >Card Title</Heading>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue laoreet nisl,
                      quis mattis nisl commodo
                      vel. Sed congue leo nec justo varius mollis. Mauris sit amet eleifend nulla. Phasellus vel
                      elementum ex.
                      Mauris quis enim quam. Fusce at lectus semper, cursus libero at, malesuada augue. Donec pretium
                      malesuada
                      urna, eget luctus sem maximus non. Donec feugiat in urna et pharetra. In hac habitasse platea
                      dictumst.
                      Nam vel porta sem.
                  </p>

                  <Button variant={'secondary'}>Secondary</Button>
              </Card>

              <Card className="grow">
                  <Heading level={3} >Card Title</Heading>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue laoreet nisl,
                      quis mattis nisl commodo
                      vel. Sed congue leo nec justo varius mollis. Mauris sit amet eleifend nulla. Phasellus vel
                      elementum ex.
                      Mauris quis enim quam. Fusce at lectus semper, cursus libero at, malesuada augue. Donec pretium
                      malesuada
                      urna, eget luctus sem maximus non. Donec feugiat in urna et pharetra. In hac habitasse platea
                      dictumst.
                      Nam vel porta sem.
                  </p>

                  <Button variant={'accent'}>Accent</Button>
              </Card>
          </div>


      </Container>
  );
}
