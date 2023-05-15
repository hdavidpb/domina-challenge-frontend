import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRest } from "../../../../../API/apiRest";
import {
  CreateUserBody,
  CreateUserResponse,
  LoginUserResponse,
  loginUserBody,
} from "./interfaces";
import { localStorageService } from "../../../../services";
import { alerts } from "../../../../utils";

export const registerUser = createAsyncThunk(
  "CREATE-USER",

  async (data: CreateUserBody, { rejectWithValue }) => {
    try {
      const response = await apiRest.post<CreateUserResponse>(
        "/auth/register",
        data
      );
      alerts.succesAlert("Te has registrado de manera exitosa");
      return response.data;
    } catch (error: any) {
      if (error && error.response.data.message === "user already exists") {
        alerts.errorAlert("Ya existe este usuario");
      }
      return rejectWithValue(error.code);
    }
  }
);

export const loginUser = createAsyncThunk(
  "LOG-IN",

  async (data: loginUserBody, { rejectWithValue }) => {
    try {
      const response = await apiRest.post<LoginUserResponse>(
        "/auth/login",
        data
      );

      localStorageService.setAccesToken(response.data.access_token);

      alerts.succesAlert(`Bienvenid@ ${response.data.userName}`);
      return response.data;
    } catch (error: any) {
      if (error && error.response.data.message === "invalid credentials") {
        alerts.errorAlert("Credenciales inválidas!");
      }

      return rejectWithValue(error.code);
    }
  }
);
