import React, { FC, ReactNode, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Nav, NavSmallScreens, LeftBar } from "components/organisms";
import { customScrollBarStyle } from "theme";
import { Menu } from "react-feather";

interface AuthenticatedTemplateProps {
  children: ReactNode;
}

const AuthenticatedTemplate: FC<AuthenticatedTemplateProps> = ({
  children,
}) => {
  const [smallMenuVisible, setSmallMenuVisible] = useState(false);
  const displayMenuSmallScreens = smallMenuVisible ? "block" : "none";
  const toggleMenuSmallScreens = () => {
    setSmallMenuVisible(!smallMenuVisible);
  };
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
      {/*  small screens nav - if I put header and content in a single Box, the header's sticky position does not work in phones*/}
      {/*  small nav header */}
      <Flex
        h={20}
        justifyContent={"space-between"}
        borderBottomWidth={1}
        borderBottomStyle={"solid"}
        borderBottomColor={"BlackAlpha"}
        px={10}
        alignItems={"center"}
        position={"sticky"}
        top={0}
        background={"White"}
        zIndex={1}
        display={["flex", "flex", "flex", "none"]}
      >
        <Heading fontSize={24}>Social App</Heading>
        <Box cursor={"pointer"}>
          <Menu onClick={toggleMenuSmallScreens} />
        </Box>
      </Flex>
      {/*  small nav content */}
      <Box
        display={[
          displayMenuSmallScreens,
          displayMenuSmallScreens,
          displayMenuSmallScreens,
          "none",
        ]}
        position={"sticky"}
        top={20}
        h={"calc(100vh - 80px)"}
        overflowY={"hidden"}
        _hover={{
          overflowY: "auto",
        }}
        sx={customScrollBarStyle}
        background={"white"}
      >
        <NavSmallScreens />
      </Box>
      {/*  dashboard content*/}
      <Flex justifyContent={"space-between"}>
        <Box
          display={["none", "none", "none", "block"]}
          w={250}
          pb={10}
          overflowY={"hidden"}
          _hover={{
            overflowY: "auto",
          }}
          sx={customScrollBarStyle}
          position={"sticky"}
          top={20}
          h={"calc(100vh - 80px)"}
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
