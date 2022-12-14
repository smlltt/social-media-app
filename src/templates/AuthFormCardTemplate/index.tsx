import React, { FC, ReactNode } from "react";
import { Flex, FlexProps, Heading } from "@chakra-ui/react";
import { useCommonColors } from "hooks";

interface AuthFormCardTemplateProps extends FlexProps {
  title: string;
  children: ReactNode;
}

const AuthFormCardTemplate: FC<AuthFormCardTemplateProps> = ({
  title,
  children,
  ...rest
}) => {
  const { mainBg } = useCommonColors();
  return (
    <Flex
      px={10}
      w={["100%", "100%", "50%"]}
      bg={mainBg}
      {...rest}
      flexDirection={"column"}
      justifyContent={"center"}
      py={[10, 10, 20]}
    >
      <Heading mb={[10, 10, 20]}>{title}</Heading>
      {children}
    </Flex>
  );
};

export default AuthFormCardTemplate;
