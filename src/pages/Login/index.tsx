import React from "react";
import LoginCard from "./LoginCard";
import { Hero } from "components/organisms";
import routes from "routes";
import { AuthPagesTemplate } from "templates";

const Login = () => {
  return (
    <AuthPagesTemplate>
      <Hero
        borderBottomLeftRadius={[0, 0, 16]}
        borderTopLeftRadius={16}
        borderTopRightRadius={[16, 16, 0]}
        backgroundImage={
          "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600g"
        }
        title={"Hello world."}
        mainContent={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elit vel molestie commodo. Nulla sed ornare lorem. Fusce ut odio tincidunt, egestas sapien ut, laoreet mi."
        }
        question={"Don't you have an account?"}
        buttonContent={"Register"}
        buttonLink={routes.register}
      />
      <LoginCard />
    </AuthPagesTemplate>
  );
};

export default Login;
