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

export const ContainerButtons= styled.div`
  display: flex;
  align-items: center;
  gap: 10px
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 5px
`;

export const LogOut = styled.span`
  cursor: pointer;
`;