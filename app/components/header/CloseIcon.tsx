import styled from "styled-components";

const Section = styled.section`
  @media (max-width: 1099px) {
    height: var(--headerHeight);
    display: flex;
    padding-inline: 25px;
    justify-content: flex-end;
  }

  @media (min-width: 1100px) {
    display: none;
  }
`;

const Button = styled.button`
  @media (max-width: 1099px) {
    cursor: pointer;
  }
`;

export default function CloseIcon() {
  return (
    <Section>
      <Button type="button" aria-label="Close menu">
        <svg
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
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </Section>
  );
}
