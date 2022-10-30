import React from "react";
import { Flex } from "@chakra-ui/react";
import RegisterCard from "./RegisterCard";
import LoginCard from "./LoginCard";

const Login = () => {
  return (
    <Flex
      bg={"loginBg.100"}
      minHeight={"100vh"}
      justifyContent={"center"}
      alignItems={["flex", "flex", "center"]}
      px={[5, 50, 100, 200, 300]}
      flexWrap={"wrap"}
    >
      <Flex flexDirection={["column", "column", "row"]} py={[10, 10, 0]}>
        <RegisterCard />
        <LoginCard />
      </Flex>
    </Flex>
  );
};

export default Login;
