import { JSX } from "preact";

interface LinkProps {
    href: string;
    children: JSX.Element | JSX.Element[] | string;
}

export default function Link(props: LinkProps) {
    return <a href={props.href} class="underline text-blue-300 visited:text-purple-300">{props.children}</a>
}
