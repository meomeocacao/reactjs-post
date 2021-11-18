import React, { useState } from "react";
import axios from "axios";
import { Item } from "./Item/Item";
import Box from "@mui/material/Box";
import { Button, Grid, Modal, Typography } from "@mui/material/";
import { ConfirmModal } from "./Modal/ConfirmModal";
import { UpdateModal } from "./Modal/UpdateModal";
export const TYPE_MODAL = {
  UPDATE_MODAL: "update",
  DELETE_MODAL: "delete",
};
export const PostInfor = () => {
  const token = localStorage.getItem("token");
  const state = [
    {
      title: "",
      user: "",
      img: "",
      description: "",
      id: "",
    },
  ];
  const [post, setPost] = useState(state);
  const [open, setOpen] = useState({
    delete: false,
    update: false,
    id: "",
  });

  const handleOpen = (e: string, _id: string) => {
    setOpen({ ...open, [e]: true, id: _id });
  };

  const handleClose = () => {
    setOpen({ delete: false, update: false, id: "" });
    console.log("close");
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:3300/post/")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost:3300/profile", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        console.log("====================================");
        console.log(res.data);
        console.log("====================================");
      });
  }, []);

  return (
    <Grid container>
      {post.map((p, index) => (
        <Item
          openModal={handleOpen}
          id={p.id}
          description={p.description}
          title={p.title}
          user={p.user}
          img={p.img}
        />
      ))}
      <UpdateModal id={open.id} open={open.update} handleClose={handleClose} />
      <ConfirmModal id={open.id} open={open.delete} handleClose={handleClose} />

      <Button
        id="asdasid"
        onClick={(e: any) => {
          console.log(open);
        }}
      >
        asdasd
      </Button>
    </Grid>
  );
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
