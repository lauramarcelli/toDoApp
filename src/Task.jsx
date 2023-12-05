import React from "react";
import { useState } from "react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import {
  IconButton,
  ButtonGroup,
  Container,
  Text,
  Flex,
  Icon,
} from "@chakra-ui/react";

export default function Task({ id, title, state, deleteTask, taskCompleted }) {
  const [isIconActive, setIsIconActive] = useState(false);

  const handleCompleted = () =>{
   taskCompleted();
   setIsIconActive(!isIconActive);
  }

  return (
    <Container key={id}>
      <Flex
        borderRadius="8"
        border="2px"
        borderColor="#cfb5a9"
        placeholder="Ingresa una tarea"
        p="1"
        mt="2"
        mb="2"
        bg="#fafafa"
        color="black"
        w="500px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Text m="2" fontSize="lg">
          {title}{" "}
        </Text>
        <ButtonGroup>
          <IconButton
            onClick={() => {
              handleCompleted()

            }}
            border="2px"
            borderColor="#cfb5a9"
            aria-label="Search database"
            icon={
              isIconActive ? (
                <Icon as={CheckIcon} />
              ) : (
                <Icon as={CheckIcon} />
              )
            }
            colorScheme={isIconActive ? "green" : "gray"}
          />
          {isIconActive && <p>Mostra este mensaje</p>}

          <IconButton
            border="2px"
            borderColor="#cfb5a9"
            color="#6e8696"
            aria-label="Search database"
            icon={<DeleteIcon />}
            onClick={() => deleteTask(id)}
          />
        </ButtonGroup>
      </Flex>
    </Container>
  );
}