import { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component }: LayoutProps) {
  return (
    <main>
      <Component />
    </main>
  );
}
