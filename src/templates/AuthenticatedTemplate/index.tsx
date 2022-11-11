import React, { FC, ReactNode, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { Nav, NavSmallScreens, LeftBar, RightBar } from "components/organisms";
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
        // here position fixed is good, because I want the side bar out of the normal flow. I don't want it to push the dashboard's content anywhere
        // compare with the comments to the LeftBar on big screens wrapper below
        position={"fixed"}
        top={20}
        h={"calc(100vh - 80px)"}
        overflowY={"hidden"}
        _hover={{
          overflowY: "auto",
        }}
        sx={customScrollBarStyle}
        background={"white"}
        w={["100%", "100%", "auto"]}
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
          // here position fixed does not achieve what we want, because position: fixed and position: absolute take elements out of the normal flow,
          // so other element do not know that this box is there, so to speak. uncomment to see the effect
          // position={"fixed"}
          position={"sticky"}
          top={20}
          h={"calc(100vh - 80px)"}
          left={0}
        >
          <LeftBar />
        </Box>
        <Flex bg={"dashboardBg.100"} flexGrow={1} justifyContent={"center"}>
          {children}
        </Flex>
        <Box
          bg={"dashboardBg.100"}
          w={"22%"}
          display={["none", "none", "none", "block"]}
        >
          <RightBar />
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthenticatedTemplate;
