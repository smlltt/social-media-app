import React, { FC } from "react";
import { Box, Divider, Input, VStack } from "@chakra-ui/react";
import { Home, Moon, Grid, User, Mail, Bell, Search } from "react-feather";
import { IconAndDescriptionSection } from "components/atoms";
import { LeftBar } from "components/organisms";

const NavSmallScreens: FC = () => {
  return (
    <VStack alignItems={"start"} pb={10} pt={5}>
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
  );
};

export default NavSmallScreens;
