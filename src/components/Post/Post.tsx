import {
  Box,
  Button,
  Input,
  Link,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  checkValidateEmail,
  checkValidatePassword,
} from "../User/validate/Validate";
import styles from "./Post.module.scss";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Post = () => {
  const token = localStorage.getItem("token");
  const state = {
    user: "",
    title: "",
    description: "",
    img: "",
  };
  const [post, setPost] = useState(state);
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setPost((prevState) => ({ ...prevState, [name]: value }));
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    console.log("Submit");
    const newPost = new FormData();
    newPost.append("file", post.img);
    newPost.append("user", post.user);
    newPost.append("title", post.title);
    newPost.append("description", post.description);
    axios
      .post("https://nestjs-post.herokuapp.com/post/upload", newPost, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        navigate("/");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onChangeImg = (e: any) => {
    console.log(e.target.files[0]);
    setPost((prevState) => ({ ...prevState, img: e.target.files[0] }));
  };
  return (
    <div className={styles.User} data-testid="User">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "grid", width: "40%" }}>
          <h1 className="m-2">Create New Post</h1>
          {/* <TextField
            placeholder="User"
            className="m-4"
            name="user"
            value={post.user}
            onChange={handleChange}
          /> */}

          <TextField
            placeholder="Title"
            className="m-4"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
          <TextareaAutosize
            placeholder="Description"
            className="m-4"
            value={post.description}
            name="description"
            onChange={handleChange}
            minRows="10"
          />
          <label htmlFor="contained-button-file" className="m-4">
            <Input
              id="contained-button-file"
              type="file"
              name="img"
              onChange={onChangeImg}
            />
            {/* <Button variant="contained" component="span" onChange={onChangeImg}>
              Upload
            </Button> */}
          </label>
          <Box>
            {/* <Link to="/" component={RouterLink}> */}
            <Button color="primary" variant="contained" onClick={onSubmit}>
              Upload Post
            </Button>
            {/* </Link> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Post;
