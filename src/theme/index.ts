import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  colors: {
    loginBg: {
      100: "#c1beff",
    },
  },
});

export default theme;
