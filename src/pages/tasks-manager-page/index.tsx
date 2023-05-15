import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context/redux/store";
import { Container, Box } from "@mui/material";

import { TasksList } from "./components/TasksList";
import { useEffect } from "react";
import { getAllTasks } from "../../context/redux/features/task/services";
import { TaskForm } from "./components/TaskForm";

import { UpdateTaskFormModal } from "./components/UpdateTaskFormModal";
import { Navbar } from "../../components/UI";

import "./styles.css";
const TasksManagerPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { userName } = useSelector((store: RootState) => store.auth);

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <Container
      className="task-page-container"
      maxWidth={false}
      style={{ padding: 0 }}
    >
      <Navbar />
      <Box className="task-layout-container">
        <span
          style={{
            fontSize: "20px",
            alignSelf: "flex-start",
          }}
        >
          Bienvenid@{" "}
          <strong style={{ textTransform: "capitalize" }}>{userName}</strong>,
          aquí podras administrar tus tareas!
        </span>

        <TaskForm />

        <TasksList />
      </Box>

      <UpdateTaskFormModal />
    </Container>
  );
};

export default TasksManagerPage;
