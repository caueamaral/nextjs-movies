import styled from "styled-components";
import Logo from "@/app/components/header/Logo";
import Menu from "@/app/components/header/Menu";

const HeaderContainer = styled.header`
  @media (min-width: 1100px) {
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 1;
  }
`;

const HeaderLimit = styled.div`
  background: color-mix(in srgb, #151515 90%, transparent);
  display: flex;

  @media (max-width: 1099px) {
    align-items: center;
    display: flex;
    height: var(--headerHeight);
    justify-content: space-between;
    padding-inline: 25px;
  }

  @media (min-width: 1100px) {
    align-items: center;
    border-radius: 8px;
    justify-content: space-between;
    height: var(--headerHeight);
    margin-top: var(--headerMargin);
    margin-inline: var(--lateralMargin);
    max-width: 1280px;
    padding-inline: 27px;
    width: 100%;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLimit>
        <Logo />
        <Menu />
      </HeaderLimit>
    </HeaderContainer>
  );
}
