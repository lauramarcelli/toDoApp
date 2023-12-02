import Header from "./Header";
import AddingTasks from "./AddingTasks";
import List from "./List";
import { Box, Text, Center, Circle, AbsoluteCenter } from "@chakra-ui/react";
import Flower from "./assets/rm428-0025.jpg";
import { useState } from "react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";



function App() {

 

  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || ""
  );

  const onSubmit = (title, e) => {
    e.preventDefault();
    const task = {
      title,
    };

    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
    setTask([...tasks, task]);
  };

  console.log(tasks);

  const taskCompleted = (id, title, estado) => {
    console.log(estado);
  };

  const deleteTask = (id) => {
    console.log(id);
    const taskFilter = tasks.filter((task) => task.id !== id);
    console.log(taskFilter);
    localStorage.setItem("tasks", JSON.stringify(taskFilter));
  };

  return (
    <>
      <Box
        bgImage={Flower}
        h="100vh"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        position='relative' 
      >
        <Header />
        <AbsoluteCenter borderRadius="8"  padding="10px" axis='both' bg="#eddad1">
          <AddingTasks setTask={setTask} tasks={tasks} />
          <List
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
