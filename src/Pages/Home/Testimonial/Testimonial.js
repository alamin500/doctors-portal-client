import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import people1 from "../../../images/people-1.png";
import { Container, Typography } from "@mui/material";
const Testimonial = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper>
            <Typography sx={{ my: 2, p: 5 }} variant="body2" gutterBottom>
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.body2. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <img style={{ width: "50px" }} src={people1} alt="" />
              <Box>
                <Typography variant="h6" gutterBottom component="div">
                  h6. Heading
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  caption text
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>
            <Typography sx={{ my: 2, p: 5 }} variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <img style={{ width: "50px" }} src={people1} alt="" />
              <Box>
                <Typography variant="h6" gutterBottom component="div">
                  h6. Heading
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  caption text
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper>
            <Typography sx={{ my: 2, p: 5 }} variant="body2" gutterBottom>
              body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "10px",
              }}
            >
              <img style={{ width: "50px" }} src={people1} alt="" />
              <Box>
                <Typography variant="h6" gutterBottom component="div">
                  h6. Heading
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  caption text
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonial;
