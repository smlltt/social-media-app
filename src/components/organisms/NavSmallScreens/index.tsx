import React, { FC } from "react";
import { Box, Divider, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { Menu } from "react-feather";
import { Home, Moon, Grid, User, Mail, Bell, Search } from "react-feather";
import { IconAndDescriptionSection } from "components/atoms";
import { LeftBar } from "components/organisms";

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
        position={"sticky"}
        top={0}
        background={"White"}
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
        <IconAndDescriptionSection icon={<Home />} description={"Home"} />
        <IconAndDescriptionSection icon={<Moon />} description={"Dark mode"} />
        <IconAndDescriptionSection icon={<Grid />} description={"Menu"} />
        <IconAndDescriptionSection
          icon={<Search />}
          description={<Input maxW={200} />}
        />
        <IconAndDescriptionSection icon={<User />} description={"Account"} />
        <IconAndDescriptionSection icon={<Mail />} description={"Messages"} />
        <IconAndDescriptionSection
          icon={<Bell />}
          description={"Notifications"}
        />
        <Box w={250} pb={10} pt={5}>
          <Divider />
          <LeftBar />
        </Box>
      </VStack>
    </Box>
  );
};

export default NavSmallScreens;
