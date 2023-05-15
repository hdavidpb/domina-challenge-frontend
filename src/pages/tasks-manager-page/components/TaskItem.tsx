import { ListItem, Typography, Box, IconButton, Tooltip } from "@mui/material";
import { CustomCheckboxForm } from "../../../components/forms";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Task } from "../../../context/redux/features/task/interfaces";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../context/redux/store";
import {
  deleteTask,
  updateTask,
} from "../../../context/redux/features/task/services";
import { selectedTask } from "../../../context/redux/features/task/taskSlice";

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleSelectedTask = (task: Task) => {
    dispatch(selectedTask(task));
  };

  const handleFinishTask = (task: Task) => {
    dispatch(
      updateTask({
        id: task.id,
        data: { description: task.description, isChecked: !task.isChecked },
      })
    );
  };
  return (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 2,
      }}
    >
      <CustomCheckboxForm
        checked={task.isChecked}
        onChange={() => handleFinishTask(task)}
      />
      <Typography
        flex={1}
        sx={{ textDecoration: task.isChecked ? "line-through" : "none" }}
      >
        {task.description}
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Tooltip title="Editar tarea">
          <IconButton onClick={() => handleSelectedTask(task)}>
            <EditOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Eliminar tarea">
          <IconButton onClick={() => handleDeleteTask(task.id)}>
            <DeleteOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </ListItem>
  );
};
