import styled from "styled-components";
import Image from "next/image";
import { bebas_neue } from "@/app/fonts/googleFonts";

const Container = styled.section`
  aspect-ratio: 1440 / 573;
  display: flex;
  justify-content: center;
  height: 573px;
  position: relative;
  overflow: hidden;
  width: 100%;

  @media (min-width: 1100px) {
    margin-top: calc((var(--headerHeight) + var(--headerMargin)) * -1);
  }
`;

const BannerImage = styled(Image)`
  aspect-ratio: 1440 / 573;
  left: 0;
  min-height: 573px;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Limit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-inline: var(--lateralMargin);
  margin-top: calc(var(--headerHeight) + 100px);
  max-width: 1280px;
  position: relative;
  width: 100%;
`;

const Info = styled.div`
  max-width: 700px;
`;

const Title = styled.h1`
  font-size: 72px;
  line-height: 0.9em;
  text-transform: uppercase;
`;

const Text = styled.p`
  font-size: 18px;
  margin-top: 25px;
`;

const Button = styled.button`
  background: var(--purple);
  border-radius: 5px;
  cursor: pointer;
  margin-top: 60px;
  padding: 15px 85px;
`;

const Thumb = styled.div`
  background: #0009;
  border: 2px solid var(--white);
  border-radius: 16px;
  flex-shrink: 0;
  height: 266px;
  width: 266px;
`;

export default function Banner() {
  return (
    <Container>
      <BannerImage
        src="/images/banner.jpg"
        alt="Banner"
        width={1440}
        height={572}
      />
      <Limit>
        <Info>
          <Title className={bebas_neue.className}>
            Furiosa: A Mad Max Saga
          </Title>
          <Text>
            In "Furiosa: A Mad Max Saga," the fierce warrior Furiosa embarks on
            a perilous journey through a post-apocalyptic wasteland, battling
            ruthless enemies to reclaim her homeland.
          </Text>
          <Button type="button" aria-label="Watch Furiosa: A Mad Max Saga">
            Watch
          </Button>
        </Info>
        <Thumb>Thumb</Thumb>
      </Limit>
    </Container>
  );
}
