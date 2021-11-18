import Box from "@mui/material/Box";
import { Grid, Modal, Typography } from "@mui/material/";
import Button from "@mui/material/Button";
import React from "react";
import axios from "axios";
import { ButtonModal } from "../Button/ButtonModal";
interface Props {
  open: boolean;
  // handleOpen: () => void;
  handleClose: () => void;
  id: string;
}
export const ConfirmModal = (props: Props) => {
  const deletePicture = () => {
    // const path = "https://nestjs-post.herokuapp.com/post/delete/" + props.id;
    const path = "https://nestjs-post.herokuapp.com/post/delete/";
    axios
      .patch(path)
      .then((res) => {
        console.log(res.data);
        console.log("deeletet");
      })
      .catch((err) => console.log(err));
  };
  const deletePost = () => {
    console.log("Delete " + props.id);
    props.handleClose();
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
              Remove
            </Typography>
          </Box>
          <Typography id="modal-modal-description" sx={{ mt: 2, p: 4 }}>
            Are you sure? You can go to Recycle to restore!
          </Typography>
          <ButtonModal
            handlePost={deletePost}
            handleClose={props.handleClose}
            title="Delete"
          />
        </Box>
      </Modal>
    </div>
  );
};
