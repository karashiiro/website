import { JSX } from "preact";
import { ButtonLink } from "../components/ButtonLink.tsx";
import { Profile } from "../components/Profile.tsx";

function ButtonLinkList({ children }: {
  children: (JSX.Element | string)[] | JSX.Element | string;
}) {
  return (
    <ul class="flex flex-wrap -mr-3 -mb-3 md:ml-4 list-none list-inside">
      {children}
    </ul>
  );
}

ButtonLinkList.Item = ({ href, gh, children }: {
  href: string;
  gh?: string;
  children: (JSX.Element | string)[] | JSX.Element | string;
}) => {
  return (
    <li class="mr-3 mb-3">
      <ButtonLink href={href} gh={gh}>
        {children}
      </ButtonLink>
    </li>
  );
};

function MyLinks() {
  return (
    <nav class="m-auto md:ml-4 max-w-xs md:max-w-sm divide-dashed divide-y-2">
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
      <div class="pt-1 mb-1">
        <h2 class="text-lg font-fancy font-semibold">Some projects</h2>
        <ButtonLinkList>
          <ButtonLinkList.Item
            href="https://universalis.app"
            gh="https://github.com/Universalis-FFXIV"
          >
            Universalis
          </ButtonLinkList.Item>
          <ButtonLinkList.Item
            href="https://github.com/karashiiro/xiv-resources"
            gh="https://github.com/karashiiro/xiv-resources"
          >
            xiv-resources
          </ButtonLinkList.Item>
          <ButtonLinkList.Item
            href="https://github.com/the-convocation/twitter-scraper"
            gh="https://github.com/the-convocation/twitter-scraper"
          >
            @the-convocation/twitter-scraper
          </ButtonLinkList.Item>
          <ButtonLinkList.Item
            href="https://github.com/xivapi/godestone"
            gh="https://github.com/xivapi/godestone"
          >
            xivapi/godestone
          </ButtonLinkList.Item>
        </ButtonLinkList>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div class="mx-auto">
      <div class="mt-[6vh] md:mt-[25vh]" />
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="row-span-2">
          <div class="mx-auto h-72 aspect-square">
            <Profile />
          </div>
        </div>
        <div class="row-span-1 space-y-3">
          <h1
            id="karashiiro"
            class="text-4xl font-fancy font-semibold text-center md:text-start"
          >
            karashiiro
          </h1>
          <MyLinks />
        </div>
      </div>
    </div>
  );
}
