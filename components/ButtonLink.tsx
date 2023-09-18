import { ComponentChildren } from "preact";

const variants = {
  blue: "bg-blue-300 text-blue-900",
  pink: "bg-pink-300 text-pink-900",
};

const variantDefault = "blue";

export function ButtonLink(
  { href, variant, children }: {
    href: string;
    variant?: keyof typeof variants;
    children: ComponentChildren;
  },
) {
  return (
    <div class="flex rounded-full shadow-md hover:shadow-lg duration-100 font-bold text-sm text-center">
      <a
        class={`rounded-full p-1 ${variants[variant ?? variantDefault]}`}
        tabIndex={0}
        href={href}
      >
        <div class="rounded-full px-2 py-1 border-dashed border-white border-2 whitespace-nowrap">
          {children}
        </div>
      </a>
    </div>
  );
}
