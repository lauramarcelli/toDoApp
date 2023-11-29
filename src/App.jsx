import Header from "./Header";
import AddingTasks from "./AddingTasks";
import List from "./List";
import { Box, Container } from "@chakra-ui/react";
import Flower from "./assets/rm428-0025.jpg";
import { useState } from "react"


function App() {

  const randomId = () => self.crypto.randomUUID();

const [task, setTask] = useState([
  {
    id: randomId() ,
  tarea: "" ,
 completo: false
}
]) 
console.log(task)

  return (
    <>
      <Box bgImage={Flower} h="100vh" bgPosition="center" bgSize="cover" bgRepeat="no-repeat">
        <Header />
        <AddingTasks />
        <List />
     </Box>
      </>
  );
}

export default App;
