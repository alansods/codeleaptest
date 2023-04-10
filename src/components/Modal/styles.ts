import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(119, 119, 119, 0.8);
  z-index: 1000;
`;

export const ContainerModal = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalCard = styled.div`
  width: 660px;
  padding: 24px;
  background-color: ${(props) => props.theme["white"]};
  border-radius: 16px;
  animation: showAnimation 300ms ease;

  @keyframes showAnimation {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @media (max-width: 600px) {
    max-width: 360px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: end;
  gap: 0 16px;
  margin-top: 18px;
`;
