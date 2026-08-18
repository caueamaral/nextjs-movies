import styled from "styled-components";
import Logo from "@/app/components/Logo";

const HeaderContainer = styled.header`
  padding-inline: 24px;
  position: relative;
  z-index: 1;
`;

const HeaderLimit = styled.div`
  background: color-mix(in srgb, #151515 90%, transparent);
  border-radius: 8px;
  display: flex;
  height: var(--headerHeight);
  margin-top: var(--headerMargin);
  margin-inline: auto;
  max-width: 1280px;
  padding-inline: 27px;
  width: 100%;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLimit>
        <Logo />
      </HeaderLimit>
    </HeaderContainer>
  );
}
