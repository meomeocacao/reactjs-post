import { Box } from "@mui/system";
import React from "react";
import { Row, Container, Col, Alert, Image } from "react-bootstrap";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Typography } from "@material-ui/core";
import styles from "./Footer.module.scss";
export const FooterBlog = () => {
  return (
    <div>
      <Container style={{ backgroundColor: "#202226", padding: 40 }}>
        <Row>
          <Col>
            <Typography variant="h5" className={styles.textContent}>
              About Us{" "}
            </Typography>
            <Typography className={styles.textContent}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              aliquid at cumque dignissimos amet, nulla architecto magni
              molestiae eligendi eaque! Nostrum veniam eveniet aspernatur quod
              optio accusamus molestias alias soluta.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <PhoneEnabledIcon color="success" />
              <Typography className={styles.textContent}>0946007241</Typography>
            </Box>
          </Col>
          <Col>
            <Typography variant="h5" className={styles.textContent}>
              Lastest Tweet
            </Typography>
            <Typography className={styles.textContent}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              aliquid at cumque dignissimos amet, nulla architecto magni
              molestiae eligendi eaque! Nostrum veniam eveniet aspernatur quod
              optio accusamus molestias alias soluta.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <PhoneEnabledIcon color="success" />
              <Typography className={styles.textContent}>0946007241</Typography>
            </Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
