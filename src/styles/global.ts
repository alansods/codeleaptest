import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme["primary"]};
  }

  body {
    background-color: ${props => props.theme["gray-400"]};
    color: ${props => props.theme["black"]};
    -webkit-font-smoothing: antialiased;
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  body, input-security, textarea, button {
    font-weight: 400;
    font-size: 1rem;
    font-family: Roboto, sans-serif;
  }

  label {
    font-size: 16px;
    display:inline-block;
    margin-top: 24px;
  }

  input {
    font-size: 16px;
    width: 100%;
    padding: 8px 11px;
    border-radius: 8px;
    margin-top: 8px;
    border: solid 1px ${(props) => props.theme["gray-500"]};
    ::placeholder {
      color: ${(props) => props.theme["gray-300"]};
      font-size: 14px;
    }
  }

  textarea {
    font-size: 16px;
    width: 100%;
    padding: 8px 11px;
    border-radius: 8px;
    margin-top: 8px;
    resize: none;
    border: solid 1px ${(props) => props.theme["gray-500"]};
    ::placeholder {
      color: ${(props) => props.theme["gray-300"]};
      font-size: 14px;
    }
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
  }

`;
