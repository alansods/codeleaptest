import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: ${(props) => props.theme["white"]};
  padding: 24px;
  border-radius: 16px;
  border: solid 1px ${(props) => props.theme["gray-300"]};
`;