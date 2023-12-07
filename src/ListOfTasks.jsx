import React from "react";
import { Box, Center, Flex, Select } from "@chakra-ui/react";
import Task from "./Task";

export default function List({ tasks, deleteTask, taskCompleted, setTask }) {
  return (
    <>
      <Box>
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
              setTask={setTask}
              task={task}
            />
          );
        })}
      </Box>
    </>
  );
}
