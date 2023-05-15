import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./interfaces";
import { loginUser, registerUser } from "./services";
import { VerifyUserResponse } from "../../../../services/verifySesion/verifyUser";
import { localStorageService } from "../../../../services";

const initialState: IInitialState = {
  isAuth: null,
  userName: "",
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth(state, action: PayloadAction<VerifyUserResponse>) {
      state.isAuth = action.payload.isAuthenticated;
      state.userName = action.payload.userName;
    },
    logOut(state) {
      state.isAuth = false;

      localStorageService.removeToken();
    },
  },
  extraReducers({ addCase }) {
    addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.userName = payload.data.username;
    });
    addCase(registerUser.rejected, (state) => {
      state.isLoading = false;
    });
    addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    addCase(loginUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = payload.access_token ? true : false;
      state.userName = payload.userName;
    });
    addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { setIsAuth, logOut } = authSlice.actions;

export default authSlice.reducer;
