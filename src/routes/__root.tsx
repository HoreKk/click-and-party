import Navbar from "@/components/Navbar";
import { Box, Container } from "@chakra-ui/react";
import type { QueryClient } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { TRPCOptionsProxy } from "@trpc/tanstack-react-query";
import type { AppRouter } from "../../worker/trpc/router";

export interface RouterAppContext {
  trpc: TRPCOptionsProxy<AppRouter>;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: () => (
    <>
      <Navbar />
      <Box
        position="absolute"
        top="72px"
        left={0}
        width="100vw"
        height="calc(100% - 72px)"
        backgroundGradient="defaultPrimary"
        zIndex={-1}
      />
      <Container minH="calc(100% - 72px)" overflowY="auto">
        <Outlet />
      </Container>
    </>
  ),
});
