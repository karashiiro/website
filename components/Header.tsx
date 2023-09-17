import Container from "./Container.tsx";
import Link from "./Link.tsx";

function Profile() {
  return (
    <div class="rounded-full shadow-lg h-48 aspect-square p-1 border border-8 border-amber-300 bg-cover bg-no-repeat bg-profile">
      <div class="rounded-full border-dashed border-4 border-amber-300 animate-spin-slow h-full aspect-square" />
    </div>
  );
}

export default function Header() {
  return (
    <header class="mx-auto max-w-screen-lg font-semibold">
      <div class="rounded-b-full border-b-8 border-x-8 border-amber-300 shadow-lg">
        <Container>
          <div class="absolute">
            <Profile />
          </div>
          <div class="relative left-[13rem] space-y-3">
            <div>
              <h1 id="karashiiro">
                <a href="/" class="text-4xl">karashiiro</a>
              </h1>
            </div>
            <nav class="text-sm ml-4">
              <ul class="flex space-x-3 list-none list-inside">
                <li>
                  Find me at:
                </li>
                <li>
                  <Link href="https://github.com/karashiiro">GitHub</Link>
                </li>
                <li>
                  <Link href="https://twitter.com/karashiiro1">Twitter</Link>
                </li>
              </ul>
              <ul class="flex space-x-3 list-none list-inside">
                <li>
                  Projects:
                </li>
                <li>
                  <Link href="https://github.com/Universalis-FFXIV">
                    Universalis
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/PrimaShouji">Prima</Link>
                </li>
                <li>
                  <Link href="https://github.com/velcro-xiv">Velcro</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </div>
      <div class="h-[5rem] w-[14rem]"></div>
    </header>
  );
}
