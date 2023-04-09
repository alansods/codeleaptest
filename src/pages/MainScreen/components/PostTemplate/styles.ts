import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme["white"]};
  margin-top: 24px;
  border-radius: 16px;
  border: solid 1px ${(props) => props.theme["gray-700"]};
`;

export const ContainerText = styled.div`
  width: 100%;
  padding: 24px;
  font-size: 18px;

  p:not(:last-child) {
    margin-bottom: 24px;
    line-height: 21px;
  }
`;

export const TitleHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme["primary"]};
  color: ${(props) => props.theme["white"]};
  padding: 24px;
  border-radius: 16px 16px 0 0;
`;

export const ContainerAuthor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  color: ${(props) => props.theme["gray-500"]};
`;
