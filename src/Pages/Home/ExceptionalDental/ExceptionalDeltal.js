import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import treatment from "../../../images/treatment.png";
import Button from "@mui/material/Button";
const ExceptionalDeltal = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <img style={{ width: "80%" }} src={treatment} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ textAlign: "left", margin: "auto 0" }}
        >
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Exceptional Dental
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Care, on Your Terms
          </Typography>
          <Typography
            sx={{ my: 5 }}
            variant="overline"
            display="block"
            gutterBottom
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            ipsam ad voluptatem placeat odio nam expedita Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Cupiditate ipsam ad voluptatem
            placeat odio nam expedita consequatur. Voluptate aut velit sed
            excepturi quas et iste deserunt dolorem qui nobis, laborum delectus
            maxime nihil, suscipit a voluptatum totam impedit reprehenderit!
            Blanditiis, obcaecati quaerat quo quibusdam esse hic dolor nam
            voluptatum minima?
          </Typography>
          <Button style={{ backgroundColor: "#5CE7ED" }} variant="contained">
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ExceptionalDeltal;
