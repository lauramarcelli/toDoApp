import React from "react";
import { ButtonGroup, Container, Button, Text, Flex } from "@chakra-ui/react";


export default function List({tasks,deleteTask,taskCompleted}) {

  return (
    tasks.map((task) => {
     const {id, title,estado} = task
      return (
        <Container>
      <Flex
        mt="2"
        bg="pink"
        color="black"
        w="500px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Text m="2" fontSize="xl">{title} </Text>
        <ButtonGroup>
          <Button onClick={() => taskCompleted(id,title,estado)} colorScheme="teal" variant="solid" w="50px">
            Hecho
          </Button>
          <Button onClick={() => deleteTask(id)} colorScheme="teal" variant="solid" w="50px">
            Delete    
          </Button>
        </ButtonGroup>
      </Flex>
    </Container>
      )
    })
  
  );
 
}
