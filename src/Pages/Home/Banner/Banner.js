import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItems: "center",
  border: "1px solid red",
  height: 400,
};
const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ ...verticalCenter, textAlign: "left" }}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Hete
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontSize: 14, my: 5, fontWeight: 300, color: "grey" }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              pariatur aliquid tempora corrupti. Sapiente, est officiis
              doloribus velit dignissimos eos.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: "#5CE7ED" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "350px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
