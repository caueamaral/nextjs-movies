import styled from "styled-components";
import Logo from "@/app/components/header/Logo";
import Navigation from "@/app/components/header/Navigation";
import Login from "@/app/components/header/Login";

const HeaderContainer = styled.header`
  @media (min-width: 1100px) {
    padding-inline: 24px;
    position: relative;
    z-index: 1;
  }
`;

const HeaderLimit = styled.div`
  background: color-mix(in srgb, #151515 90%, transparent);

  @media (min-width: 1100px) {
    align-items: center;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    height: var(--headerHeight);
    margin-top: var(--headerMargin);
    margin-inline: auto;
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
        <Navigation />
        <Login />
      </HeaderLimit>
    </HeaderContainer>
  );
}
