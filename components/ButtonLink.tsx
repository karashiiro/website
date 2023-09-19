import { ComponentChildren } from "preact";

const variants = {
  blue: "bg-blue-300 text-blue-900",
  pink: "bg-pink-300 text-pink-900",
};

const variantDefault = "blue";

const shapes = {
  pill: "px-2 py-1",
  circle: "p-1 aspect-square",
};

const shapeDefault = "pill";

export function ButtonLink(
  { href, variant, shape, children }: {
    href: string;
    variant?: keyof typeof variants;
    shape?: keyof typeof shapes;
    children: ComponentChildren;
  },
) {
  return (
    <div class="flex z-10 rounded-full shadow-md hover:shadow-lg duration-100 font-bold text-sm text-center">
      <a
        class={`rounded-full p-1 ${variants[variant ?? variantDefault]}`}
        tabIndex={0}
        href={href}
      >
        <div
          class={`rounded-full border-dashed border-white border-2 whitespace-nowrap ${
            shapes[shape ?? shapeDefault]
          }`}
        >
          {children}
        </div>
      </a>
    </div>
  );
}
