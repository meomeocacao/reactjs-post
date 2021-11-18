import { CircularProgress } from "@mui/material";
import React from "react";
import { Row, Container, Col, Alert, Image } from "react-bootstrap";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Box } from "@mui/system";
import { Button, Typography } from "@material-ui/core";
import axios from "axios";
// import { Link as RouterLink } from "react-router-dom";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { TYPE_MODAL } from "../PostInfor";
import CustomizedTooltips from "../../Tooltips/Avatar.Tooltips";
interface Props {
  title: string;
  description: string;
  img: string;
  user: string;
  id: string;
  openModal: (e: string, id: string) => void;
}
export const Item = (props: Props) => {
  //   if (!props.img)
  //     props.img =
  //       "lh3.googleusercontent.com/proxy/JIEL7QnRRMOJWbyoBPtIrn76Yz2CY-sPIeNdImolWM5f0_8q3PTkFURhi8jBYS5QN-1f6V9yrmfKJwHPKYlz7F4QDzZ-EfpplIVo1e6PrpRdchvE-pdmc2pC6z4blKre9YOYfhUQmz3zq-AZqVbhFdhXvtvQehndGiXmB9w2btp40mSmHYSIbnFqkJEq4honqhm6J7QT_7jt";
  return (
    <Container className="m-4 bg-light" id={props.id}>
      <Row className="p-2">
        <Col xs={4}>
          {/* <Image
            src={"http://" + props.img}
            width="150px"
            height="150px"
            roundedCircle
          /> */}
          {/* <h1>{props.user}</h1> */}
          <CustomizedTooltips
            src={"http://" + props.img}
            user={props.user}
            desc={props.description}
          />
        </Col>
        <Col xs={7}>
          <Alert variant="success">
            <h3>{props.title}</h3>
          </Alert>

          <Typography color="textPrimary" align="justify">
            {props.description}
          </Typography>
        </Col>
        <Col xs={1}>
          <Tooltip title="Delete" placement="right-start">
            <Button
              id="delete"
              onClick={() => props.openModal(TYPE_MODAL.DELETE_MODAL, props.id)}
            >
              <DeleteOutlinedIcon />
            </Button>
          </Tooltip>
          <Tooltip title="Update" placement="right-start">
            <Button
              id="update"
              onClick={() => props.openModal(TYPE_MODAL.UPDATE_MODAL, props.id)}
            >
              <CreateOutlinedIcon />
            </Button>
          </Tooltip>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  text: { textAlign: "justify", color: "white", padding: "10px" },
};

const InforPost = (props: any) => {
  return (
    <div>
      <Image
        src={"http://" + props.img}
        width="150px"
        height="150px"
        roundedCircle
      />
      <h1>{props.user}</h1>
    </div>
  );
};
