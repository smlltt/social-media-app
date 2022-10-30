import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import routes from "routes";
import { Login } from "pages";
import theme from "theme";
import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/400.css";

function App() {
  const router = createBrowserRouter([
    {
      path: routes.home,
      element: <div>home</div>,
    },
    {
      path: routes.login,
      element: <Login />,
    },
  ]);
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
