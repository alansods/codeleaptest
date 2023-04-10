import {
  Container,
  TitleHeader,
  ContainerAuthor,
  ContainerText,
} from "./styles";

import moment from 'moment';

import { useDispatch } from "react-redux";
import { deletePost } from "../../../../redux/listPostsSlice";

interface PostProps {
  id: number;
  title: string;
  username: string;
  created_datetime: string;
  content: string;
}

export default function PostTemplate({id, title, username, created_datetime, content}:PostProps) {

  const dispatch = useDispatch();

  const handleDeletePost = (): void => {
    console.log("DELETE");

    dispatch(deletePost(id));
  };

  const postDate = created_datetime;

  const date = new Date(created_datetime);

  return (

    <Container>

      <TitleHeader>
        <h3>{ title }</h3>
        <div>
          <span onClick={handleDeletePost}> Erase </span>
          <span> Edit </span>
        </div>
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
