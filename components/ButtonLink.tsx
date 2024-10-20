import { ComponentChildren } from "preact";

const shapes = {
  pill: "px-2 py-1",
  circle: "p-1 aspect-square",
};

const shapeDefault = "pill";

export function ButtonLink(
  { href, ariaLabel, shape, children }: {
    href: string;
    ariaLabel: string;
    shape?: keyof typeof shapes;
    children: ComponentChildren;
  },
) {
  return (
    <div class="flex z-10 rounded-full shadow-md hover:shadow-lg duration-100 font-bold text-sm text-center">
      <a
        class="rounded-full p-1 bg-blue-300 text-blue-900"
        aria-label={ariaLabel}
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
