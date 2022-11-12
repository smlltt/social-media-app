import React, { FC, ReactNode } from "react";
import { Stack } from "@chakra-ui/react";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <Stack bg={"White"} p={4} spacing={5} boxShadow="base" rounded={"md"}>
      {children}
    </Stack>
  );
};

export default Card;
