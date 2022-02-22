import styled from "styled-components";

export const StyledTodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;
`;

export const StyledTodoRowComplete = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;

  text-decoration: line-through;
  opacity: 0.4;
`;
