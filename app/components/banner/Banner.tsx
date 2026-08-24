import styled from "styled-components";
import Image from "next/image";

const Container = styled.section`
  align-items: center;
  aspect-ratio: 1440 / 572;
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
  height: auto;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Limit = styled.div`
  background: #0005;
  margin-inline: var(--lateralMargin);
  max-width: 1280px;
  padding-inline: 27px;
  position: relative;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 72px;
  text-transform: uppercase;
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
        <div>
          <Title>Furiosa: A Mad Max Saga</Title>
          <p>
            In "Furiosa: A Mad Max Saga," the fierce warrior Furiosa embarks on
            a perilous journey through a post-apocalyptic wasteland, battling
            ruthless enemies to reclaim her homeland.
          </p>
          <button type="button" aria-label="Watch Furiosa: A Mad Max Saga">
            Watch
          </button>
        </div>
        <div>Thumb</div>
      </Limit>
    </Container>
  );
}
