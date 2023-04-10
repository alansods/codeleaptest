import { useState } from "react";

import { Container, Card } from "./styles";
import { Button } from "../../components/Button/styles";

import { useDispatch } from "react-redux";
import { changeUser } from "../../redux/userSlice";

export default function SignUp() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleLogin = (): void => {
    console.log("LOGIN");
    dispatch(changeUser(inputValue));
  };

  return (
    <Container>
      <Card>
        <h3>Welcome to CodeLeap network!</h3>

        <label>Please enter your username</label>

        <input
          type="text"
          placeholder="Type your name"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button uppercase alignRight onClick={handleLogin} disabled={!inputValue}>Enter</Button>
      </Card>
    </Container>
  );
}
