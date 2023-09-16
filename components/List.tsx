import { JSX } from "preact"

interface ListProps {
    children: JSX.Element | JSX.Element[];
}

export default function List(props: ListProps) {
    return <ul class="list-disc list-inside">{props.children}</ul>
}
