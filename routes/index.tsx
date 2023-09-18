import { ComponentChildren, JSX } from "preact";
import { ButtonLink } from "../components/ButtonLink.tsx";
import { Profile } from "../components/Profile.tsx";

type ExtractProps<T> = T extends (props: infer U) => JSX.Element ? U : never;

function ButtonLinkList({ children }: {
  children: ComponentChildren;
}) {
  return (
    <ul class="flex flex-wrap -mr-3 -mb-3 md:ml-4 list-none list-inside">
      {children}
    </ul>
  );
}

ButtonLinkList.Item = (
  { href, gh, variant, children }: ExtractProps<typeof ButtonLink>,
) => {
  return (
    <li class="mr-3 mb-3">
      <ButtonLink href={href} gh={gh} variant={variant}>
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
    </nav>
  );
}

function ProjectCard(
  { name, description, children }: {
    name: string;
    description: string;
    children: ComponentChildren;
  },
) {
  // https://www.30secondsofcode.org/css/s/nested-border-radius/
  return (
    <div class="h-full p-1 max-w-xs rounded-[12px] shadow-md bg-pink-300 text-pink-900 text-sm">
      <div class="flex flex-col place-content-between h-full px-2 py-1 rounded-[8px] border-dashed border-2 border-white">
        <div>
          <h3 class="text-lg font-fancy">{name}</h3>
          <p>{description}</p>
        </div>
        <div class="flex space-x-3 mt-1">
          {children}
        </div>
      </div>
    </div>
  );
}

function MyProjects() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="mt-2 p-1">
        <ProjectCard
          name="Universalis"
          description="A crowdsourced market board API for FFXIV."
        >
          <ButtonLink
            variant="blue"
            href="https://universalis.app"
            gh="https://github.com/Universalis-FFXIV/mogboard-next"
          >
            Website
          </ButtonLink>
          <ButtonLink
            variant="blue"
            href="https://docs.universalis.app"
            gh="https://github.com/Universalis-FFXIV/Universalis"
          >
            API
          </ButtonLink>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="XIV Resources"
          description="A list of websites, APIs, and tools for FFXIV."
        >
          <ButtonLink
            variant="blue"
            href="https://karashiiro.github.io/xiv-resources/"
            gh="https://github.com/karashiiro/xiv-resources"
          >
            Website
          </ButtonLink>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="twitter-scraper"
          description="A port of n0madic's Go Twitter scraping library to Node.js."
        >
          <ButtonLink
            variant="blue"
            href="https://www.npmjs.com/package/@the-convocation/twitter-scraper"
            gh="https://github.com/the-convocation/twitter-scraper"
          >
            NPM
          </ButtonLink>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="godestone"
          description="Go scraper for The Lodestone."
        >
          <ButtonLink
            variant="blue"
            href="https://github.com/xivapi/godestone"
            gh="https://github.com/xivapi/godestone"
          >
            Repo
          </ButtonLink>
        </ProjectCard>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div class="flex">
      <div class="mx-auto overflow-x-hidden">
        <div class="mt-[6vh] md:mt-[16vh]" />
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
        <div class="mt-2 md:mt-10 px-4 md:px-10">
          <h2 class="text-xl font-fancy font-semibold">Projects</h2>
          <MyProjects />
        </div>
        <div class="mt-[6vh] md:mt-0" />
      </div>
    </div>
  );
}
