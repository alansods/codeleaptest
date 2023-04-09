import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import SignUp from "./pages/SignUp";
import MainScreen from "./pages/MainScreen";

export function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      {!isLogged ? <SignUp /> : <MainScreen />}
    </ThemeProvider>
  );
}
