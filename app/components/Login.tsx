import styled from "styled-components";
import Link from "next/link";

const List = styled.ul`
  display: flex;
  gap: 17px;
`;

const LoginLink = styled(Link)`
  border: 1px solid #fff;
  border-radius: 5px;
  color: var(--headerLink);
  padding: 12px 25px;
`;

const SignupLink = styled(Link)`
  background: #9747ff;
  border: 1px solid #9747ff;
  border-radius: 5px;
  color: var(--headerLink);
  padding: 12px 25px;
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
