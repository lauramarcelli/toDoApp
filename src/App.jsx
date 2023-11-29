import Header from "./Header";
import AddingTasks from "./AddingTasks";
import List from "./List";
import { Box } from "@chakra-ui/react";
import Flower from "./assets/rm428-0025.jpg";
import { useState } from "react"


function App() {


const [task, setTask] = useState(JSON.parse(localStorage.getItem('task'))||"")

  return (
    <>
      <Box bgImage={Flower} h="100vh" bgPosition="center" bgSize="cover" bgRepeat="no-repeat">
        <Header />
        <AddingTasks setTask={setTask} task={task}/>
        <List task={task}/>
     </Box>
      </>
  );
}

export default App;
