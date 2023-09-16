import { JSX } from "preact";

interface LinkProps {
  href: string;
  children: JSX.Element | JSX.Element[] | string;
}

export default function Link(props: LinkProps) {
  return (
    <a
      href={props.href}
      class="underline text-blue-400 visited:text-purple-400"
    >
      {props.children}
    </a>
  );
}
