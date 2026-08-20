"use client";

import { useState } from "react";
import styled from "styled-components";
import HamburgerIcon from "@/app/components/header/HamburgerIcon";
import CloseIcon from "@/app/components/header/CloseIcon";
import Navigation from "@/app/components/header/Navigation";
import Login from "@/app/components/header/Login";

const MenuContainer = styled.section`
  @media (max-width: 1099px) {
    background: var(--background);
    border-left: 1px solid var(--gray);
    height: 100%;
    position: absolute;
    top: 0;
    transition: right 300ms;
    right: -100%;
    z-index: 1;
    width: 200px;

    &.active {
      right: 0;
    }
  }

  @media (min-width: 1100px) {
    display: contents;
  }
`;

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HamburgerIcon
        isMenuOpen={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <MenuContainer className={isMenuOpen ? "active" : ""}>
        <CloseIcon onClick={() => setIsMenuOpen(false)} />
        <Navigation />
        <Login />
      </MenuContainer>
    </>
  );
}
