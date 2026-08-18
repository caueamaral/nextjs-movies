import styled from "styled-components";
import Link from "next/link";

const List = styled.ul`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  color: var(--navigationLink);

  &:hover {
    color: var(--navigationHover);
  }
`;

export default function Navigation() {
  return (
    <nav>
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
    </nav>
  );
}
