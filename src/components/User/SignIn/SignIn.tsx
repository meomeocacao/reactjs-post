import { TextField, Input, Button } from "@material-ui/core";
import { TextareaAutosize } from "@mui/core";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";

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
  const onSubmit = () => {
    axios
      .post("http://localhost:3300/login", {
        username: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        setCheck(true);
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
            placeholder="User"
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
          {check ? <p>Login Success</p> : null}
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
