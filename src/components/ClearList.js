import { StyledDeleteButton } from "../components/styles/Button.styled";

const ClearList = ({ setTodoItems }) => {
  const clearList = () => {
    setTodoItems([]);
  };
  return (
    <StyledDeleteButton onClick={clearList}>
      Finished the list!
    </StyledDeleteButton>
  );
};

export default ClearList;
