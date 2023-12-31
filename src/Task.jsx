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

export default function Task({
  id,
  title,
  deleteTask,
  taskCompleted,
  task,
}) {
  const [isIconActive, setIsIconActive] = useState(false);
  const [showStrikethrough, setShowStrikethrough] = useState(false);

  const handleCompleted = () => {
    setIsIconActive(!isIconActive);
    setShowStrikethrough(!showStrikethrough);

  };

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
        <Text
          textDecoration={task.state ? "line-through" : "none"}
          m="2"
          fontSize="lg"
        >
          {title}{" "}
        </Text>
        <ButtonGroup>
          <IconButton
            onClick={() => {
              handleCompleted(id);
              taskCompleted(id);
            }}
            border="2px"
            borderColor={task.state ? "#98b8a4" : "#cfb5a9"}
            aria-label="Search database"
            icon={
              task.state ? <Icon as={CheckIcon} /> : <Icon as={CheckIcon} />
            }
            bg={task.state ? "#98b8a4" : "#cfb5a9"}
          />
          <IconButton
            border="2px"
            borderColor="#cfb5a9"
            bg="#cfb5a9"
            aria-label="Search database"
            icon={<DeleteIcon />}
            onClick={() => deleteTask(id)}
          />
        </ButtonGroup>
      </Flex>
    </Container>
  );
}
