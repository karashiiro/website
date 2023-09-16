import { LayoutProps } from "$fresh/server.ts";
import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <main>
      <Container>
        <Header />
        <Component />
      </Container>
    </main>
  );
}
