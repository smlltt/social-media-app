import React from "react";
import CardTemplate from "./CardTemplate";
import CardItem from "./CardItem";

const FriendsCard = () => {
  //TODO will be available via query
  const onlineFriends = Array.from(Array(3), () => ({
    name: "John Doe",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }));
  return (
    <CardTemplate title={"Online"}>
      {onlineFriends.map(({ name, avatar }, index) => (
        <CardItem
          index={index}
          name={name}
          avatar={avatar}
          showOnlineStatus
          key={index}
        />
      ))}
    </CardTemplate>
  );
};

export default FriendsCard;
