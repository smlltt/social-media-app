import React from "react";
import { Home, Moon, Grid, User, Mail, Bell, Search } from "react-feather";
import { Avatar, Box, Flex, Heading, HStack, Input } from "@chakra-ui/react";

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
        <HStack>
          <Avatar
            name={"Jane Doe"}
            src={
              "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          <Box fontWeight={"semibold"}>Jane Doe</Box>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Nav;
