import styled from "styled-components";

export const CardCreatePost = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme["white"]};
  padding: 24px;
  border-radius: 16px;
  border: solid 1px ${(props) => props.theme["gray-700"]};
`;