import { Button } from "@mui/material";
import { Formik, Form } from "formik";

import { TextFormField } from "../../../components/forms";
import { updateTask } from "../../../context/redux/features/task/services";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../context/redux/store";
import * as Yup from "yup";
import { ModalUi } from "../../../components/UI/Modal.Ui";
import { unSelectedTask } from "../../../context/redux/features/task/taskSlice";

export const UpdateTaskFormModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { taskSelected } = useSelector((store: RootState) => store.task);
  return (
    <ModalUi
      openModal={taskSelected !== undefined}
      onClose={() => dispatch(unSelectedTask())}
    >
      <Formik
        initialValues={{ description: taskSelected?.description ?? "" }}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            updateTask({
              id: taskSelected!.id,
              data: { ...values, isChecked: taskSelected!.isChecked },
            })
          );
          dispatch(unSelectedTask());
          resetForm();
        }}
        validationSchema={Yup.object({
          description: Yup.string().required("* Campo requerido"),
        })}
      >
        <Form className="task-input-container update-input">
          <TextFormField
            fullWidth
            name="description"
            label="Actualizar tarea"
          />
          <Button type="submit" variant="contained">
            Editar
          </Button>
        </Form>
      </Formik>
    </ModalUi>
  );
};
