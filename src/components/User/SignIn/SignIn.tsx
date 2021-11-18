import { TextField, Input, Button } from "@material-ui/core";
import { TextareaAutosize } from "@mui/core";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { setTimeout } from "timers";
import { LoginAPI } from "../../../api/api";
export const SignIn = () => {
  const state = {
    email: "",
    password: "",
  };
  const [check, setCheck] = useState(false);
  const [user, setUser] = useState(state);
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    setCheck(true);
    axios
      .post(LoginAPI, {
        username: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        navigate("/");
        // setCheck(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUser({ email: "", password: "" });
      });
    console.log(user);
  };
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "grid", width: "40%" }}>
          <h1> Sign In</h1>
          <TextField
            placeholder="Username"
            className="m-4"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <TextField
            placeholder="Password"
            className="m-4"
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          {check ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ) : null}
          <Box>
            {/* <Link to="/" component={RouterLink}> */}
            <Button color="primary" variant="contained" onClick={onSubmit}>
              Sign In
            </Button>
            {/* </Link> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};
