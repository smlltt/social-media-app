import { extendTheme } from "@chakra-ui/react";

export const customScrollBarStyle = {
  "::-webkit-scrollbar": {
    width: 1,
  },
  "::-webkit-scrollbar-thumb": {
    background: "gray.100",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: "gray.200",
  },
};

const theme = extendTheme({
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    primary: {
      100: "#c1beff",
      200: "#9691fe",
    },
    dashboardBg: {
      100: "#EFEFEF",
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
    Button: {
      variants: {
        primary: {
          background: "primary.200",
          color: "White",
        },
      },
    },
  },
});

export default theme;
