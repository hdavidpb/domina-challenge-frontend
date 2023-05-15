import { Box, Container, Grid, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

import logistic from "../../assets/images/logistic.png";
import "./styles.css";

export const LoginLayout = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth={false}
      sx={{ maxWidth: "2500px", height: "100vh", padding: 0 }}
      style={{ padding: 0 }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item sm={4} xs={12}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgcolor={theme.palette.primary.main}
            p={2}
          >
            <img
              src="https://pbs.twimg.com/media/E9lTqNpXoAECjun.png"
              alt="Domina - entrega total"
              className="brand-image "
            />
            <Box
              width="100%"
              flex={1}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <img src={logistic} alt="logistica" className="banner-image" />
            </Box>
          </Box>
        </Grid>
        <Grid item sm={8} xs={12}>
          <Box p={2} width="100%" height="100%">
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
