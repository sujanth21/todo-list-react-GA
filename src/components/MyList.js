import React, { useState, useEffect } from "react";

import ClearList from "./ClearList";
import Form from "./Form";
import ListItem from "./ListItem";

// Styles
import { StyledHeader } from "../components/styles/Header.styled";

const MyList = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todoItems]);

  const addTodos = (todo) => {
    const newTodos = [todo, ...todoItems];

    setTodoItems(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodoItems((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todoItems].filter((todo) => todo.id !== id);

    setTodoItems(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todoItems.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodoItems(updatedTodos);
  };

  const saveLocalTodos = () => {
    if (localStorage.getItem("todoItems") === null) {
      localStorage.setItem("todoItems", JSON.stringify([]));
    } else {
      localStorage.setItem("todoItems", JSON.stringify(todoItems));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todoItems") === null) {
      localStorage.setItem("todoItems", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todoItems"));

      setTodoItems(localTodos);
    }
  };

  return (
    <>
      <StyledHeader> Things I should stop procrastinating:</StyledHeader>

      <Form onSubmit={addTodos} />
      {todoItems.map((todo, index) => {
        return (
          <ListItem
            key={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        );
      })}

      <ClearList setTodoItems={setTodoItems} />
    </>
  );
};

export default MyList;
