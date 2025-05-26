import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import { createFileRoute } from "@tanstack/react-router";
import RocketIcon from "~icons/fluent/rocket-20-regular";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const fakeReleaseData = [
    { id: 1, name: "The virus game 1.0.4" },
    { id: 2, name: "The virus game 1.0.3" },
    { id: 3, name: "The virus game 1.0.2" },
    { id: 4, name: "The virus game 1.0.1" },
  ];

  return (
    <Box mt={20}>
      <Grid templateColumns="repeat(5, 1fr)" gap={6} p={4}>
        <GridItem colSpan={3}>
          <Card.Root
            borderRadius="2xl"
            h="460px"
            backgroundImage="url('/public/placeholder-card-game.png')"
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Card.Footer
              mt="auto"
              px={10}
              pb={10}
              position="relative"
              borderRadius="2xl"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                inset: 0,
                backdropFilter: "blur(24px)", // Increased blur
                maskImage:
                  "linear-gradient(to bottom, rgba(255,0,0,0), rgba(0,0,0,1))",
                zIndex: 0,
                pointerEvents: "none",
              }}
            >
              <Flex
                flexDir="column"
                position="relative"
                zIndex={1}
                color="white"
              >
                <Heading size="4xl">The virus Game</Heading>
                <Text>
                  Un jeu de déduction sociale palpitant où chaque rôle cache un
                  pouvoir… et un mensonge.
                  <br />
                  Forme des alliances, mène des enquêtes, et déjoue les plans
                  des terroristes avant qu’il ne soit trop tard.
                </Text>
                <Button colorPalette="primaryPalette" mt={4} w="fit-content">
                  Créer un salon
                </Button>
              </Flex>
            </Card.Footer>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={2} h="full">
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            gap={4}
            h="full"
          >
            {fakeReleaseData.map((release) => (
              <Card.Root key={release.id} borderRadius="2xl" flex={1}>
                <Card.Body flexDir="row" alignItems="center">
                  <Flex flexDir="column" w="full">
                    <Text
                      color="textSecondary"
                      textTransform="uppercase"
                      fontWeight={700}
                    >
                      Major Release
                    </Text>
                    <Heading size="md">{release.name}</Heading>
                  </Flex>
                  <Icon as={RocketIcon} color="textSecondary" boxSize={6} />
                </Card.Body>
              </Card.Root>
            ))}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
