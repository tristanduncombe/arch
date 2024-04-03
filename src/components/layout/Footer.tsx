import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Link, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        color: "white",
        p: 2,
      }}
    >
      <Container maxWidth="md" sx={{p:2}}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">ReactAttic</Typography>
            <Typography variant="body1">
              Improving "the UQ Experience"
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              &copy; {new Date().getFullYear()} ReactAttic. All rights reserved.
            </Typography>
            <Typography variant="body1">
              <Link href="https://github.com/tristanduncombe/ReactAttic" sx={{color: "white"}}>Please Consider Contributing</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
