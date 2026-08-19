import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  border-top: 1px solid var(--gray);
  margin-top: 20px;
  padding-top: 20px;
`;

const List = styled.ul`
  @media (min-width: 1100px) {
    display: flex;
    gap: 17px;
  }
`;

const GlobalLink = styled(Link)`
  @media (max-width: 1099px) {
    display: block;
    padding: 10px 20px;
  }

  @media (min-width: 1100px) {
    border: 1px solid;
    border-radius: 5px;
    color: var(--headerLink);
    padding: 12px 25px;
    transition: all 300ms;
  }
`;

const LoginLink = styled(GlobalLink)`
  @media (min-width: 1100px) {
    border-color: var(--white);

    &:hover {
      background: var(--white);
      color: var(--black);
    }
  }
`;

const SignupLink = styled(GlobalLink)`
  @media (min-width: 1100px) {
    background: var(--headerLoginSignup);
    border-color: var(--headerLoginSignup);

    &:hover {
      color: var(--white);
      opacity: 0.9;
    }
  }
`;

export default function Login() {
  return (
    <Nav>
      <List>
        <li>
          <LoginLink href="/login">Login</LoginLink>
        </li>
        <li>
          <SignupLink href="/signup">Sign up</SignupLink>
        </li>
      </List>
    </Nav>
  );
}
