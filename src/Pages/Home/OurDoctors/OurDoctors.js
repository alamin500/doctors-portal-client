import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import doctor from "../../../images/doctor-small.png";

const OurDoctors = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography
            style={{ color: "#4ACEDB" }}
            variant="h5"
            gutterBottom
            component="div"
          >
            Our Doctors
          </Typography>
          <img style={{ width: "100%" }} src={doctor} alt="" />
          <Typography variant="h6" gutterBottom component="div">
            h6. Heading
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img style={{ width: "100%" }} src={doctor} alt="" />
          <Typography variant="h6" gutterBottom component="div">
            h6. Heading
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img style={{ width: "100%" }} src={doctor} alt="" />
          <Typography variant="h6" gutterBottom component="div">
            h6. Heading
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            caption text
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default OurDoctors;
