import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        uiBgWhite: {
          value: "#E1E4F7",
        },
        uiBgBlack: {
          value: "#0A0F1B",
        },
        primary: {
          value: "#4965F8",
        },
        secondary: {
          value: "#2c5282",
        },
      },
    },
    semanticTokens: {
      colors: {
        uiBg: {
          value: {
            base: "{colors.uiBgWhite}",
            _dark: "{colors.uiBgBlack}",
          },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
