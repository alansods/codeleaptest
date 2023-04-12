import { Overlay, ModalCard, ContainerButton, ContainerModal } from "./styles";
import { Button } from "../Button/styles";

import ReactDOM from "react-dom";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleDeletePost: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  handleDeletePost,
}: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose} />

      <ContainerModal>
        <ModalCard>
          <h3>Are you sure you want to delete this item?</h3>

          <ContainerButton>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="red" onClick={handleDeletePost}>
              Delete
            </Button>
          </ContainerButton>
        </ModalCard>
      </ContainerModal>
    </>,
    document.getElementById("portal") as Element
  );
}
