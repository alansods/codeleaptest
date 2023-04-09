import { useEffect, useState } from "react";
import {
  Container,
  TitleHeader,
  ContainerAuthor,
  ContainerText,
} from "./styles";

export default function PostTemplate() {

  const [listPosts, setListPosts] = useState({})

  async function getData() {
    const response = await fetch("https://dev.codeleap.co.uk/careers/");
    const data = response.json();

    setListPosts(data)

    console.log(`data = ${JSON.stringify(data)}`);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <TitleHeader>
        <h3>My First Post at CodeLeap Network!</h3>
        <div>
          <span> Erase </span>
          <span> Edit </span>
        </div>
      </TitleHeader>

      <ContainerText>
        <ContainerAuthor>
          <strong>@Alan Santos</strong>
          <span>25 minute ago</span>
        </ContainerAuthor>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
          ligula vitae enim vehicula finibus. Etiam nec mattis sem. Maecenas
          fringilla, tellus sit amet venenatis tempus, eros diam scelerisque
          leo, eu scelerisque lorem diam vel elit. Praesent nec magna ut turpis
          commodo lobortis. Curabitur eros massa, vulputate vitae velit id,
          ornare sodales urna. Sed tellus diam, tempor pellentesque tellus eu.
        </p>

        <p>
          Sagittis eleifend urna. Nulla sagittis libero vel lorem ultricies,
          eget venenatis sem dapibus. Integer gravida eget risus a ornare.
          Praesent a ex vel nunc ullamcorper eleifend. Nullam dapibus non urna
          nec malesuada. Nullam posuere ultricies elit. Duis et neque
          vestibulum, aliquet purus at, dapibus ex.
        </p>
      </ContainerText>
    </Container>
  );
}
