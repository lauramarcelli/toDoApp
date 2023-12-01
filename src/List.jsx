import React from "react";
import { IconButton, ButtonGroup, Container, Button, Text, Flex } from "@chakra-ui/react";
import {DeleteIcon, CheckIcon } from '@chakra-ui/icons'

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
          <IconButton colorScheme='blue' aria-label='Search database' icon={<CheckIcon/>} onClick={() => taskCompleted(id)}/>
          <IconButton colorScheme='blue' aria-label='Search database' icon={<DeleteIcon/>} onClick={() => deleteTask(id)}/>
        </ButtonGroup>
      </Flex>
    </Container>
      ) 
    })

  ) 
  
}
