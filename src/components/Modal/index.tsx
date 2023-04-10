import { Overlay, ModalCard, ContainerButton } from "./styles";
import { Button } from "../Button/styles";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleDeletePost: () => void;
}

export default function Modal({ isOpen, onClose, handleDeletePost }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />

      <ModalCard onClick={(e) => e.stopPropagation()}>
        <h3>Are you sure you want to delete this item?</h3>

        <ContainerButton>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button variant="red" onClick={handleDeletePost}>Delete</Button>
        </ContainerButton>
      </ModalCard>
    </>
  );
}
