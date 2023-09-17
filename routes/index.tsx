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
    <div class="flex">
      <a
        class="shadow rounded-full p-1 bg-blue-300 hover:shadow-md"
        href={href}
      >
        <div class="rounded-full px-2 py-1 border-dashed border-white border-2 text-blue-900 font-bold text-sm whitespace-nowrap">
          {children}
        </div>
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div class="mx-auto max-w-screen-lg">
      <div class="mt-[25vh]" />
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="row-span-2">
          <Profile />
        </div>
        <div class="row-span-1 space-y-3">
          <h1
            id="karashiiro"
            class="mt-3 text-4xl font-fancy font-semibold text-center md:text-start"
          >
            karashiiro
          </h1>
          <nav class="md:ml-4 divide-dashed divide-y-2">
            <div class="mb-1">
              <h2 class="text-xl font-fancy font-semibold">Find me on</h2>
              <ul class="flex flex-wrap max-w-sm -mr-3 -mb-3 md:ml-4 list-none list-inside">
                <li class="mr-3 mb-3">
                  <ButtonLink href="https://github.com/karashiiro">
                    GitHub
                  </ButtonLink>
                </li>
                <li class="mr-3 mb-3">
                  <ButtonLink href="https://twitter.com/karashiiro1">
                    Twitter
                  </ButtonLink>
                </li>
              </ul>
            </div>
            <div class="pt-1">
              <h2 class="text-lg font-fancy font-semibold">Projects</h2>
              <ul class="flex flex-wrap max-w-sm -mr-3 -mb-3 md:ml-4 list-none list-inside">
                <li class="mr-3 mb-3">
                  <ButtonLink href="https://github.com/Universalis-FFXIV">
                    Universalis
                  </ButtonLink>
                </li>
                <li class="mr-3 mb-3">
                  <ButtonLink href="https://github.com/PrimaShouji">
                    Prima
                  </ButtonLink>
                </li>
                <li class="mr-3 mb-3">
                  <ButtonLink href="https://github.com/the-convocation/twitter-scraper">
                    @the-convocation/twitter-scraper
                  </ButtonLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
