import { useState } from "react";
import { CardCreatePost } from "./styles";
import { Button } from "../../../../components/Button/styles";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/userSlice";

import { useDispatch } from "react-redux";
import { addPost } from "../../../../redux/listPostsSlice";


export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const { name } = useSelector(selectUser)

  const dispatch = useDispatch();

  const handleCreatePost = (): void => {
    console.log("LOGIN");

    const newDate = new Date().toString()

    const newPost = {
      id: 1,
      username: name,
      created_datetime: newDate,
      title: title,
      content: content,
    }

    dispatch(addPost(newPost));
  };

  return (
    <CardCreatePost>
      <h3>What's on your mind?</h3>

      <label>Title</label>
      <input type="text" placeholder="Hello World" onChange={(e) => setTitle(e.target.value)} />

      <label>Content</label>
      <textarea placeholder="Content here" rows={4} onChange={(e) => setContent(e.target.value)} />

      <Button onClick={handleCreatePost}>Create</Button>
    </CardCreatePost>
  );
}
