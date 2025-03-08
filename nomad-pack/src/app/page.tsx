import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";


export default function Home() {
  return (
    <Container>
      <Button>Default</Button>
        <Button variant={'secondary'}>Secondary</Button>
        <Button variant={'accent'}>Accent</Button>
     </Container>
  );
}
