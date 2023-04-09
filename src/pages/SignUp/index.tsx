import { Container, Card } from "./styles";
import { Button } from "../../components/Button/styles";
import { useState } from "react";

export default function SignUp() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <Card>
        <h3>Welcome to CodeLeap network!</h3>

        <label>Please enter your username</label>

        <input type="text" placeholder="Alan Santos" value={inputValue} onChange={handleInputValue}/>

        <Button>Enter</Button>
      </Card>
    </Container>
  );
}
