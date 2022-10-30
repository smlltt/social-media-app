import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Heading, VStack } from "@chakra-ui/react";
import { FormErrorMessage, FormControl, Input, Button } from "@chakra-ui/react";
import useValidationSchema from "./validation";

interface IFormInputs {
  email: string;
  password: number;
}

const LoginCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(useValidationSchema()),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <Flex
      px={10}
      w={["100%", "100%", "50%"]}
      bg={"White"}
      borderBottomRightRadius={16}
      borderTopRightRadius={[0, 0, 16]}
      borderBottomLeftRadius={[16, 16, 0]}
      flexDirection={"column"}
      justifyContent={"center"}
      py={[10, 10, 20]}
    >
      <Heading mb={[10, 10, 20]}>Login</Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack alignItems={"start"} spacing={10}>
          <FormControl isInvalid={!!errors.email}>
            <Input
              id={"email"}
              placeholder={"example@email.com"}
              {...register("email")}
              pb={3}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password?.message}>
            <Input
              id={"password"}
              placeholder={"password"}
              {...register("password")}
              pb={3}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button
            type="submit"
            isLoading={isSubmitting}
            bg={"loginBg.100"}
            w={["100%", "100%", "100%", "60%"]}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </Flex>
  );
};

export default LoginCard;
