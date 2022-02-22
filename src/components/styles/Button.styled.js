import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: #149fff;
  color: #fff;
  text-transform: capitalize;
`;

export const StyledEditButton = styled.button`
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  color: #fff;
  text-transform: capitalize;
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  padding: 16px 22px;
`;

export const StyledDeleteButton = styled.button`
  width: 60%;
  margin: 4rem auto;
  border: none;
  border-radius: 4px 4px;
  cursor: pointer;
  outline: none;
  color: #fff;
  text-transform: capitalize;
  background: linear-gradient(90deg, rgb(255, 69, 12) 0%, rgb(250, 17, 0) 100%);
  padding: 16px 22px;

  &:hover {
    opacity: 0.8;
  }
`;
