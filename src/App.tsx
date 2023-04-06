import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import theme from "./theme/theme";
import { Router } from "./router/Router";
import { HomeRoutes } from "./router/HomeRoutes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
