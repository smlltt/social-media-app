import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    loginBg: {
      100: "#c1beff",
    },
  },
  components: {
    Input: {
      baseStyle: {
        field: {
          p: 1,
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          borderBottomColor: "BlackAlpha",
          borderRadius: 0,
          ":focus": {
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "Black",
          },
        },
      },
      //without setting variant null, Input base style does not work. Without size null, default borderRadius cannot be changed: https://github.com/chakra-ui/chakra-ui/issues/2347
      defaultProps: {
        variant: null,
        size: null,
      },
    },
  },
});

export default theme;
