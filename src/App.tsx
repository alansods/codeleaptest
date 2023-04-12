import { useEffect } from "react";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import SignUp from "./pages/SignUp";
import MainScreen from "./pages/MainScreen";

import { useSelector } from "react-redux";
import { selectUser } from "./redux/userSlice";

import { useDispatch } from "react-redux";
import { addPost } from "./redux/listPostsSlice";

import { getFirestore, collection, getDocs } from 'firebase/firestore'

export function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadPosts() {
      // Crie uma referência para a coleção
      const db = getFirestore();
      const collectionRef = collection(db, 'posts');

      // Use o método getDocs para obter todos os documentos na coleção
      try {
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((docSnapshot:any) => {
          if (docSnapshot.exists()) {
            // Acesse o valor do array usando a notação de ponto ou colchetes
            const arrayData = docSnapshot.data(); // Notação de ponto
            // const arrayData = docSnapshot.data()['nomeDoArray']; // Notação de colchetes

            console.log("arrayData: " + JSON.stringify(arrayData)); // Saída: Array com os dados do array no Firestore

            dispatch(addPost(arrayData));

          } else {
            console.log('O documento não existe');
          }
        });
      } catch (error) {
        console.error('Erro ao obter os documentos:', error);
      }
    }
    loadPosts();
  }, []);

  const { isLoggedIn } = useSelector(selectUser);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      {!isLoggedIn ? <SignUp /> : <MainScreen />}
    </ThemeProvider>
  );
}
