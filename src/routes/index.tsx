import { trpc } from "@/router";
import { Box, Heading } from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async ({ context: { trpc, queryClient } }) => {
    await queryClient.prefetchQuery(trpc.games.getList.queryOptions());
  },
});

function Index() {
  const { data } = useSuspenseQuery(trpc.games.getList.queryOptions());

  return (
    <Box>
      <Heading>Welcome Home!</Heading>
      <Box mt={4}>
        <Heading size="md">tRPC Response:</Heading>
        <Box mt={2} p={4} borderWidth={1} borderRadius="md">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Box>
      </Box>
    </Box>
  );
}
