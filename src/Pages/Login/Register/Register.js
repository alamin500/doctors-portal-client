import React from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const { user, registerUser, isLoading, authError } = useAuth();
  const history = useHistory();
  const [loginData, setLoginData] = useState({});
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 10 }} xs={12} md={6}>
          <Typography variant="h6" gutterBottom component="div">
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                type="email"
                label="Your Email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-password-input"
                label="Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                autoComplete="current-password"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-password-input"
                label="Re-type password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                autoComplete="current-password"
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                variant="contained"
                type="submit"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">User Created Successfully</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
