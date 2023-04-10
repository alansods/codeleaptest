import { useState } from "react";

import { Overlay, ModalCard, ContainerButton, ContainerModal } from "./styles";
import { Button } from "../Button/styles";

import { useDispatch } from "react-redux";
import { editPost } from "../../redux/listPostsSlice";

import ReactDOM from "react-dom";
interface ModalProps {
  isEditing: boolean;
  onClose: () => void;
  id: string;
  title: string;
  username: string;
  created_datetime: string;
  content: string;
}

export default function Modal({
  isEditing,
  onClose,
  id,
  title,
  username,
  created_datetime,
  content,
}: ModalProps) {
  if (!isEditing) return null;

  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleEditPost = (): void => {
    console.log("EDIT");

    const newPost = {
      id: id,
      username: username,
      created_datetime: created_datetime,
      title: newTitle,
      content: newContent,
    };

    dispatch(editPost(newPost));
    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={onClose} />

      <ContainerModal>
        <ModalCard onClick={(e) => e.stopPropagation()}>
          <h3>Edit Item</h3>

          <label>Title</label>
          <input
            type="text"
            placeholder="Hello World"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <label>Content</label>
          <textarea
            placeholder="Content here"
            rows={4}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />

          <ContainerButton>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="green" onClick={handleEditPost}>
              Save
            </Button>
          </ContainerButton>
        </ModalCard>
      </ContainerModal>
    </>,
    document.getElementById("portal") as Element
  );
}
