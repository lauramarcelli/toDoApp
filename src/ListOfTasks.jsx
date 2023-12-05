import React from "react";
import {
  Center,
  Box,
  Flex,
  Input,
  Select,
  Button,
  filter,
} from "@chakra-ui/react";
import Task from "./Task";

export default function List({ tasks, deleteTask, taskCompleted, setTask }) {
  const handleSelect = (e) => {
    if (e.target.value == "true" || e.target.value == "false") {
      setTask(
       JSON.parse(localStorage.getItem("tasks")).filter((task) => {
          return String(task.state) == e.target.value;
        })
      );
    } else {
      setTask(JSON.parse(localStorage.getItem("tasks")));
    }
  };

  return (
    <>
    <Center>
      <Box w="40%" h="100px" m="4" p="4">
        <h1>Seleccionar</h1>
        <Select
          onChange={(e) => handleSelect(e)}
          bg="#fafafa"
          border="2px"
          borderColor="#cfb5a9"
          placeholder="Ingresa una tarea"
        >
          <option  value="all">Todas</option>
          <option value="true">Completas</option>
          <option value="false">Incompletas</option>
        </Select>
      </Box>
      </Center>
      {tasks.map((task) => {
        const { id, title, state } = task;
        return (
          <Task
            key={id}
            id={id}
            title={title}
            state={state}
            taskCompleted={taskCompleted}
            deleteTask={deleteTask}
          />
        );
      })}
      
    </>
  );
}
