import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, Task } from "./interfaces";
import { createTask, deleteTask, getAllTasks, updateTask } from "./services";

const initialState: IInitialState = {
  tasks: [],
  isLoadingTasks: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    selectedTask(state, action: PayloadAction<Task>) {
      state.taskSelected = action.payload;
    },
    unSelectedTask(state) {
      state.taskSelected = undefined;
    },
  },
  extraReducers({ addCase }) {
    addCase(getAllTasks.pending, (state) => {
      state.isLoadingTasks = true;
    });
    addCase(getAllTasks.fulfilled, (state, { payload }) => {
      state.isLoadingTasks = false;
      state.tasks = payload.tasks;
    });
    addCase(createTask.pending, (state) => {
      state.isLoadingTasks = true;
    });
    addCase(createTask.fulfilled, (state, { payload }) => {
      state.isLoadingTasks = false;
      state.tasks = [...state.tasks, payload.task];
    });
    addCase(createTask.rejected, (state) => {
      state.isLoadingTasks = false;
    });

    addCase(updateTask.fulfilled, (state, { payload }) => {
      state.tasks.forEach((task) => {
        if (task.id === payload.id) {
          task.description = payload.description;
          task.isChecked = payload.isChecked;
        }
      });
    });

    addCase(updateTask.rejected, (state) => {
      state.isLoadingTasks = false;
    });
    addCase(deleteTask.pending, (state) => {
      state.isLoadingTasks = true;
    });
    addCase(deleteTask.fulfilled, (state, { payload }) => {
      state.isLoadingTasks = false;
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
    });
    addCase(deleteTask.rejected, (state) => {
      state.isLoadingTasks = false;
    });
  },
});

export const { selectedTask, unSelectedTask } = taskSlice.actions;

export default taskSlice.reducer;
