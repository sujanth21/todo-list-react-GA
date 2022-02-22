import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Form from "./Form";

// Styles
import {
  StyledTodoRow,
  StyledTodoRowComplete,
} from "../components/styles/TodoRow.styled";
import {
  StyledIcons,
  StyledEditIcons,
  StyledDeleteIcons,
} from "../components/styles/Icons.styled";

const ListItem = ({ todo, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);

    setEdit({ id: null, value: "" });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todo.isComplete ? (
    <StyledTodoRowComplete>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <StyledIcons>
        <StyledDeleteIcons>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        </StyledDeleteIcons>

        <StyledEditIcons>
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
        </StyledEditIcons>
      </StyledIcons>
    </StyledTodoRowComplete>
  ) : (
    <StyledTodoRow>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <StyledIcons>
        <StyledDeleteIcons>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        </StyledDeleteIcons>

        <StyledEditIcons>
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
        </StyledEditIcons>
      </StyledIcons>
    </StyledTodoRow>
  );
};

export default ListItem;
