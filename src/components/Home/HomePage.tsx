import React, { useState } from "react";
import axios, { Axios } from "axios";
import { Button } from "@material-ui/core";
import { PostInfor } from "./PostInfor";
import CustomizedTooltips from "../Tooltips/Avatar.Tooltips";
export const HomePage = () => {
  const postA = [
    { title: "title 1", description: " desc 1" },
    { title: "title 2", description: " desc 2" },
    { title: "title 3", description: " desc 3" },
    { title: "title 4", description: " desc 4" },
  ];

  return (
    <div>
      <PostInfor />
    </div>
  );
};
