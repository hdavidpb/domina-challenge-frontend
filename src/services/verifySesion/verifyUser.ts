import { apiRest } from "../../../API/apiRest";

export interface VerifyUserResponse {
  isAuthenticated: boolean;
  userName: string;
}

export const verifyUser = async () => {
  return apiRest<VerifyUserResponse>("/auth/verify")
    .then((res) => {
      return res.data;
    })
    .catch((error: any) => {
      if (error && error.response.data.message === "Unauthorized") return false;
      if (error && error.response.data.message === "Token de acceso inválido")
        return false;
    });
};
