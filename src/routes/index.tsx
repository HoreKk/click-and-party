import { trpc } from "@/router";
import {
  Box,
  Button,
  Card,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import PlayingCardsIcon from "~icons/fluent/playing-cards-20-filled";
import RocketIcon from "~icons/fluent/rocket-20-regular";
import basicImgUrl from "/placeholder-card-game.webp?url";

export const Route = createFileRoute("/")({
  component: Index,
  loader: async ({ context: { queryClient, trpc } }) => {
    await queryClient.ensureQueryData(trpc.games.getList.queryOptions());
  },
});

function Index() {
  const { data: games } = useSuspenseQuery(trpc.games.getList.queryOptions());

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
            backgroundImage={`url(${basicImgUrl})`}
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
                backdropFilter: "blur(24px)",
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
      <Center flexDir="column" mt={16}>
        <Flex
          borderRadius="full"
          borderWidth={1}
          borderColor="primary"
          w="fit-content"
          pl={3.5}
          pr={4}
          pt={1.5}
          pb={2}
          gap={1}
          bgColor={{ _dark: "transparent", _light: "primary" }}
          color={{ _dark: "primary", _light: "white" }}
        >
          <Icon as={PlayingCardsIcon} boxSize={8} mt="auto" />
          <Text fontSize="3xl" fontWeight={700} lineHeight="normal">
            Jeux
          </Text>
        </Flex>
        <Heading size="2xl" textAlign="center" color="textSecondary" mt={7}>
          Tous nos jeux multijoueurs
        </Heading>
        <Flex flexWrap="wrap" gap={5} mt={9} w="full">
          {games.map((game) => (
            <Card.Root
              key={game.id}
              overflow="hidden"
              borderRadius="2xl"
              w="50%"
            >
              <Image
                src="https://picsum.photos/600/250"
                alt="Green double couch with wooden legs"
                maxH="250px"
              />
              <Card.Body gap={2}>
                <Card.Title>{game.name}</Card.Title>
                <Card.Description>{game.description}</Card.Description>
              </Card.Body>
              <Card.Footer>
                <Button w="full" colorPalette="primaryPalette">
                  Créer un salon
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Flex>
      </Center>
    </Box>
  );
}
