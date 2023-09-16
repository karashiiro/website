import { JSX } from "preact"

interface ContainerProps {
    children: JSX.Element | JSX.Element[] | string;
}

export default function Container(props: ContainerProps) {
    return <div class="p-4 mx-auto max-w-screen-md">{props.children}</div>
}
