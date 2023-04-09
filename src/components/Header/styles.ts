import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding: 27px 37px;
  background-color: ${(props) => props.theme["primary"]};
  color: ${(props) => props.theme["white"]};
`;
