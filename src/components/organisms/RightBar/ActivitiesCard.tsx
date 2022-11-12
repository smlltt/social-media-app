import React from "react";
import CardTemplate from "./CardTemplate";
import CardItem from "./CardItem";
import { Box, Flex, HStack } from "@chakra-ui/react";

const ActivitiesCard = () => {
  //TODO will be available via query
  const latestActivities = Array.from(Array(3), () => ({
    name: "John Doe",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    activity: "changed cover picture",
    time: "1 min ago",
  }));
  return (
    <CardTemplate title={"Latest activities"}>
      {latestActivities.map(({ name, avatar, activity, time }, index) => (
        <CardItem index={index} name={name} avatar={avatar} key={index}>
          <HStack flexGrow={1}>
            <Flex flexGrow={1} pl={1}>
              {activity}
            </Flex>
            {/*TODO when I have real date, here I will have a function to get the time*/}
            <Box>{time}</Box>
          </HStack>
        </CardItem>
      ))}
    </CardTemplate>
  );
};

export default ActivitiesCard;
