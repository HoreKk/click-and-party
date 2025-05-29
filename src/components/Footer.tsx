import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import DiscordIcon from "~icons/simple-icons/discord";
import InstaIcon from "~icons/simple-icons/instagram";
import TiktokIcon from "~icons/simple-icons/tiktok";
import TwitterIcon from "~icons/simple-icons/twitter";
import { CustomLink } from "./CustomLink";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: InstaIcon, url: "https://instagram.com" },
    { name: "Tiktok", icon: TiktokIcon, url: "https://tiktok.com" },
    { name: "Twitter", icon: TwitterIcon, url: "https://twitter.com" },
    { name: "Discord", icon: DiscordIcon, url: "https://discord.com" },
  ];

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Box>
        <Heading color="primary" fontWeight={900} size="xl">
          DEVIL'S GAME
        </Heading>
        <Text color="textSecondary" fontSize="sm">
          @2025
        </Text>
      </Box>
      <Flex flexDir="column" alignItems="end" gap={4}>
        <Flex alignItems="center" gap={5}>
          {socialLinks.map(({ url, icon }) => (
            <CustomLink key={url} to={url} target="_blank">
              <Box p={2} borderRadius="full" bgColor="uiGray">
                <Icon as={icon} display="block" />
              </Box>
            </CustomLink>
          ))}
        </Flex>
        <Flex alignItems="center" gap={5}>
          <Text color="textSecondary" fontSize="sm">
            Terms of Service
          </Text>
          <Text color="textSecondary" fontSize="sm">
            Community Guidelines
          </Text>
          <Text color="textSecondary" fontSize="sm">
            Privacy Policy
          </Text>
          <Text color="textSecondary" fontSize="sm">
            Guideback
          </Text>
          <Text color="textSecondary" fontSize="sm">
            Support
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
