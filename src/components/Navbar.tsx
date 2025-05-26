import { Box, Button, Container, Flex, Heading, Icon } from "@chakra-ui/react";
import BoardGamesIcon from "~icons/fluent/board-games-20-filled";
import HomeIcon from "~icons/fluent/home-16-filled";
import PlayIcon from "~icons/fluent/play-20-filled";
import { CustomLink } from "./CustomLink";
import { ColorModeButton } from "./ui/color-mode";

const Navbar = () => {
  const navActiveLink = {
    "&[data-status='active']": {
      color: "primary",
      _after: {
        content: '""',
        position: "absolute",
        bottom: -6,
        left: 0,
        width: "100%",
        height: "1px",
        backgroundColor: "primary",
      },
    },
  };

  return (
    <Box>
      <Container maxW="container.xl" py={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <CustomLink to="/" mr={4}>
              <Heading color="primary" fontWeight={900} size="xl">
                DEVIL'S GAME
              </Heading>
            </CustomLink>
            <CustomLink
              to="/"
              fontWeight={500}
              position="relative"
              pl={3.5}
              pr={4}
              css={navActiveLink}
            >
              <Icon as={HomeIcon} /> Accueil
            </CustomLink>
            <CustomLink
              to="/games"
              fontWeight={500}
              position="relative"
              pl={3.5}
              pr={4}
              css={navActiveLink}
            >
              <Icon as={BoardGamesIcon} /> Jeux
            </CustomLink>
          </Flex>
          <Flex alignItems="center" gap={4}>
            <Button colorPalette="primaryPalette" asChild>
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
