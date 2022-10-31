import React, { FC } from "react";
import { Box, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { Menu } from "react-feather";
import { Home, Moon, Grid, User, Mail, Bell, Search } from "react-feather";
import Section from "./Section";

interface NavSmallScreensProps {
  toggleMenu: () => void;
  open: boolean;
}

const NavSmallScreens: FC<NavSmallScreensProps> = ({ toggleMenu, open }) => {
  return (
    <Box>
      <Flex
        h={20}
        justifyContent={"space-between"}
        borderBottomWidth={1}
        borderBottomStyle={"solid"}
        borderBottomColor={"BlackAlpha"}
        px={10}
        alignItems={"center"}
      >
        <Heading fontSize={24}>Social App</Heading>
        <Box cursor={"pointer"}>
          <Menu onClick={toggleMenu} />
        </Box>
      </Flex>
      <VStack
        alignItems={"start"}
        display={open ? "flex" : "none"}
        pb={10}
        pt={5}
      >
        <Section icon={<Home />} description={"Home"} />
        <Section icon={<Moon />} description={"Dark mode"} />
        <Section icon={<Grid />} description={"Menu"} />
        <Section icon={<Search />} description={<Input maxW={200} />} />
        <Section icon={<User />} description={"Account"} />
        <Section icon={<Mail />} description={"Messages"} />
        <Section icon={<Bell />} description={"Notifications"} />
      </VStack>
    </Box>
  );
};

export default NavSmallScreens;
