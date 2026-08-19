import styled from "styled-components";

const SVG = styled.svg`
  @media (max-width: 1099px) {
    cursor: pointer;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

export default function Icon() {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </SVG>
  );
}
