import React from "react";
import { useFormik } from "formik";
import { Center, Box, Flex, Input, Select, Button } from "@chakra-ui/react";

export default function AddingTasks({ setTask, tasks }) {


  const randomId = () => self.crypto.randomUUID();

  const formik = useFormik({
    initialValues: {
      title: "",
      state: false,
    },

    validate: (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "Required";
      } else if (values.title.length > 25 || values.title.length < 4) {
        errors.title = "El titulo debe ser entre 4 y 25 caracteres";
      }

      return errors;sd
    },
    onSubmit: (values) => {
      localStorage.setItem("tasks", JSON.stringify([...tasks, values]));
      setTask([...tasks, {...values, id: randomId()}]);
      formik.resetForm()
    },
    
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Flex gap="20" justifyContent="center">
        <Box w="40%" h="100px" m="4" p="4">
          <label htmlFor="title">Tarea</label>
          <Input
            bg="#fafafa"
            border="2px"
            borderColor="#cfb5a9"
            placeholder="Ingresa una tarea"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title ? <div>{formik.errors.title}</div> : null}
        </Box>

        {/* <Box w="40%" h="100px" m="4" p="4">
          <h1>Seleccionar</h1>
          <Select
            bg="#fafafa"
            border="2px"
            borderColor="#cfb5a9"
            placeholder="Ingresa una tarea"
          >
            <option value="Todas">Todas</option>
            <option value="Completas">Completas</option>
            <option value="Incompletas">Incompletas</option>
          </Select>
        </Box> */}
      </Flex>
      <Center>
        <Button mb="6" type="submit" bg="#cfb5a9" variant="solid" w="150px">
          Send
        </Button>
      </Center>
    </form>
  );
}
