import React from "react";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/400.css";
import router from "router";
import { AuthProvider } from "hooks";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
