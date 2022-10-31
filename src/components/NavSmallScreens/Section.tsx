import React, { FC, ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

interface SectionProps {
  icon: ReactNode;
  description: string | ReactNode;
}

const Section: FC<SectionProps> = ({ icon, description }) => {
  return (
    <Flex pl={10} pt={5}>
      {icon} <Box ml={5}>{description}</Box>
    </Flex>
  );
};

export default Section;
