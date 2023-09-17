import { JSX } from "preact";

function Profile() {
  return (
    <div class="rounded-full shadow-lg h-72 aspect-square p-1 border border-8 border-amber-300 bg-cover bg-no-repeat bg-profile">
      <div class="rounded-full border-dashed border-4 border-amber-300 h-full aspect-square" />
    </div>
  );
}

function ButtonLink(
  { href, children }: {
    href: string;
    children: JSX.Element[] | JSX.Element | string;
  },
) {
  return (
    <a class="flex shadow rounded-full p-1 bg-blue-300" href={href}>
      <div class="rounded-full px-2 py-1 border-dashed border-white border-2 text-blue-900 font-bold">
        {children}
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div class="mx-auto max-w-screen-lg">
      <div class="mt-[25vh]" />
      <div class="grid grid-cols-2">
        <div class="row-span-2">
          <Profile />
        </div>
        <div class="row-span-1 space-y-3">
          <h1
            id="karashiiro"
            class="mt-3 text-4xl font-karashiiro font-semibold"
          >
            karashiiro
          </h1>
          <nav class="text-sm ml-4 divide-dashed divide-y-2">
            <ul class="flex mb-1 space-x-3 list-none list-inside">
              <li>
                <ButtonLink href="https://github.com/karashiiro">
                  GitHub
                </ButtonLink>
              </li>
              <li>
                <ButtonLink href="https://twitter.com/karashiiro1">
                  Twitter
                </ButtonLink>
              </li>
            </ul>
            <ul class="flex pt-1 space-x-3 list-none list-inside">
              <li>
                <ButtonLink href="https://github.com/Universalis-FFXIV">
                  Universalis
                </ButtonLink>
              </li>
              <li>
                <ButtonLink href="https://github.com/PrimaShouji">
                  Prima
                </ButtonLink>
              </li>
              <li>
                <ButtonLink href="https://github.com/velcro-xiv">
                  Velcro
                </ButtonLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
