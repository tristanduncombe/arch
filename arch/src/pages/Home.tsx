import React, { ReactElement, FC } from "react";
import { Box, Paper, Typography } from "@mui/material";

const Home: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#c2c2c2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{maxWidth: "lg", width: "100%", px: 3, py: 3}}>
        <Typography variant="h2">
          ReactAttic
        </Typography>
        <Typography variant="h6">
          Like UQAttic, but way worse!
        </Typography>
        <Typography sx={{my: 2}}>
          Our goal is provide answers to tests from the University of Queensland.
        </Typography>
      </Paper>

    </Box>
  );
};

export default Home;