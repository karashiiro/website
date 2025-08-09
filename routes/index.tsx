import { ComponentChildren, JSX } from "preact";
import { ButtonLink } from "../components/ButtonLink.tsx";
import { Profile } from "../components/Profile.tsx";
import IconBrandBluesky from "tabler_icons_tsx/tsx/brand-bluesky.tsx";
import IconBrandGithub from "tabler_icons_tsx/tsx/brand-github.tsx";
import IconBrandMastodon from "tabler_icons_tsx/tsx/brand-mastodon.tsx";
import IconCurrencyDollar from "tabler_icons_tsx/tsx/currency-dollar.tsx";

type ExtractProps<T> = T extends (props: infer U) => JSX.Element ? U : never;

function ButtonLinkList({ children }: {
  children: ComponentChildren;
}) {
  return (
    <ul class="flex flex-wrap -mr-3 -mb-3 sm:ml-4 list-none list-inside">
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
    <nav class="flex flex-row place-content-evenly sm:place-content-start space-x-1">
      <ButtonLink shape="circle" href="https://github.com/karashiiro" ariaLabel="GitHub profile">
        <IconBrandGithub />
      </ButtonLink>
      <ButtonLink shape="circle" href="https://bsky.app/profile/karashiiro.moe" ariaLabel="Bluesky profile">
        <IconBrandBluesky />
      </ButtonLink>
      <ButtonLink shape="circle" href="https://dogno.se/@karashiiro" ariaLabel="Mastodon profile">
        <IconBrandMastodon />
      </ButtonLink>
      <ButtonLink shape="circle" href="https://ko-fi.com/karashiiro" ariaLabel="Ko-fi page">
        <IconCurrencyDollar />
      </ButtonLink>
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
  const langClasses =
    "absolute inline-grid grid-rows-2 grid-cols-3 -right-1 bottom-0 text-lg";
  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div class="mt-2 p-1">
        <ProjectCard
          name="Universalis"
          description="A crowdsourced market board API for FFXIV."
        >
          <div class={langClasses}>
            <i />
            <i title="C#" class="devicon-csharp-plain" />
            <i title="TypeScript" class="devicon-typescript-plain" />
            <i title="Next.js" class="devicon-nextjs-plain" />
            <i title="Rust" class="devicon-rust-plain" />
            <i title="Docker" class="devicon-docker-plain" />
          </div>
          <ButtonLink href="https://universalis.app" ariaLabel="Universalis">
            Website
          </ButtonLink>
          <ButtonLink href="https://github.com/Universalis-FFXIV/Universalis" ariaLabel="Universalis GitHub repository">
            Repo
          </ButtonLink>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="XIV Resources"
          description="A list of websites, APIs, and tools for FFXIV."
        >
          <div class={langClasses}>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i title="JavaScript" class="devicon-javascript-plain" />
          </div>
          <ButtonLink href="https://karashiiro.github.io/xiv-resources/" ariaLabel="XIV Resources">
            Website
          </ButtonLink>
          <ButtonLink href="https://github.com/karashiiro/xiv-resources" ariaLabel="XIV Resources GitHub repository">
            Repo
          </ButtonLink>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="Lodestone When"
          description="Estimate when a FFXIV character was created with just its Lodestone ID!"
        >
          <div class={langClasses}>
            <i />
            <i />
            <i />
            <i title="Go" class="devicon-go-plain" />
            <i title="Python" class="devicon-python-plain" />
            <i title="JavaScript" class="devicon-javascript-plain" />
          </div>
          <ButtonLink href="https://karashiiro.github.io/lodestone-when/" ariaLabel="Lodestone When">
            Website
          </ButtonLink>
          <ButtonLink href="https://github.com/karashiiro/lodestone-id-time" ariaLabel="Lodestone When GitHub repository">
            Repo
          </ButtonLink>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="PSO2 Patch File Viewer"
          description="Simple patch file viewer for PSO2."
        >
          <div class={langClasses}>
            <i />
            <i />
            <i title="TypeScript" class="devicon-typescript-plain" />
            <i title="React" class="devicon-react-plain" />
            <i title="Python" class="devicon-python-plain" />
            <i
              title="Amazon Web Services"
              class="devicon-amazonwebservices-plain"
            />
          </div>
          <ButtonLink href="https://karashiiro.github.io/patch-tool" ariaLabel="PSO2 Patch Tool">
            Website
          </ButtonLink>
          <ButtonLink href="https://github.com/karashiiro/patch-tool" ariaLabel="PSO2 Patch Tool GitHub repository">
            Repo
          </ButtonLink>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="twitter-scraper"
          description="A port of n0madic's Go Twitter scraping library to Node.js."
        >
          <div class={langClasses}>
            <i />
            <i />
            <i />
            <i />
            <i />
            <i title="TypeScript" class="devicon-typescript-plain" />
          </div>
          <ButtonLink href="https://www.npmjs.com/package/@the-convocation/twitter-scraper" ariaLabel="Twitter Scraper NPM package">
            npm
          </ButtonLink>
          <ButtonLink href="https://github.com/the-convocation/twitter-scraper" ariaLabel="Twitter Scraper GitHub repository">
            Repo
          </ButtonLink>
        </ProjectCard>
      </div>
      <div class="mt-2 p-1">
        <ProjectCard
          name="Gittlz"
          description="A Git server for the laziest of us. Write and test your Git utilities without any hassle."
        >
          <div class={langClasses}>
            <i />
            <i />
            <i />
            <i title="Go" class="devicon-go-plain" />
            <i title="Git" class="devicon-git-plain" />
            <i title="Docker" class="devicon-docker-plain" />
          </div>
          <ButtonLink href="https://hub.docker.com/r/karashiiro/gittlz" ariaLabel="Gittlz Docker image">
            Docker Hub
          </ButtonLink>
          <ButtonLink href="https://github.com/karashiiro/gittlz" ariaLabel="Gittlz GitHub repository">
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
        <div class="mt-[6vh] sm:mt-[16vh]" />
        <div class="grid grid-cols-1 sm:grid-cols-2 items-end">
          <div class="row-span-2">
            <div class="mx-auto h-72 aspect-square">
              <Profile />
            </div>
          </div>
          <div class="row-span-1">
            <div class="my-3 sm:ml-12 sm:mt-18">
              <h1
                id="karashiiro"
                class="text-4xl font-fancy font-semibold text-center sm:text-start"
              >
                karashiiro
              </h1>
            </div>
          </div>
          <div class="row-span-1 self-start">
            <div class="sm:ml-20">
              <MyLinks />
            </div>
          </div>
        </div>
        <div class="mt-2 sm:mt-10 px-4 sm:px-10">
          <h2 class="text-xl font-fancy font-semibold">Projects</h2>
          <MyProjects />
        </div>
        <div class="mt-[6vh] sm:mt-0" />
      </div>
    </div>
  );
}
