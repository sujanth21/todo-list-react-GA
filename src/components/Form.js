import React, { useState } from "react";

// Styles
import { StyledForm } from "../components/styles/Form.styled";
import {
  StyledInput,
  StyledInputEdit,
} from "../components/styles/Input.styled";
import {
  StyledButton,
  StyledEditButton,
} from "../components/styles/Button.styled";

const Form = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <StyledInputEdit
            type='text'
            placeholder='Update your item here.'
            value={input}
            name='text'
            onChange={handleChange}
          />
          <StyledEditButton>Update</StyledEditButton>
        </>
      ) : (
        <>
          <StyledInput
            type='text'
            placeholder='Type an item here.'
            value={input}
            name='text'
            onChange={handleChange}
          />
          <StyledButton>Add it!</StyledButton>
        </>
      )}
    </StyledForm>
  );
};

export default Form;
