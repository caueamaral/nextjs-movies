import styled from "styled-components";
import Link from "next/link";

const List = styled.ul`
  @media (min-width: 1100px) {
    display: flex;
    gap: 17px;
  }
`;

const GlobalLink = styled(Link)`
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
    <nav>
      <List>
        <li>
          <LoginLink href="/login">Login</LoginLink>
        </li>
        <li>
          <SignupLink href="/signup">Sign up</SignupLink>
        </li>
      </List>
    </nav>
  );
}
