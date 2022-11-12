import React from "react";
import { Box, Button, HStack } from "@chakra-ui/react";
import { X } from "react-feather";
import CardTemplate from "./CardTemplate";
import CardItem from "./CardItem";

const SuggestionsCard = () => {
  //TODO will be available via query
  const suggestedForYou = Array.from(Array(3), () => ({
    name: "John Doe",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }));
  return (
    <CardTemplate title={"Suggestions for you"}>
      {suggestedForYou.map(({ name, avatar }, index) => (
        <CardItem index={index} name={name} avatar={avatar}>
          <HStack flexWrap={"wrap"} justifyContent={"space-around"}>
            <Box py={1}>
              <Button variant={"primary"}>follow</Button>
            </Box>
            <Button>
              <X />
            </Button>
          </HStack>
        </CardItem>
      ))}
    </CardTemplate>
  );
};

export default SuggestionsCard;
