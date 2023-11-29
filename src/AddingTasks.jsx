import React from "react";
import { useFormik } from "formik";
import {Center, Box, Flex, Input, Select, Button } from "@chakra-ui/react";

export default function AddingTasks({setTask, tasks}) {
  const randomId = () => self.crypto.randomUUID();
  //aca se guardan los valores de los input/
  const formik = useFormik ({
    initialValues: {
      id: randomId() ,
      tarea: "" ,
     completo: false
      id: crypto.randomUUID
    },

    validate: (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "Required";
      } else if (values.title.length > 15 || values.title.length < 4) {
        errors.title = "El titulo debe ser entre 4 y 15 caracteres";
      }

      return errors;
    },
    onSubmit: (values) => {
      localStorage.setItem("tasks", JSON.stringify([... tasks, values]))
      setTask([... tasks, values]);

    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Flex gap="20" justifyContent="center">
        <Box bg="white" w="40%" h="100px" m="6" p="4">
          <label htmlFor="title">Tarea</label>
          <Input
            placeholder="Ingresa una tarea"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title ? <div>{formik.errors.title}</div> : null}
        </Box>

        <Box bg="white" w="40%" h="100px" m="6" p="4">
          <h1>Seleccionar</h1>
          <Select>
            <option value="Todas">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Incompletas">Incompletas</option>
          </Select>
        </Box>
        
      </Flex>
    <Center>
      <Button type="submit" colorScheme="teal" variant="solid" w="150px">
        Send
      </Button>
       </Center>
    </form>
  );
}
