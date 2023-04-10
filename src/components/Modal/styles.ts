import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(119, 119, 119, 0.8);
  z-index: 1000;
`;

export const ModalCard = styled.div`
  width: 660px;
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 24px;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme["white"]};
  border-radius: 16px;
  z-index: 1000;

  @media (max-width: 600px) {
    max-width: 370px
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  gap: 0 16px;
  margin-top: 18px;
`;
