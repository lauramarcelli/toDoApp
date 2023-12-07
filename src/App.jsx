import Header from "./Header";
import AddingTasks from "./AddingTasks";
import ListOfTask from "./ListOfTasks";
import { Box, AbsoluteCenter, Grid, GridItem } from "@chakra-ui/react";
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

  const taskCompleted = (id) => {
    const complete = task.map((task) =>
      task.id === id ? { ...task, state: !task.state } : task
    );
    localStorage.setItem("tasks", JSON.stringify(complete));
    setTask(complete);
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
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem colSpan={1}>
              <Box>
                <AddingTasks setTask={setTask} tasks={task} />
              </Box>
            </GridItem>

            <GridItem colSpan={1}>
              <Box>
                <ListOfTask
                tasks={task}
                  deleteTask={deleteTask}
                  setTask={setTask}
                  taskCompleted={taskCompleted}
                />
              </Box>
            </GridItem>
          </Grid>
        </AbsoluteCenter>
      </Box>
    </>
  );
}

export default App;
