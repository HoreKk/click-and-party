import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        white: { value: "#E1E4F7" },
        black: { value: "#0A0F1B" },
        primary: { value: "#4965f8" },
        primaryPalette: {
          50: { value: "#edf4ff" },
          100: { value: "#deebff" },
          200: { value: "#c4d8ff" },
          300: { value: "#a0beff" },
          400: { value: "#7b99fe" },
          600: { value: "#3d4cee" },
          700: { value: "#303ad2" },
          800: { value: "#2a34a9" },
          900: { value: "#293286" },
          950: { value: "#181b4e" },
        },
        secondary: { value: "#2c5282" },
        uiGray: { value: "#524F60" },
      },
    },
    semanticTokens: {
      colors: {
        textSecondary: {
          value: {
            base: "#6B7280",
            _dark: "#9BA1C4",
          },
        },
        primaryPalette: {
          solid: { value: "{colors.primary}" },
          contrast: { value: "{colors.primaryPalette.100}" },
          fg: { value: "{colors.primaryPalette.700}" },
          muted: { value: "{colors.primaryPalette.100}" },
          subtle: { value: "{colors.primaryPalette.200}" },
          emphasized: { value: "{colors.primaryPalette.300}" },
          focusRing: { value: "{colors.primary}" },
        },
        border: {
          value: "{colors.uiGray}",
        },
      },
      gradients: {
        defaultPrimary: {
          value: {
            base: "linear-gradient(to bottom, {colors.primaryPalette.300}, {colors.white})",
            _dark: "linear-gradient(to bottom, #19284E, {colors.black})",
          },
        },
        defaultCard: {
          value: "linear-gradient(to right, #3A3A3A, #898989)",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
