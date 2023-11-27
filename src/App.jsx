import "./App.css";
import Header from "./Header";
import AddingTasks from "./AddingTasks";
import List from "./List";
import { Box } from "@chakra-ui/react";
import Woman from "./assets/8686.jpg";

function App() {
  

  return (
      <Box bgImage={Woman} h="90vh" bgPosition="center" bgSize="cover" bgRepeat="no-repeat">
        <Header />
        <AddingTasks />
        <List />
      </Box>
  );
}

export default App;
