import { Flex, Link } from "@chakra-ui/react";
import {
  Outlet,
  Link as TanstackLink,
  createRootRoute,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Flex alignItems="center" gap={4} mb={4}>
        <Link asChild _active={{ fontWeight: "bold" }}>
          <TanstackLink to="/">Home</TanstackLink>
        </Link>
        <Link asChild _active={{ fontWeight: "bold" }}>
          <TanstackLink to="/about">About</TanstackLink>
        </Link>
      </Flex>
      <hr />
      <Outlet />
    </>
  ),
});
