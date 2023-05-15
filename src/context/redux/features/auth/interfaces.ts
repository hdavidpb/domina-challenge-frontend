export interface IInitialState {
  isAuth: null | boolean;
  userName: string;
  isLoading: boolean;
}

export interface CreateUserBody {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface loginUserBody {
  email: string;
  password: string;
}
export interface CreateUserResponse {
  data: Data;
  message: string;
  statusCode: number;
}

export interface LoginUserResponse {
  access_token: string;
  userName: string;
}

export interface Data {
  username: string;
}
