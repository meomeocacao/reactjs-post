import { Button, MenuItem, Select } from "@mui/material";
import Input from "@mui/material/Input";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "./User.module.scss";
import BlockIcon from "@mui/icons-material/Block";
import { checkValidateEmail, checkValidatePassword } from "./validate/Validate";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const User = () => {
  const state = {
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    gender: "",
    age: "",
    password: "",
    confirmPassword: "",
  };
  const navigate = useNavigate();
  const [infor, setInfor] = useState(state);
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setInfor((prevState) => ({ ...prevState, [name]: value }));
  };
  const checkPassword = () => {
    if (infor.confirmPassword.length > 1) {
      if (infor.password === infor.confirmPassword) {
        return (
          <Box sx={{ color: "success" }}>
            <Typography color="error"> Password is valid</Typography>
            <CheckCircleOutlineIcon color="success" />
          </Box>
        );
      }
      return (
        <Box
          sx={{ color: "warning", display: "flex", justifyContent: "center" }}
        >
          <Typography color="error"> Password are not same</Typography>
          <BlockIcon color="warning" />
        </Box>
      );
    }
  };

  const onSubmit = () => {
    const user = {
      email: infor.email,
      firstname: infor.firstName,
      lastname: infor.lastName,
      age: infor.age,
      password: infor.password,
    };
    axios
      .post("https://nestjs-post.herokuapp.com/user", user)
      .then((res) => {
        console.log(res.data);
        navigate("/sign-in");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={styles.User} data-testid="User">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "grid", width: "40%" }}>
          <h1>Sign Up</h1>
          <Input
            placeholder="Username"
            className="m-4"
            name="email"
            value={infor.email}
            onChange={handleChange}
          />
          {checkValidateEmail(infor.email) ? (
            <Box sx={{ color: "success" }}>
              Email is valid
              <CheckCircleOutlineIcon color="success" />
            </Box>
          ) : null}
          <Input
            placeholder="Phone"
            className="m-4"
            name="phone"
            value={infor.phone}
            type="number"
            onChange={handleChange}
          />
          <Input
            placeholder="First Name"
            className="m-4"
            value={infor.firstName}
            name="firstName"
            onChange={handleChange}
          />
          <Input
            placeholder="Last Name"
            className="m-4"
            value={infor.lastName}
            name="lastName"
            onChange={handleChange}
          />
          <Input
            placeholder="Country"
            className="m-4"
            name="country"
            value={infor.country}
            onChange={handleChange}
          />
          <Box>
            <Select
              name="gender"
              onChange={handleChange}
              defaultValue="default"
            >
              <MenuItem value={"default"}>Gender...</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"none"}>None</MenuItem>
            </Select>
            <Input
              placeholder="Age"
              className="m-4"
              name="age"
              value={infor.age}
              onChange={handleChange}
            />
          </Box>

          <Input
            placeholder="Password"
            className="m-4"
            name="password"
            type="password"
            value={infor.password}
            onChange={handleChange}
          />
          {checkValidatePassword(infor.password) ? (
            <Box sx={{ color: "success" }}>
              Password is valid
              <CheckCircleOutlineIcon color="success" />
            </Box>
          ) : null}
          <Input
            placeholder="Confirm Password"
            className="m-4"
            type="password"
            name="confirmPassword"
            value={infor.confirmPassword}
            onChange={handleChange}
          />
          {/* {checkPassword() ? (
            <Box sx={{ color: "warning" }}>
              <BlockIcon color="warning" /> Password are not same
            </Box>
          ) : null} */}
          {checkPassword()}
          <Box>
            <Button
              color="primary"
              variant="contained"
              disabled={
                !checkValidateEmail(infor.email) ||
                !checkValidatePassword(infor.password) ||
                !checkPassword()
              }
              onClick={onSubmit}
            >
              <Link to={"/home"}>Sign Up</Link>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default User;
