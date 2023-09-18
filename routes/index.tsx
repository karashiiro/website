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
        class="shadow-md rounded-full p-1 bg-blue-300 hover:shadow-lg"
        tabIndex={0}
        href={href}
      >
        <div class="rounded-full px-2 py-1 border-dashed border-white border-2 text-blue-900 font-bold text-sm whitespace-nowrap">
          {children}
        </div>
      </a>
    </div>
  );
}

function ButtonLinkList({ children }: {
  children: JSX.Element[] | JSX.Element | string;
}) {
  return (
    <ul class="flex flex-wrap -mr-3 -mb-3 md:ml-4 list-none list-inside">
      {children}
    </ul>
  );
}

ButtonLinkList.Item = ({ href, children }: {
  href: string;
  children: JSX.Element[] | JSX.Element | string;
}) => {
  return (
    <li class="mr-3 mb-3">
      <ButtonLink href={href}>
        {children}
      </ButtonLink>
    </li>
  );
};

function MyLinks() {
  return (
    <nav class="m-auto md:ml-4 max-w-xs divide-dashed divide-y-2">
      <div class="mb-1">
        <h2 class="text-xl font-fancy font-semibold">Find me on</h2>
        <ButtonLinkList>
          <ButtonLinkList.Item href="https://github.com/karashiiro">
            GitHub
          </ButtonLinkList.Item>
          <ButtonLinkList.Item href="https://twitter.com/karashiiro1">
            Twitter
          </ButtonLinkList.Item>
        </ButtonLinkList>
      </div>
      <div class="pt-1">
        <h2 class="text-lg font-fancy font-semibold">Some projects</h2>
        <ButtonLinkList>
          <ButtonLinkList.Item href="https://github.com/Universalis-FFXIV">
            Universalis
          </ButtonLinkList.Item>
          <ButtonLinkList.Item href="https://github.com/karashiiro/lodestone-when">
            lodestone-when
          </ButtonLinkList.Item>
          <ButtonLinkList.Item href="https://github.com/karashiiro/patch-tool">
            PSO2 Patch File Viewer
          </ButtonLinkList.Item>
          <ButtonLinkList.Item href="https://github.com/the-convocation/twitter-scraper">
            @the-convocation/twitter-scraper
          </ButtonLinkList.Item>
          <ButtonLinkList.Item href="https://github.com/karashiiro/xiv-resources">
            xiv-resources
          </ButtonLinkList.Item>
        </ButtonLinkList>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div class="mx-auto">
      <div class="mt-[25vh]" />
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="row-span-2">
          <div class="mx-auto h-72 aspect-square">
            <Profile />
          </div>
        </div>
        <div class="row-span-1 space-y-3">
          <h1
            id="karashiiro"
            class="mt-3 text-4xl font-fancy font-semibold text-center md:text-start"
          >
            karashiiro
          </h1>
          <MyLinks />
        </div>
      </div>
    </div>
  );
}
