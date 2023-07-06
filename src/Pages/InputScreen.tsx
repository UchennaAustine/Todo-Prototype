import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuid } from "uuid";
import { createTask } from "../utils/APIs";

const InputScreen = () => {
  const model = yup.object({
    task: yup.string().required(),
    priority: yup.string().required(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(model),
  });

  const submissionHandler = handleSubmit((res: any) => {
    createTask({
      id: uuid(),
      task: res.task,
      priority: res.priority,
      completed: false,
    });
    reset();
  });
  return (
    <div>
      <Container>
        <Main onSubmit={submissionHandler}>
          <Input
            placeholder="Enter your Task"
            //register:
            //This method allows you to register an input or
            // select element and apply validation rules to React Hook Form
            {...register("task")}
            type="text"
          />
          <Error>{errors.task && "Please enter your Task"}</Error>
          <Input
            style={{ marginTop: "20px" }}
            placeholder="Enter your Priority"
            {...register("priority")}
          />
          <Error>{errors.priority && "Please enter your Priority"}</Error>
          <Button type="submit">Add Task</Button>
        </Main>
      </Container>
    </div>
  );
};

export default InputScreen;

const Error = styled.div`
  font-size: 12px;
  color: red;
`;

const Button = styled.button`
  padding: 10px 18px;
  background-color: black;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  outline: none;
  margin-top: 45px;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  margin-top: 10px;
  padding-left: 10px;
  outline: none;
  border-radius: 3px;
  border: 1px solid silver;
`;

const Main = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
