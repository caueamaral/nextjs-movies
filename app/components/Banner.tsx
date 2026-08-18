import styled from "styled-components";
import Image from "next/image";

const BannerContainer = styled.section`
  aspect-ratio: 1440 / 572;
  margin-top: calc((var(--headerHeight) + var(--headerMargin)) * -1);
  max-height: 600px;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const BannerImage = styled(Image)`
  position: absolute;
  height: auto;
  width: 100%;
`;

export default function Banner() {
  return (
    <BannerContainer>
      <BannerImage
        src="/images/banner.jpg"
        alt="Banner"
        width={1440}
        height={572}
      />
    </BannerContainer>
  );
}
