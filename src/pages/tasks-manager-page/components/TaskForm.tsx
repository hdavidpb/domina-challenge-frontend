import { Formik, Form } from "formik";

import { Button } from "@mui/material";
import { TextFormField } from "../../../components/forms";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../context/redux/store";
import * as Yup from "yup";
import { createTask } from "../../../context/redux/features/task/services";

export const TaskForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoadingTasks } = useSelector((store: RootState) => store.task);

  return (
    <Formik
      initialValues={{ description: "" }}
      onSubmit={(values, { resetForm }) => {
        dispatch(createTask(values));

        resetForm();
      }}
      validationSchema={Yup.object({
        description: Yup.string().required("* Campo requerido"),
      })}
    >
      <Form className="task-input-container">
        <TextFormField fullWidth name="description" label="Añadir tarea" />
        <Button type="submit" disabled={isLoadingTasks} variant="contained">
          Guardar
        </Button>
      </Form>
    </Formik>
  );
};
