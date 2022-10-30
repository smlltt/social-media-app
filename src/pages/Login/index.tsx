import React from "react";
import { Box, Button, Heading, Flex, VStack } from "@chakra-ui/react";

const Login = () => {
  return (
    <Flex
      bg={"loginBg.100"}
      h={"100vh"}
      justifyContent={"center"}
      alignItems={["flex", "flex", "center"]}
      px={[5, 50, 100, 200, 400]}
      flexWrap={"wrap"}
    >
      <Flex flexDirection={["column", "column", "row"]} pt={[10, 10, 0]}>
        <VStack
          w={["100%", "100%", "50%"]}
          pt={10}
          pb={20}
          px={10}
          spacing={10}
          alignItems={"start"}
          borderBottomLeftRadius={[0, 0, 16]}
          borderTopLeftRadius={16}
          bgImage={
            'linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("./Eugène_Delacroix_-_La_liberté_guidant_le_peuple.jpg")'
          }
          bgSize={"cover"}
          color={"White"}
        >
          <Heading fontSize={70}>Hello world.</Heading>
          <Box fontWeight={"semibold"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            accumsan elit vel molestie commodo. Nulla sed ornare lorem. Fusce ut
            odio tincidunt, egestas sapien ut, laoreet mi.
          </Box>
          <Box>Don't you have an account?</Box>
          <Button color={"Black"} w={"60%"}>
            Register
          </Button>
        </VStack>
        <Box
          px={10}
          w={["100%", "100%", "50%"]}
          bg={"White"}
          borderBottomRightRadius={[0, 0, 16]}
          borderTopRightRadius={16}
        >
          <Heading>Login</Heading>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Login;
