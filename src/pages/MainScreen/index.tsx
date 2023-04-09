export {}; // Add this line to turn the file into a module

import Header from "../../components/Header";
import CreatePost from "./components/CreatePost";
import PostTemplate from "./components/PostTemplate";

import { Container } from "./styles";
export default function MainScreen() {
  return (
    <>
      <Header />

      <Container>
        <CreatePost />
        <PostTemplate />
      </Container>
    </>
  );
}
