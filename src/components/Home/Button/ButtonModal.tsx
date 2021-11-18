import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
interface Props {
  handleClose: () => void;
  handlePost: () => void;
  title: string;
}
export const ButtonModal = (props: Props) => {
  return (
    <Box sx={{ justifyContent: "end", display: "flex", padding: 2 }}>
      <Box>
        <Button variant="contained" color="warning" onClick={props.handleClose}>
          Cancel
        </Button>
      </Box>
      <Box sx={{ marginLeft: 2 }}>
        <Button variant="contained" color="primary" onClick={props.handlePost}>
          {props.title}
        </Button>
      </Box>
    </Box>
  );
};
