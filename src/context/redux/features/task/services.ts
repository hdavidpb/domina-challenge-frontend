import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRest } from "../../../../../API/apiRest";
import {
  CreateTaskBody,
  CreateTaskResponse,
  Task,
  TaskResponse,
  UpdateTaskBody,
  UpdateTaskResponse,
} from "./interfaces";
import { alerts } from "../../../../utils";

export const getAllTasks = createAsyncThunk(
  "GET-TASKS",

  async (_, { rejectWithValue }) => {
    try {
      const response = await apiRest<TaskResponse>("/task");

      return response.data;
    } catch (error: any) {
      alerts.errorAlert("Ah ocurrido un error al cargar las tareas");
      return rejectWithValue(error.code);
    }
  }
);

export const createTask = createAsyncThunk(
  "CREATE-TASK",

  async (data: CreateTaskBody, { rejectWithValue }) => {
    try {
      const response = await apiRest.post<CreateTaskResponse>("/task", data);

      return response.data;
    } catch (error: any) {
      alerts.errorAlert("Error creando la tarea");
      return rejectWithValue(error.code);
    }
  }
);

export const updateTask = createAsyncThunk(
  "UPDATE-TASK",

  async (
    { id, data }: { id: string; data: UpdateTaskBody },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiRest.patch<UpdateTaskResponse>(
        `/task/${id}`,
        data
      );

      return response.data.taskUpdated;
    } catch (error: any) {
      alerts.errorAlert("Error creando la tarea");
      return rejectWithValue(error.code);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "DELETE-TASK",

  async (id: string, { rejectWithValue }) => {
    try {
      const response = await apiRest.delete<Task>(`/task/${id}`);

      return response.data;
    } catch (error: any) {
      alerts.errorAlert("Error creando la tarea");
      return rejectWithValue(error.code);
    }
  }
);
