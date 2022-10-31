import React from "react";
import { AuthenticatedTemplate } from "templates";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <AuthenticatedTemplate>
      <Box>main content</Box>
    </AuthenticatedTemplate>
  );
};

export default Home;
