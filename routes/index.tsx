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
    <nav class="m-auto md:ml-4 max-w-sm divide-dashed divide-y-2">
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
        <h2 class="text-lg font-fancy font-semibold">Projects</h2>
        <ButtonLinkList>
          <ButtonLinkList.Item href="https://github.com/Universalis-FFXIV">
            Universalis
          </ButtonLinkList.Item>
          <ButtonLinkList.Item href="https://github.com/PrimaShouji">
            Prima
          </ButtonLinkList.Item>
          <ButtonLinkList.Item href="https://github.com/karashiiro/xiv-resources">
            xiv-resources
          </ButtonLinkList.Item>
          <ButtonLinkList.Item href="https://github.com/the-convocation/twitter-scraper">
            @the-convocation/twitter-scraper
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
      <div class="flex mt-10 md:ml-12 p-4">
        <div class="flex p-1 bg-pink-400 shadow-md rounded-md">
          <div class="flex min-w-auto px-2 py-1 rounded-md border-dashed border-white border-2 text-4xl text-white">
            <i width={36} class="devicon-csharp-plain mr-1" />
            <i width={36} class="devicon-typescript-plain mr-1" />
            <i width={36} class="devicon-javascript-plain mr-1" />
            <i width={36} class="devicon-python-plain mr-1" />
            <i width={36} class="devicon-go-plain mr-1" />
            <i width={36} class="devicon-rust-plain mr-1" />
            <i width={36} class="devicon-fsharp-plain mr-1" />
            <i width={36} class="devicon-kotlin-plain mr-1" />
            <i width={36} class="devicon-java-plain mr-1" />
            <i width={36} class="devicon-cplusplus-plain" />
          </div>
        </div>
      </div>
    </div>
  );
}
