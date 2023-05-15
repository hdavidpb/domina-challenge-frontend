import { Formik, Form } from "formik";

import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";

import "./styles.css";
import { TextFormField } from "../../components/forms/TextFormField";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context/redux/store";
import * as Yup from "yup";
import { loginUser } from "../../context/redux/features/auth/services";
import { loginUserBody } from "../../context/redux/features/auth/interfaces";

const LogingPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((store: RootState) => store.auth);

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values: loginUserBody) => {
          dispatch(loginUser(values));
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Dirección de correo inválida")
            .required("Campo requerido"),
          password: Yup.string().required("Campo requerido"),
        })}
      >
        <Form className="form-container">
          <Typography variant="h4" alignSelf="flex-start">
            Bienvenido
          </Typography>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <TextFormField fullWidth name="email" label="Correo electrónico" />
            <TextFormField
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
            />
          </Box>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button type="submit" variant="contained">
              Iniciar sesión
            </Button>
          )}

          <Button
            onClick={() => navigate("/auth/register")}
            type="button"
            variant="text"
            sx={{ alignSelf: "flex-end", color: theme.palette.primary.main }}
          >
            Registrate aquí
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default LogingPage;
