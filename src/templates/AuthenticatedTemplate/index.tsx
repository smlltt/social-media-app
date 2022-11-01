import React, { FC, ReactNode, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Nav, NavSmallScreens, LeftBar } from "components/organisms";
import { customScrollBarStyle } from "../../theme";

interface AuthenticatedTemplateProps {
  children: ReactNode;
}

const AuthenticatedTemplate: FC<AuthenticatedTemplateProps> = ({
  children,
}) => {
  const [smallMenuVisible, setSmallMenuVisible] = useState(false);
  const displayContent = smallMenuVisible ? "none" : "flex";
  return (
    <Box>
      {/*  large screens nav */}
      <Box
        display={["none", "none", "none", "block"]}
        position={"sticky"}
        top={0}
        background={"White"}
      >
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
        display={[displayContent, displayContent, displayContent, "flex"]}
      >
        <Box
          display={["none", "none", "none", "block"]}
          w={250}
          pb={10}
          position={"sticky"}
          top={20}
          h={"calc(100vh - 100px)"}
          overflowY={"hidden"}
          _hover={{
            overflowY: "auto",
          }}
          sx={customScrollBarStyle}
        >
          <LeftBar />
        </Box>
        {children}
        <Box w={250} background={"red"}>
          right bar
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthenticatedTemplate;
