import React, { ReactElement, FC } from "react";
import { Box, Card, CardActionArea, CardContent, Paper, Typography } from '@mui/material';
import GoogleMapReact from 'google-map-react';
import Bin from '../components/Bin.tsx';

const Home: FC<any> = (): ReactElement => {
  const defaultProps = {
    center: {
      lat: -27.4993056,
      lng: 153.0149717
    },
    zoom: 18
  };
  return (
      <Paper elevation={3} sx={{maxWidth: "lg", width: "100%", height: '100%', px: 3, py: 3}}>
        <Card sx={{ width: '100%', height: '50px', mb: 1 }}>
          <CardActionArea
              onClick={() => alert('omg')}
          >
            <CardContent>
              Balance | Points
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: '100%', height: '50px', mb: 1 }}>
          <CardActionArea
              onClick={() => alert('omg')}
          >
            <CardContent>
              Leaderboard
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ width: '100%', height: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <Bin
              lat={-27.4996424}
              lng={153.0146872}
            />
            <Bin
              lat={-27.499129}
              lng={153.014317}
            />
            <Bin
              lat={-27.500161}
              lng={153.014667}
            />
            <Bin
              lat={-27.499091}
              lng={153.015628}
              text="BIN"
            />
            <Bin
              lat={-27.498718}
              lng={153.014906}
            />
            <Bin
              lat={-27.499884}
              lng={153.013913}
            />
          </ GoogleMapReact>
        </Card>
      </Paper>
  );
};

export default Home;