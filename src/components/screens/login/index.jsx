import { React, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../../store/actions/Auth";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let userInfo = useSelector((state) => state?.user?.authInfo);
  let auth = useSelector((state) => state?.user);
  let authCheck = useSelector((state) => state?.user?.isLoggedIn);

  const [snackBar, setSnackBar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  useEffect(() => {
    if (authCheck && !auth.error) {
      setSnackBar((prev) => {
        return { ...prev, open: true, severity: 'success', message: 'Login success' };
      });
      setTimeout(() => {
        if (userInfo && userInfo?.role === "user") {
          navigate("/user");
        } else {
          navigate("/admin");
        }
      }, 2000);
    }
    if(auth.error){
      setSnackBar((prev) => {
        return { ...prev, open: true, severity: 'error', message: 'Invalid Login' };
      });
    }
  }, [authCheck, userInfo, auth]);

  const hideSnackBar = () => {
    setSnackBar((prev) => {
      return { ...prev, open: false };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      pass: data.get("password"),
    };
    dispatch(authUser(userData));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AssessmentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={snackBar.open}
          autoHideDuration={6000}
          onClose={() => hideSnackBar()}
          message=""
          key={"top" + "center"}
        >
          <Alert 
            severity={snackBar.severity} sx={{ width: "100%" }}>
            {snackBar.message}
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
}
