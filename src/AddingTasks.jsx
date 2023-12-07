import React from "react";
import { useFormik } from "formik";
import { Center, Box, Flex, Input, Button, AbsoluteCenter } from "@chakra-ui/react";

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

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Flex>
        <Box w="60%" h="100px" m="4" p="4" mb="7">
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
      </Flex>
      <Center>
        <Button ml="300" type="submit" bg="#cfb5a9" variant="solid" w="150px">
          Send
        </Button>
      </Center>
    </form>
  );
}
