import { Container } from "@/src/shared/components";
import { InputSearch } from "@/src/shared/components/input-search";

export default function Home() {
  const handleTeste = (data: string) => {
    console.log({ check: data });
  };

  return (
    <Container>
      <InputSearch onSearch={handleTeste} placeholder="Buscar produtos" />
    </Container>
  );
}
