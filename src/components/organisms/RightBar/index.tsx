import React from "react";
import { Box } from "@chakra-ui/react";
import SuggestionsCard from "./SuggestionsCard";
import ActivitiesCard from "./ActivitiesCard";
import FriendsCard from "./FriendsCard";

const RightBar = () => {
  return (
    <Box p={3}>
      <SuggestionsCard />
      <Box py={1.5} />
      <ActivitiesCard />
      <Box py={1.5} />
      <FriendsCard />
    </Box>
  );
};

export default RightBar;
