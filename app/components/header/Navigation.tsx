import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  @media (max-width: 1099px) {
    border-top: 1px solid var(--gray);
    margin-top: 20px;
    padding-top: 20px;
  }
`;

const List = styled.ul`
  @media (min-width: 1100px) {
    display: flex;
    gap: 30px;
  }
`;

const NavLink = styled(Link)`
  @media (max-width: 1099px) {
    display: block;
    padding: 10px 20px;
  }

  @media (min-width: 1100px) {
    color: var(--headerLink);
    transition: color 300ms;

    &:hover {
      color: var(--headerNavigationHover);
    }
  }
`;

export default function Navigation() {
  return (
    <Nav>
      <List>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink href="/tv-shows">TV Shows</NavLink>
        </li>
        <li>
          <NavLink href="/anime">Anime</NavLink>
        </li>
        <li>
          <NavLink href="/series">Series</NavLink>
        </li>
        <li>
          <NavLink href="/trending">Trending</NavLink>
        </li>
      </List>
    </Nav>
  );
}
