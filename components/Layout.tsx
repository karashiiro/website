import { JSX } from "preact"

interface LayoutProps {
    children: JSX.Element | JSX.Element[] | string;
}

export default function Layout(props: LayoutProps) {
    return <main class="absolute w-full h-full bg-black font-mono text-white lowercase">{props.children}</main>
}