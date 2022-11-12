import React, { FC, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { AvatarWithName } from "../../atoms";

interface CardItemProps {
  index: number;
  name: string;
  avatar: string;
  children?: ReactNode;
  showOnlineStatus?: boolean;
}

const CardItem: FC<CardItemProps> = ({
  index,
  name,
  avatar,
  showOnlineStatus,
  children,
}) => {
  return (
    <Flex key={index} justifyContent={"space-between"}>
      <AvatarWithName
        name={name}
        avatar={avatar}
        nameWrapperProps={{
          overflowWrap: "break-word",
          maxW: 130,
        }}
        showOnlineStatus={showOnlineStatus}
      />
      {children}
    </Flex>
  );
};

export default CardItem;
