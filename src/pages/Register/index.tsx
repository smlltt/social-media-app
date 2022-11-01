import React from "react";
import { AuthPagesTemplate } from "templates";
import { Hero } from "components/organisms";
import routes from "routes";
import RegisterCard from "./RegisterCard";

const Register = () => {
  return (
    <AuthPagesTemplate>
      <RegisterCard />
      <Hero
        borderBottomLeftRadius={[16, 16, 0]}
        borderTopRightRadius={[0, 0, 16]}
        borderBottomRightRadius={16}
        backgroundImage={
          "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
        title={"Social app"}
        mainContent={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan elit vel molestie commodo. Nulla sed ornare lorem. Fusce ut odio tincidunt, egestas sapien ut, laoreet mi."
        }
        question={"Do you have an account?"}
        buttonContent={"Login"}
        buttonLink={routes.login}
      />
    </AuthPagesTemplate>
  );
};

export default Register;
