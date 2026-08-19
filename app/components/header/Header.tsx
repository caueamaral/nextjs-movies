import styled from "styled-components";
import Icon from "@/app/components/header/Icon";
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
  display: flex;

  @media (max-width: 1099px) {
    display: flex;
    justify-content: space-between;
    padding: 25px;
  }

  @media (min-width: 1100px) {
    align-items: center;
    border-radius: 8px;
    justify-content: space-between;
    height: var(--headerHeight);
    margin-top: var(--headerMargin);
    margin-inline: auto;
    max-width: 1280px;
    padding-inline: 27px;
    width: 100%;
  }
`;

const Menu = styled.section`
  @media (max-width: 1099px) {
    background: var(--background);
    border-left: 1px solid var(--gray);
    height: 100%;
    padding-block: 52px 20px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 200px;
  }

  @media (min-width: 1100px) {
    display: contents;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderLimit>
        <Logo />
        <Icon />
        <Menu>
          <Navigation />
          <Login />
        </Menu>
      </HeaderLimit>
    </HeaderContainer>
  );
}
