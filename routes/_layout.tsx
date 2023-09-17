import { LayoutProps } from "$fresh/server.ts";
import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <>
      <Header />
      <main class="mx-auto max-w-screen-xl">
        <Container>
          <Component />
        </Container>
      </main>
    </>
  );
}
