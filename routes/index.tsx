import Link from "../components/Link.tsx";
import List from "../components/List.tsx";

export default function Home() {
  return (
    <>
      <h2 class="text-lg">Find me at</h2>
      <List>
        <List.Item>
          <Link href="https://github.com/karashiiro">GitHub</Link>
        </List.Item>
        <List.Item>
          <Link href="https://twitter.com/karashiiro1">Twitter</Link>
        </List.Item>
      </List>
      <div class="h-4"></div>
      <h2 class="text-lg">Projects</h2>
      <List>
        <List.Item>
          <Link href="https://github.com/Universalis-FFXIV">Universalis</Link>
        </List.Item>
        <List.Item>
          <Link href="https://github.com/PrimaShouji">Prima</Link>
        </List.Item>
        <List.Item>
          <Link href="https://github.com/velcro-xiv">Velcro</Link>
        </List.Item>
      </List>
    </>
  );
}
