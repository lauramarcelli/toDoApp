import React from "react";
import { useFormik } from "formik";
import {
  Center,
  Box,
  Flex,
  Input,
  Button,
  AbsoluteCenter,
  Select,
} from "@chakra-ui/react";

export default function AddingTasks({ setTask, tasks }) {
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

      return errors;
    },

    onSubmit: (values) => {
      localStorage.setItem(
        "tasks",
        JSON.stringify([...tasks, { ...values, id: crypto.randomUUID() }])
      );
      setTask([...tasks, { ...values, id: crypto.randomUUID() }]);
      formik.resetForm();
    },
  });

  const handleSelect = (e) => {
    if (e.target.value == "true" || e.target.value == "false") {
      setTask(
        JSON.parse(localStorage.getItem("tasks")).filter((task) => {
          return String(task.state) == e.target.value;
        })
      );
    } else {
      setTask(JSON.parse(localStorage.getItem("tasks")));
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Flex>
        <Box w="70%" h="100px" m="4" p="4" mb="7">
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
        <Box w="70%" h="100px" m="4" p="4">
          <h1>Estado</h1>
          <Select
            onChange={(e) => handleSelect(e)}
            bg="#fafafa"
            border="2px"
            borderColor="#cfb5a9"
            placeholder="Selecciona su estado"
          >
            <option value="all">Todas</option>
            <option value="true">Completas</option>
            <option value="false">Incompletas</option>
          </Select>
        </Box>
      </Flex>
      <Center>
        <Button
          ml="2"
          type="submit"
          bg="#cfb5a9"
          variant="solid"
          w="150px"
          mb="10"
        >
          Send
        </Button>
      </Center>
    </form>
  );
}
