import React from "react";
import { ButtonGroup, Container, Button, Text, Flex } from "@chakra-ui/react";


export default function List({tasks}) {
  console.log(tasks)
  return (
    tasks.map((task) => {
      return (
        <Container >
      <Flex
        mt="2"
        bg="pink"
        color="black"
        w="500px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Text m="2" fontSize="xl">
          {task.title}
        </Text>
        <ButtonGroup>
          <Button colorScheme="teal" variant="solid" w="50px">
            Hecho
          </Button>
          <Button colorScheme="teal" variant="solid" w="50px">
            Delete    
          </Button>
        </ButtonGroup>
      </Flex>
    </Container>
      )
    })
  
  );
}
