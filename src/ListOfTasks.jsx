import React from "react";

import Task from "./Task";

export default function List({ tasks, deleteTask, taskCompleted }) {
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
