import React from "react";
import { Box, Divider } from "@chakra-ui/react";
import { LeftBarItem } from "components/atoms";
import {
  Calendar,
  Clock,
  Play,
  ShoppingBag,
  UserPlus,
  Users,
  Video,
  Image,
  Tv,
  MessageSquare,
  DollarSign,
  Monitor,
  Book,
} from "react-feather";

const LeftBar = () => {
  return (
    <Box>
      <LeftBarItem Icon={Users} description={"Friends"} />
      <LeftBarItem Icon={UserPlus} description={"Groups"} />
      <LeftBarItem Icon={ShoppingBag} description={"Marketplace"} />
      <LeftBarItem Icon={Tv} description={"Watch"} />
      <LeftBarItem Icon={Clock} description={"Memories"} />
      <Box px={5} py={5}>
        <Divider />
      </Box>
      <Box pl={10} fontWeight={"semibold"}>
        Your shortcuts
      </Box>
      <LeftBarItem Icon={Calendar} description={"Events"} />
      <LeftBarItem Icon={Play} description={"Gaming"} />
      <LeftBarItem Icon={Image} description={"Gallery"} />
      <LeftBarItem Icon={Video} description={"Videos"} />
      <LeftBarItem Icon={MessageSquare} description={"Messages"} />
      <Box px={5} py={5}>
        <Divider />
      </Box>
      <Box pl={10} fontWeight={"semibold"}>
        Others
      </Box>
      <LeftBarItem Icon={DollarSign} description={"Fundraiser"} />
      <LeftBarItem Icon={Book} description={"Tutorials"} />
      <LeftBarItem Icon={Monitor} description={"Courses"} />
    </Box>
  );
};

export default LeftBar;
