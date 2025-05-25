import Navbar from "@/components/Navbar";
import { Container } from "@chakra-ui/react";
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
      <Container mt={8}>
        <Outlet />
      </Container>
    </>
  ),
});
