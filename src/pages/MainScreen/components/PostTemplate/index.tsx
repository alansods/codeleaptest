import { useState } from "react";

import Modal from "../../../../components/Modal"
import EditModal from "../../../../components/EditModal"

import {
  Container,
  TitleHeader,
  ContainerAuthor,
  ContainerText,
  ContainerIcons,
} from "./styles";

import DeleteIcon from "../../../../assets/delete-icon.svg"
import EditIcon from "../../../../assets/edit-icon.svg"

import moment from 'moment';

import { useDispatch } from "react-redux";
import { deletePost } from "../../../../redux/listPostsSlice";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/userSlice";

interface PostProps {
  id: string;
  title: string;
  username: string;
  created_datetime: string;
  content: string;
}

export default function PostTemplate({id, title, username, created_datetime, content}:PostProps) {

  const { name } = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleDeletePost = (): void => {
    console.log("DELETE");

    dispatch(deletePost(id));
  };

  const date = new Date(created_datetime);

  const [isOpen, setIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

  return (

    <Container>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} handleDeletePost={handleDeletePost} />

      <EditModal isEditing={isEditing} onClose={() => setIsEditing(false)} id={id} title={title} username={username} created_datetime={created_datetime} content={content}/>

      <TitleHeader>
        <h3>{ title }</h3>

        { name === username &&

        <ContainerIcons>
          <img src={DeleteIcon} alt="Delete" onClick={() => setIsOpen(true)} />
          <img src={EditIcon} alt="Edit" onClick={() => setIsEditing(true)} />
        </ContainerIcons>

        }

      </TitleHeader>

      <ContainerText>
        <ContainerAuthor>
          <strong>{ username }</strong>
          <span>{ moment(date).fromNow() }</span>
        </ContainerAuthor>

        <p>
          { content }
        </p>
      </ContainerText>

    </Container>
  );
}
