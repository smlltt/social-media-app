import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";

const RegisterCard = () => {
  return (
    <VStack
      w={["100%", "100%", "50%"]}
      pt={10}
      pb={[10, 10, 20]}
      pl={10}
      pr={20}
      spacing={10}
      alignItems={"start"}
      borderBottomLeftRadius={[0, 0, 16]}
      borderTopLeftRadius={16}
      borderTopRightRadius={[16, 16, 0]}
      bgImage={
        'linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url("./Eugène_Delacroix_-_La_liberté_guidant_le_peuple.jpg")'
      }
      bgSize={"cover"}
      color={"White"}
    >
      <Heading fontSize={[70, 70, 70, 85]} pr={10}>
        Hello world.
      </Heading>
      <Box fontWeight={"semibold"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan
        elit vel molestie commodo. Nulla sed ornare lorem. Fusce ut odio
        tincidunt, egestas sapien ut, laoreet mi.
      </Box>
      <Box>Don't you have an account?</Box>
      <Button color={"Black"} w={["100%", "100%", "100%", "60%"]}>
        Register
      </Button>
    </VStack>
  );
};

export default RegisterCard;
