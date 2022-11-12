import React, { FC } from "react";
import { Avatar, Box, BoxProps, HStack } from "@chakra-ui/react";

interface AvatarWithNameProps {
  name: string;
  avatar: string;
  nameWrapperProps?: BoxProps;
  showOnlineStatus?: boolean;
}

const AvatarWithName: FC<AvatarWithNameProps> = ({
  name,
  avatar,
  nameWrapperProps,
  showOnlineStatus,
}) => {
  return (
    <HStack position={"relative"}>
      <Avatar name={name} src={avatar} />
      {showOnlineStatus && (
        <Box
          w={3}
          h={3}
          borderRadius={"50%"}
          backgroundColor={"green.400"}
          position={"absolute"}
          top={0}
          left={7}
        />
      )}

      <Box fontWeight={"semibold"} {...nameWrapperProps}>
        {name}
      </Box>
    </HStack>
  );
};

export default AvatarWithName;
