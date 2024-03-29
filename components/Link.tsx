import { JSX } from "preact";

interface LinkProps {
  href: string;
  children: (JSX.Element | string)[] | JSX.Element | string;
}

// TODO: Delete if unused
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
