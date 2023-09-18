import { JSX } from "preact";

interface ContainerProps {
  children: JSX.Element | JSX.Element[] | string;
}

export default function Container({ children }: ContainerProps) {
  return <div class="flex">{children}</div>;
}
