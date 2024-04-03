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
    const [show, setShow] = useState(false);
    return (
        <Box
            sx={{
                flexGrow: 1,
                backgroundColor: "#F7F6F3",
            }}
        >
            <Card sx={{ px: 4, backgroundColor: "#F7F6F3" }} elevation={0}>
                <Paper elevation={0} sx={{ my: 4, backgroundColor: "#F7F6F3" }}>
                    <Box sx={{ display: "flex" }}>
                        <img
                            src="https://wiki.installgentoo.com/images/f/f9/Arch-linux-logo.png"
                            width={64}
                        ></img>
                        <Box>
                            <Box sx={{ fontWeight: "bold" }}>ARCH</Box>
                            <Box
                                sx={{ fontWeight: "light", fontSize: "small" }}
                            >
                                A Recycle Center Hub
                            </Box>
                        </Box>
                    </Box>
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
                    <CardActionArea>
                        <CardContent>
                            <Typography>Balance</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography>200</Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                sx={{ fontWeight: "500", fontSize: "small" }}
                                onClick={() => navigate("/leaderboard")}
                            >
                                POSITION
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ height: "400px" }}>
                    <Typography
                        sx={{ my: 1, fontWeight: 500, fontSize: "medium" }}
                        align="center"
                    >
                        NEAREST BIN
                    </Typography>
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

                <Card
                    sx={{
                        width: "100%",
                        display: "flex",
                        align: "start",
                        mt: 2,
                        alignItems: "center",
                        pl: 2,
                    }}
                >
                    <Typography sx={{}}>Redeem Bottle</Typography>
                    <IconButton
                        onClick={() => {
                            setShow(true);
                        }}
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            mr: "auto",
                        }}
                    >
                        <TapAndPlayIcon />
                    </IconButton>
                </Card>
            </Card>
        </Box>
    );
};

export default Home;
