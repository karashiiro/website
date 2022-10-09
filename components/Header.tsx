import Link from "./Link.tsx";

export default function Header() {
  return (
    <>
      <h1 id="karashiiro">
        <a href="/" class="text-2xl">karashiiro</a>
      </h1>
      <p>
        Empty space and empty time
      </p>
      <Link href="/blog">Blog</Link>
      <div class="h-4" />
    </>
  );
}