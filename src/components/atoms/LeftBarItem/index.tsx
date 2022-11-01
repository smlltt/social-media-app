import React, { FC } from "react";
import { IconAndDescriptionSection } from "../index";
import { Box } from "@chakra-ui/react";
import { Icon } from "react-feather";

interface LeftBarItemProps {
  Icon: Icon;
  description: string;
}

const LeftBarItem: FC<LeftBarItemProps> = ({ Icon, description }) => {
  return (
    <IconAndDescriptionSection
      icon={
        <Box background={"primary.200"} borderRadius={"50%"} p={2}>
          <Icon color={"White"} />
        </Box>
      }
      description={description}
    />
  );
};

export default LeftBarItem;
