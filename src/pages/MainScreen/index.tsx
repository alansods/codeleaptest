import Header from "../../components/Header";
import CreatePost from "./components/CreatePost";
import PostTemplate from "./components/PostTemplate";

import { Container } from "./styles";

import { useSelector } from "react-redux";
import { selectListPosts } from "../../redux/listPostsSlice";

export interface PostProps {
  id: string;
  title: string;
  username: string;
  created_datetime: string;
  content: string;
}

export default function MainScreen() {
  const { listPosts } = useSelector(selectListPosts);

  return (
    <>
      <Header />

      <Container>
        <CreatePost />
        {listPosts.map((item:PostProps) => (
          <PostTemplate {...item} key={item.id} />
        ))}
      </Container>
    </>
  );
}
