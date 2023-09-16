import { LayoutProps } from "$fresh/server.ts";

export default function Layout({ Component }: LayoutProps) {
    return (
        <main class="absolute w-full h-full bg-black font-mono text-white lowercase">
            <Component />
        </main>
    );
}
