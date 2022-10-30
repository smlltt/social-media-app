import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VStack } from "@chakra-ui/react";
import { FormErrorMessage, FormControl, Input, Button } from "@chakra-ui/react";
import useValidationSchema from "./validation";
import { AuthFormCardTemplate } from "templates";

interface IFormInputs {
  username: string;
  email: string;
  password: number;
}

const RegisterCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputs>({
    resolver: yupResolver(useValidationSchema()),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <AuthFormCardTemplate
      title={"Register"}
      borderBottomLeftRadius={[0, 0, 16]}
      borderTopRightRadius={[16, 16, 0]}
      borderTopLeftRadius={16}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack alignItems={"start"} spacing={10}>
          <FormControl isInvalid={!!errors.username}>
            <Input
              id={"username"}
              placeholder={"username"}
              {...register("username")}
              pb={3}
            />
            <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
          </FormControl>
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
    </AuthFormCardTemplate>
  );
};

export default RegisterCard;
