import styled from "styled-components";
import Header from "@/app/components/header/Header";
import Banner from "@/app/components/banner/Banner";

const Container = styled.div`
  @media (min-width: 1100px) {
    margin-inline: auto;
    max-width: 1440px;
  }
`;

export default function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Banner />
      </main>
    </Container>
  );
}
