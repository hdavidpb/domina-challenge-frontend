import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextFormField } from "../../components/forms/TextFormField";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context/redux/store";
import { registerUser } from "../../context/redux/features/auth/services";
import { CreateUserBody } from "../../context/redux/features/auth/interfaces";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
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
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          password: "",
          repeat_password: "",
        }}
        onSubmit={(values: CreateUserBody) => {
          dispatch(registerUser(values)).then((res) => {
            switch (res.meta.requestStatus) {
              case "fulfilled":
                navigate("/auth/login");
                return;
              case "rejected":
                return "";

              default:
                return;
            }
          });
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Campo requerido"),
          lastName: Yup.string().required("Campo requerido"),
          email: Yup.string()
            .email("Dirección de email inválida!")
            .required("Campo requerido"),
          password: Yup.string()
            .min(6, "Minimo 6 caracteres")
            .required("Campo requerido"),
          repeat_password: Yup.string()
            .equals([Yup.ref("password")], "Las contraseñas no coinciden")
            .required("Campo requerido"),
        })}
      >
        <Form className="form-container">
          <Typography variant="h4" alignSelf="flex-start">
            Registrate
          </Typography>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <TextFormField name="name" label="Tu nombre" />
            <TextFormField name="lastName" label="Tu apellido" />
          </Box>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <TextFormField
              fullWidth
              name="email"
              label="Tu correo electrónico"
            />
            <TextFormField
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
            />
            <TextFormField
              fullWidth
              name="repeat_password"
              label="Repite tu contraseña"
              type="password"
            />
          </Box>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button type="submit" variant="contained">
              Registrarse
            </Button>
          )}
        </Form>
      </Formik>
    </Box>
  );
};

export default RegisterPage;
