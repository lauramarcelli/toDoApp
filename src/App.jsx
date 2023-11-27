import Header from "./Header";
import AddingTasks from "./AddingTasks";
import List from "./List";
import { Box, Container } from "@chakra-ui/react";
import Flower from "./assets/rm428-0025.jpg";

function App() {
  

  return (
    
      <Box bgImage={Flower} h="100vh" bgPosition="center" bgSize="cover" bgRepeat="no-repeat"display="flex">
        <Header />
        <AddingTasks />
        <List />
      </Box>
  );
}

export default App;
