import { useColorModeValue } from "@chakra-ui/react";

const useCommonColors = () => {
  const mainBg = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("black", "white");
  return { mainBg, text };
};

export default useCommonColors;
