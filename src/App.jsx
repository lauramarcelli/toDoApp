import Header from "./Header";
import AddingTasks from "./AddingTasks";
import List from "./List";
import { Box } from "@chakra-ui/react";
import Flower from "./assets/rm428-0025.jpg";
import { useState } from "react"


function App() {


const [tasks, setTask] = useState(JSON.parse(localStorage.getItem('tasks'))||"");

const onSubmit = (title, e) => {
  e.preventDefault();
  const task = {
    title
  };

  localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  setTask([...tasks, task])
};

console.log(tasks)

  return (
    <>
      <Box bgImage={Flower} h="100vh" bgPosition="center" bgSize="cover" bgRepeat="no-repeat">
        <Header />
        <AddingTasks setTask={setTask} tasks={tasks}/>
        <List tasks={tasks}/>
     </Box>
      </>
  );
}

export default App;
