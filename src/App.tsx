import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import SignUp from "./pages/SignUp";
import MainScreen from "./pages/MainScreen";

import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";

export function App() {

  const { isLoggedIn } = useSelector(selectUser)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      {!isLoggedIn ? <SignUp /> : <MainScreen />}
    </ThemeProvider>
  );
}
