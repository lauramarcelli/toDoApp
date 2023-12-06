import Header from "./Header";
import AddingTasks from "./AddingTasks";
import Task from "./Task";
import ListOfTask from "./ListOfTasks";
import { Box, AbsoluteCenter } from "@chakra-ui/react";
import Flower from "./assets/rm428-0025.jpg";
import { useState } from "react";


function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  
  console.log(task);

  const deleteTask = (id) => {
    console.log(id);
    const taskFilter = task.filter((task) => task.id !== id);
    console.log(taskFilter);
    localStorage.setItem("tasks", JSON.stringify(taskFilter));
    setTask(taskFilter);
  };

  const taskCompleted = () => {
    };

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
          <AddingTasks setTask={setTask} tasks={task} />
          <ListOfTask
            tasks={task}
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
