import { Box, Heading } from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Box>
      <Heading>Welcome Home!</Heading>
    </Box>
  );
}
