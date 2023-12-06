import Header from "./Header";
import AddingTasks from "./AddingTasks";
import Task from "./Task";
import ListOfTask from "./ListOfTasks";
import { Box, AbsoluteCenter } from "@chakra-ui/react";
import Flower from "./assets/rm428-0025.jpg";
import { useState } from "react";


function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // const onSubmit = (title, e) => {
  //   e.preventDefault();
  //   const task = {
  //     title,
  //   };

  //   localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  //   setTask([...tasks, task]);
  // };

  console.log(tasks);

  const deleteTask = (id) => {
    console.log(id);
    const taskFilter = tasks.filter((task) => task.id !== id);
    console.log(taskFilter);
    localStorage.setItem("tasks", JSON.stringify(taskFilter));
    setTask(taskFilter);
  };

  // const taskCompleted = (id) => {
  //    console.log(id)
  //   setTask((tasks) =>
  //   tasks.map((task) =>
  //     task.id === id ? { ...task, state: !task.state } : task
  //   )
  //   )
  //   };

  return (
    <>
      <Box
        bgImage={Flower}
        h="100vh"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        position="relative"
      >
        <Header />
        <AbsoluteCenter
          borderRadius="8"
          padding="10px"
          axis="both"
          bg="#eddad1"
        >
          <AddingTasks setTask={setTask} tasks={tasks} />
          <ListOfTask
            tasks={tasks}
            deleteTask={deleteTask}
            setTask={setTask}
            taskCompleted={taskCompleted}
          />
        </AbsoluteCenter>
      </Box>
    </>
  );
}

export default App;
