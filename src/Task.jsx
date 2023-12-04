import React from "react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import {
  IconButton,
  ButtonGroup,
  Container,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";

export default function Task({ tasks, deleteTask, taskCompleted }) {
return (
    <>
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
