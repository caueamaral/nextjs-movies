import styled from "styled-components";
import Link from "next/link";

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
    <nav>
      <List>
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/">Movies</NavLink>
        </li>
        <li>
          <NavLink href="/">TV Shows</NavLink>
        </li>
        <li>
          <NavLink href="/">Anime</NavLink>
        </li>
        <li>
          <NavLink href="/">Series</NavLink>
        </li>
        <li>
          <NavLink href="/">Trending</NavLink>
        </li>
      </List>
    </nav>
  );
}
