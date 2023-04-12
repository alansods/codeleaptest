import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CardCreatePost } from "./styles";
import { Button } from "../../../../components/Button/styles";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/userSlice";

import { useDispatch } from "react-redux";
import { addPost } from "../../../../redux/listPostsSlice";

import { db } from "../../../../actions/firebaseConnection"
import { addDoc, collection } from "firebase/firestore"

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const { name } = useSelector(selectUser)

  const dispatch = useDispatch();

  const handleCreatePost = async () => {
    console.log("LOGIN");

    const newDate = new Date().toString()

    const newPost = {
      id: uuidv4(),
      username: name,
      created_datetime: newDate,
      title: title,
      content: content,
    }

    dispatch(addPost(newPost));

    await addDoc(collection(db, "posts"), newPost)

    setTitle("")
    setContent("")
  };

  return (
    <CardCreatePost>
      <h3>What's on your mind?</h3>

      <label>Title</label>
      <input type="text" placeholder="Hello World" value={title} onChange={(e) => setTitle(e.target.value)} />

      <label>Content</label>
      <textarea placeholder="Content here" rows={4} value={content} onChange={(e) => setContent(e.target.value)} />

      <Button uppercase alignRight onClick={handleCreatePost} disabled={!title || !content}>Create</Button>
    </CardCreatePost>
  );
}
