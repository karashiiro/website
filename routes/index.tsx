import { ComponentChildren, JSX } from "preact";
import { ButtonLink } from "../components/ButtonLink.tsx";
import { Profile } from "../components/Profile.tsx";
import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";
import IconBrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-twitter.tsx";

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
  props: ExtractProps<typeof ButtonLink>,
) => {
  return (
    <li class="mr-3 mb-3">
      <ButtonLink {...props} />
    </li>
  );
};

function MyLinks() {
  return (
    <nav class="m-auto md:ml-4 max-w-xs md:max-w-sm divide-dashed divide-y-2">
      <div class="flex flex-row space-x-1">
        <ButtonLink shape="circle" href="https://github.com/karashiiro">
          <IconBrandGithub />
        </ButtonLink>
        <ButtonLink shape="circle" href="https://twitter.com/karashiiro1">
          <IconBrandTwitter />
        </ButtonLink>
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
        <div class="relative flex space-x-3 mt-1">
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
          <ButtonLink href="https://universalis.app">
            Website
          </ButtonLink>
          <ButtonLink href="https://github.com/Universalis-FFXIV/Universalis">
            Repo
          </ButtonLink>
          <div class="absolute right-3 bottom-0 space-x-1 text-lg">
            <i class="devicon-csharp-plain" />
            <i class="devicon-typescript-plain" />
            <i class="devicon-rust-plain" />
          </div>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="XIV Resources"
          description="A list of websites, APIs, and tools for FFXIV."
        >
          <ButtonLink href="https://karashiiro.github.io/xiv-resources/">
            Website
          </ButtonLink>
          <ButtonLink href="https://github.com/karashiiro/xiv-resources">
            Repo
          </ButtonLink>
          <div class="absolute right-3 bottom-0 space-x-1 text-lg">
            <i class="devicon-javascript-plain" />
          </div>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="Lodestone When"
          description="Estimate when a FFXIV character was created with just its Lodestone ID!"
        >
          <ButtonLink href="https://karashiiro.github.io/lodestone-when/">
            Website
          </ButtonLink>
          <ButtonLink href="https://github.com/karashiiro/lodestone-id-time">
            Repo
          </ButtonLink>
          <div class="absolute right-3 bottom-0 space-x-1 text-lg">
            <i class="devicon-go-plain" />
            <i class="devicon-python-plain" />
            <i class="devicon-javascript-plain" />
          </div>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="PSO2 Patch File Viewer"
          description="Simple patch file viewer for PSO2."
        >
          <ButtonLink href="https://karashiiro.github.io/patch-tool">
            Website
          </ButtonLink>
          <ButtonLink href="https://github.com/karashiiro/patch-tool">
            Repo
          </ButtonLink>
          <div class="absolute right-3 bottom-0 space-x-1 text-lg">
            <i class="devicon-typescript-plain" />
            <i class="devicon-python-plain" />
          </div>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="twitter-scraper"
          description="A port of n0madic's Go Twitter scraping library to Node.js."
        >
          <ButtonLink href="https://www.npmjs.com/package/@the-convocation/twitter-scraper">
            npm
          </ButtonLink>
          <ButtonLink href="https://github.com/the-convocation/twitter-scraper">
            Repo
          </ButtonLink>
          <div class="absolute right-3 bottom-0 space-x-1 text-lg">
            <i class="devicon-typescript-plain" />
          </div>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="Gittlz"
          description="A Git server for the laziest of us. Write and test your Git utilities without any hassle."
        >
          <ButtonLink href="https://hub.docker.com/r/karashiiro/gittlz">
            Docker Hub
          </ButtonLink>
          <ButtonLink href="https://github.com/karashiiro/gittlz">
            Repo
          </ButtonLink>
          <div class="absolute right-3 bottom-0 space-x-1 text-lg">
            <i class="devicon-go-plain" />
          </div>
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
          <div class="row-span-1">
            <div class="my-3 md:ml-2 md:mt-[12vh] space-y-3">
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
        <div class="mt-2 md:mt-10 px-4 md:px-10">
          <h2 class="text-xl font-fancy font-semibold">Projects</h2>
          <MyProjects />
        </div>
        <div class="mt-[6vh] md:mt-0" />
      </div>
    </div>
  );
}
