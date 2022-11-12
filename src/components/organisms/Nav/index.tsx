import React from "react";
import { Home, Moon, Grid, User, Mail, Bell, Search } from "react-feather";
import { Flex, Heading, HStack, Input } from "@chakra-ui/react";
import { AvatarWithName } from "components/atoms";

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
        <AvatarWithName
          name={"Jane Doe"}
          avatar={
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </HStack>
    </Flex>
  );
};

export default Nav;
