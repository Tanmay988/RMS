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
import useSignup from "../Hooks/useSignup";

const defaultTheme = createTheme();

const Signup = () => {
  const { signup, loading } = useSignup();

  const [user, setUser] = React.useState({
    restaurantName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandeler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signup(user);
    setUser({
      restaurantName: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
    });

    console.log(user);
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
              SIGN UP
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="restaurant"
                label="Restaurant Name"
                name="restaurantName"
                autoComplete="text"
                onChange={changeHandeler}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="phoneNo"
                label="Mobile Number"
                name="phoneNo"
                autoComplete="number"
                onChange={changeHandeler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={changeHandeler}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={changeHandeler}
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                onChange={changeHandeler}
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
                  " Sign up"
                )}
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/login" variant="body2">
                    {"Already have an account?"}
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

export default Signup;
