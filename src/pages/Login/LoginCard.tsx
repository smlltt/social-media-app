import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { VStack } from "@chakra-ui/react";
import { FormErrorMessage, FormControl, Input, Button } from "@chakra-ui/react";
import useValidationSchema from "./validation";
import { AuthFormCardTemplate } from "templates";
import { useAuth } from "hooks";
import routes from "routes";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { setUser } = useAuth();
  //TODO logic to be updated when backend available
  const onSubmit = (data: IFormInputs) => {
    setUser({ email: data.email });
    navigate(routes.home);
  };

  return (
    <AuthFormCardTemplate
      title={"Login"}
      borderBottomRightRadius={16}
      borderTopRightRadius={[0, 0, 16]}
      borderBottomLeftRadius={[16, 16, 0]}
    >
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
            w={["100%", "100%", "100%", "60%"]}
            variant={"primary"}
          >
            Submit
          </Button>
        </VStack>
      </form>
    </AuthFormCardTemplate>
  );
};

export default LoginCard;
