import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import useLogin from "../Hooks/useLogin";

const defaultTheme = createTheme();

const Login = () => {
  const { LoginPage, loading } = useLogin();
 
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const changeHandeler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await LoginPage(login);
    setLogin({
      email: "",
      password: "",
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
        className="wrapper"
      >
        <CssBaseline />
        <Box
          sx={{
            padding: "30px",
            width: "100%",
            borderRadius: "10px",
            boxShadow: "0px 0px 4px 0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              LOG IN
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                onChange={changeHandeler}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={login.email}
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={changeHandeler}
                margin="normal"
                required
                fullWidth
                name="password"
                value={login.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "#ff7549" }}
                sx={{ mt: 3, mb: 2 }}
              >
                {loading ? (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  "Log in"
                )}
              </Button>
              <Grid container>
                <Grid item>
                  <Link to={"/signup"} variant="body2">
                    {"Don't have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
