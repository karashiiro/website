import { LayoutProps } from "$fresh/server.ts";
import Container from "../components/Container.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <main class="mx-auto max-w-screen-xl">
      <Container>
        <Component />
      </Container>
    </main>
  );
}
