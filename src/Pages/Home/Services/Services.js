import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    name: "Fluoride Treatment",
    description:
      "The name of our country is Bangladesh.Bangladeh is an agricultural country.I love my counrtry very much.",
    img: fluoride,
  },
  {
    name: "Fluoride Treatment",
    description:
      "The name of our country is Bangladesh.Bangladeh is an agricultural country.I love my counrtry very much.",
    img: cavity,
  },
  {
    name: "Fluoride Treatment",
    description:
      "The name of our country is Bangladesh.Bangladeh is an agricultural country.I love my counrtry very much.",
    img: whitening,
  },
];
const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          variant="h6"
          sx={{ color: "success.main", m: 2, fontWeight: 500 }}
          component="div"
        >
          Our Services
        </Typography>
        <Typography
          variant="h4"
          sx={{ m: 2, fontWeight: "bold" }}
          component="div"
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
