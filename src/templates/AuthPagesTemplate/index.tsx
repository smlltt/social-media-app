import React, { FC, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface AuthPagesTemplateProps {
  children: ReactNode;
}

const AuthPagesTemplate: FC<AuthPagesTemplateProps> = ({ children }) => {
  return (
    <Flex
      bg={"loginBg.100"}
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={["flex", "flex", "center"]}
      px={[5, 50, 100, 200, 300]}
      flexWrap={"wrap"}
    >
      <Flex flexDirection={["column", "column", "row"]} py={10}>
        {children}
      </Flex>
    </Flex>
  );
};

export default AuthPagesTemplate;
