import { JSX } from "preact";

interface ListProps {
  children: JSX.Element | JSX.Element[];
}

interface ListItemProps {
  children: JSX.Element | JSX.Element[] | string;
}

export default function List(props: ListProps) {
  return <ul class="list-disc list-inside">{props.children}</ul>;
}

List.Item = ({ children }: ListItemProps) => {
  return <li>{children}</li>;
};
