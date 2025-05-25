import { Box, Button, Container, Flex, Icon } from "@chakra-ui/react";
import BoardGamesIcon from "~icons/fluent/board-games-20-filled";
import HomeIcon from "~icons/fluent/home-16-filled";
import PlayIcon from "~icons/fluent/play-20-filled";
import { CustomLink } from "./CustomLink";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  return (
    <Box bgColor="uiBg">
      <Container maxW="container.xl" py={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center" gap={6}>
            <CustomLink
              to="/"
              fontWeight={500}
              css={{
                "&[data-status='active']": {
                  color: "primary",
                },
              }}
            >
              <Icon as={HomeIcon} /> Accueil
            </CustomLink>
            <CustomLink
              to="/games"
              fontWeight={500}
              css={{ "&[data-status='active']": { color: "primary" } }}
            >
              <Icon as={BoardGamesIcon} /> Jeux
            </CustomLink>
          </Flex>
          <Flex alignItems="center" gap={4}>
            <Button asChild>
              <CustomLink to="/games">
                <PlayIcon />
                Créer un salon
              </CustomLink>
            </Button>
            <ColorModeButton />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
