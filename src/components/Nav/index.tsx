import React from "react";
import { Home, Moon, Grid, User, Mail, Bell, Search } from "react-feather";
import { Box, Flex, Heading, HStack, Input } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      h={20}
      justifyContent={"space-between"}
      borderBottomWidth={1}
      borderBottomStyle={"solid"}
      borderBottomColor={"BlackAlpha"}
      px={10}
    >
      <HStack spacing={30}>
        <Heading fontSize={24}>Social App</Heading>
        <Home />
        <Moon />
        <Grid />
        <HStack>
          <Search />
          <Input />
        </HStack>
      </HStack>

      <HStack spacing={30}>
        <User />
        <Mail />
        <Bell />
        <Box>John Doe</Box>
      </HStack>
    </Flex>
  );
};

export default Nav;
