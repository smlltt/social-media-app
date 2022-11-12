import React, { FC } from "react";
import { Box, Button, Heading, StackProps, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCommonColors } from "../../../hooks";

interface HeroProps extends StackProps {
  backgroundImage: string;
  title: string;
  mainContent: string;
  question: string;
  buttonContent: string;
  buttonLink: string;
}

const Hero: FC<HeroProps> = ({
  backgroundImage,
  title,
  mainContent,
  question,
  buttonContent,
  buttonLink,
  ...rest
}) => {
  const { mainBg, text } = useCommonColors();
  return (
    <VStack
      w={["100%", "100%", "50%"]}
      pt={10}
      pb={[10, 10, 20]}
      pl={10}
      pr={20}
      spacing={10}
      alignItems={"start"}
      background={`linear-gradient(rgba(39, 11, 96, 0.5), rgba(39, 11, 96, 0.5)), url(${backgroundImage}) center`}
      bgSize={"cover"}
      color={"White"}
      {...rest}
    >
      <Heading fontSize={[70, 70, 70, 85]} pr={10}>
        {title}
      </Heading>
      <Box fontWeight={"semibold"}>{mainContent}</Box>
      <Box>{question}</Box>

      <Button w={["100%", "100%", "100%", "60%"]} bg={mainBg} color={text}>
        <Link to={buttonLink} style={{ width: "100%" }}>
          {buttonContent}
        </Link>
      </Button>
    </VStack>
  );
};

export default Hero;
