import React, { ReactElement, FC } from "react";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Divider,
    Paper,
    Typography,
} from "@mui/material";
import GoogleMapReact from "google-map-react";
import Bin from "../components/Bin.tsx";
import { useNavigate } from "react-router";

const Home: FC<any> = (): ReactElement => {
    const defaultProps = {
        center: {
            lat: -27.4993056,
            lng: 153.0149717,
        },
        zoom: 18,
    };
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: "#F7F6F3",
            }}
        >
            <Card sx={{ px: 4, backgroundColor: "#F7F6F3" }} elevation={0}>
                <Paper elevation={0} sx={{ my: 4 }}>
                    ARCH
                </Paper>
                <Card
                    sx={{
                        width: "100%",
                        display: "flex",
                        align: "start",
                        mb: 2,
                    }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Typography>Balance</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography>$0.10</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography>REDEEM</Typography>
                        </CardContent>
                    </CardActionArea>
                    <Divider orientation="vertical" />
                    <CardActionArea onClick={() => alert("omg")}>
                        <CardContent>
                            <Typography>Balance</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography>200</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography>REDEEM</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card
                    sx={{
                        width: "100%",
                        height: "50px",
                        "&hover": { cursor: "pointer" },
                    }}
                    onClick={() => navigate("/leaderboard")}
                >
                    <CardContent>Leaderboard</CardContent>
                </Card>

                <Card sx={{ height: "500px", mt: 4 }}>
                    <Typography sx={{ mt: -4 }}>NEAREST BIN</Typography>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <Bin lat={-27.4996424} lng={153.0146872} />
                        <Bin lat={-27.499129} lng={153.014317} />
                        <Bin lat={-27.500161} lng={153.014667} />
                        <Bin lat={-27.499091} lng={153.015628} text="BIN" />
                        <Bin lat={-27.498718} lng={153.014906} />
                        <Bin lat={-27.499884} lng={153.013913} />
                    </GoogleMapReact>
                </Card>
            </Card>
        </Box>
    );
};

export default Home;
