import Link from "../components/Link.tsx";

export default function Home() {
  return (
    <main class="absolute w-full h-full bg-black font-mono text-white lowercase">
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-2xl">karashiiro</h1>
        <p>
          Empty space and empty time
        </p>
        <div class="h-4"></div>
        <h2 class="text-lg">Find me at</h2>
        <ul class="list-disc list-inside">
          <li><Link href="https://github.com/karashiiro">GitHub</Link></li>
          <li><Link href="https://twitter.com/karashiiro1">Twitter</Link></li>
        </ul>
        <div class="h-4"></div>
        <h2 class="text-lg">Projects</h2>
        <ul class="list-disc list-inside">
          <li><Link href="https://github.com/Universalis-FFXIV">Universalis</Link></li>
          <li><Link href="https://github.com/PrimaShouji">Prima</Link></li>
          <li><Link href="https://github.com/velcro-xiv">Velcro</Link></li>
        </ul>
      </div>
    </main>
  );
}
