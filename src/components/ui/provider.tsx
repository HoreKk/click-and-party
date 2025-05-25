"use client";

import { system } from "@/utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="dark" {...props} />
    </ChakraProvider>
  );
}
