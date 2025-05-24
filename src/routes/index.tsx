import { trpc } from "@/router";
import { Box, Heading } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data } = useQuery(trpc.test.queryOptions());

  return (
    <Box>
      <Heading>Welcome Home!</Heading>
      <Box mt={4}>
        <Heading size="md">tRPC Response:</Heading>
        <Box mt={2} p={4} borderWidth={1} borderRadius="md">
          {data ?? "Loading..."}
        </Box>
      </Box>
    </Box>
  );
}
