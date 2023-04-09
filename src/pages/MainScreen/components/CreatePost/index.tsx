import { CardCreatePost } from "./styles";
import { Button } from "../../../../components/Button/styles";

export default function CreatePost() {
  return (
    <CardCreatePost>
      <h3>What's on your mind?</h3>

      <label>Title</label>
      <input type="text" placeholder="Hello World" />

      <label>Content</label>
      <textarea placeholder="Content here" rows={4} />

      <Button>Create</Button>
    </CardCreatePost>
  );
}
