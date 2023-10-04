import React, { useContext, useState } from "react";

import {
  FormGroup,
  Input,
  Button,
  Form,
  InputGroup,
  //   InputG,
} from "reactstrap";

import { v4 } from "uuid";
import { ToDoContext } from "../context/ToDoContext";
import { ADD_TODO } from "../context/action.types";

const ToDoForm = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(ToDoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter the value");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your Next todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          ></Input>
          {/* <InputGroupAddon addonType="prepend"> */}
          <Button color="warning">Add</Button>
          {/* </InputGroupAddon> */}
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default ToDoForm;
