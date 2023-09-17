import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
    theme: {
      extend: {
        backgroundImage: {
          "profile":
            "url('https://avatars.githubusercontent.com/u/49822414?v=4')",
        },
        fontFamily: {
          "fancy": ['"Fugaz One"', "cursive"],
        },
      },
    },
  }),
  selfURL: import.meta.url,
};
