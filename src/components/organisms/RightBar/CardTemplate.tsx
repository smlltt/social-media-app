import React, { FC, ReactNode } from "react";
import { Box, Stack } from "@chakra-ui/react";

interface CardTemplateProps {
  children: ReactNode;
  title: string;
}

const CardTemplate: FC<CardTemplateProps> = ({ title, children }) => {
  return (
    <Stack bg={"White"} p={4} spacing={5} boxShadow="base" rounded={"md"}>
      <Box color={"textSecondary.100"} fontWeight={"600"}>
        {title}
      </Box>
      {children}
    </Stack>
  );
};

export default CardTemplate;
