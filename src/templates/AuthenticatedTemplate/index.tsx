import React, { FC, ReactNode, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Nav, NavSmallScreens } from "components";

interface AuthenticatedTemplateProps {
  children: ReactNode;
}

const AuthenticatedTemplate: FC<AuthenticatedTemplateProps> = ({
  children,
}) => {
  const [smallMenuVisible, setSmallMenuVisible] = useState(false);
  return (
    <Box>
      {/*  large screens nav */}
      <Box display={["none", "none", "none", "block"]}>
        <Nav />
      </Box>
      {/*  small screens nav */}
      <Box display={["block", "block", "block", "none"]}>
        <NavSmallScreens
          toggleMenu={() => setSmallMenuVisible(!smallMenuVisible)}
          open={smallMenuVisible}
        />
      </Box>
      <Flex
        justifyContent={"space-between"}
        px={10}
        display={smallMenuVisible ? "none" : "flex"}
      >
        <Box>left bar</Box>
        {children}
        <Box>right bar</Box>
      </Flex>
    </Box>
  );
};

export default AuthenticatedTemplate;
