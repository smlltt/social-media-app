import React, { FC, ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

interface IconAndDescriptionSectionProps {
  icon: ReactNode;
  description: string | ReactNode;
}

const IconAndDescriptionSection: FC<IconAndDescriptionSectionProps> = ({
  icon,
  description,
}) => {
  return (
    <Flex pl={10} pt={5} alignItems={"center"}>
      {icon} <Box ml={5}>{description}</Box>
    </Flex>
  );
};

export default IconAndDescriptionSection;
