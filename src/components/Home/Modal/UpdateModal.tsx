import Box from "@mui/material/Box";
import { Grid, Input, Modal, TextField, Typography } from "@mui/material/";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { ButtonModal } from "../Button/ButtonModal";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { TextareaAutosize } from "@material-ui/core";
interface Props {
  open: boolean;
  // handleOpen: () => void;
  handleClose: () => void;
  id: string;
}
export const UpdateModal = (props: Props) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    img: "",
  });
  const onChangeImg = (e: any) => {
    console.log(e.target.files[0]);
    setPost((prevState) => ({ ...prevState, img: e.target.files[0] }));
  };
  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setPost((prevState) => ({ ...prevState, [name]: value }));
  };
  const updatePicture = () => {
    console.log("Submit");
    const newPost = new FormData();
    newPost.append("file", post.img);
    newPost.append("title", post.title);
    newPost.append("description", post.description);
    const path = "http://localhost:3300/post/" + props.id;

    axios
      .patch(path, newPost)
      .then((res) => {
        console.log(res.data);
        console.log("updateee" + props.id);
      })
      .catch((err) => console.log(err))
      .finally(() => props.handleClose());
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: "green",
              borderRadius: 2,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h1"
              sx={{ color: "white", p: 4 }}
            >
              Update
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", margin: 3 }}>
            <TextField
              label="Title"
              type="text"
              name="title"
              onChange={handleChange}
              value={post.title}
              style={{ margin: 5 }}
            />

            <TextareaAutosize
              // label="Description"
              placeholder="Description"
              // type="text"
              minRows="5"
              name="description"
              onChange={handleChange}
              value={post.description}
              style={{ margin: 5 }}
            />
          </Box>
          {/* <Box>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </Box> */}
          <Box>
            <label htmlFor="contained-button-file" className="m-4">
              <Input
                id="contained-button-file"
                type="file"
                name="img"
                onChange={onChangeImg}
              />
            </label>
          </Box>
          <Box>
            <ButtonModal
              handlePost={updatePicture}
              handleClose={props.handleClose}
              title="Update"
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
