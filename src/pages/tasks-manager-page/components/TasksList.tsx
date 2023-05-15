import { List, Typography } from "@mui/material";

import { TaskItem } from "./TaskItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../context/redux/store";
import { SkeletonTable } from "../../../components/UI";

export const TasksList = () => {
  const { tasks, isLoadingTasks } = useSelector(
    (store: RootState) => store.task
  );

  return (
    <List
      sx={{
        width: "100%",
        maxHeight: "61vh",
        overflowY: "auto",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        boxShadow: "12px 10px 19px -18px rgba(117,100,117,1)",
      }}
    >
      {isLoadingTasks && <SkeletonTable />}
      {tasks.length === 0 && (
        <Typography variant="body1" align="center">
          Aún no tienes tareas
        </Typography>
      )}
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </List>
  );
};
