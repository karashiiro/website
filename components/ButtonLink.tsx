import { JSX } from "preact";
import { GitHub } from "./GitHub.tsx";

const variants = {
  blue: "bg-blue-300 text-blue-900",
  pink: "bg-pink-300 text-pink-900",
};

export function ButtonLink(
  { href, gh, variant, children }: {
    href: string;
    gh?: string;
    variant?: keyof typeof variants;
    children: (JSX.Element | string)[] | JSX.Element | string;
  },
) {
  return (
    <div
      class={`relative flex rounded-full font-bold text-sm shadow-md hover:shadow-lg ${
        variants[variant ?? "blue"]
      }`}
    >
      <a
        class="rounded-full p-1"
        tabIndex={0}
        href={href}
      >
        <div
          class={`rounded-full pl-2 pr-${
            gh ? 7 : 2
          } py-1 border-dashed border-white border-2 whitespace-nowrap`}
        >
          {children}
        </div>
      </a>
      {gh && (
        <a
          class="absolute rounded-full right-3 top-[0.65rem]"
          tabIndex={gh === href ? -1 : 0}
          href={gh}
        >
          <GitHub size={18} color="rgba(30, 58, 138, var(--tw-text-opacity))" />
        </a>
      )}
    </div>
  );
}
