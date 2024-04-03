import React, { ReactElement, FC, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    Divider,
    IconButton,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from "@mui/material";
import GoogleMapReact from "google-map-react";
import Bin from "../components/Bin.tsx";
import { useNavigate } from "react-router";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";

const Home: FC<any> = (): ReactElement => {
    const defaultProps = {
        center: {
            lat: -27.4993056,
            lng: 153.0149717,
        },
        zoom: 18,
    };
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Box
                sx={{
                    flexGrow: 1,
                    backgroundColor: "#F7F6F3",
                }}
            >
                <Card sx={{ px: 4, backgroundColor: "#F7F6F3" }} elevation={0}>
                    <Card
                        sx={{
                            width: "100%",
                            display: "flex",
                            align: "start",
                            mb: 2,
                            mt: 2,
                        }}
                    >
                        <CardActionArea>
                            <CardContent>
                                <Typography>Balance</Typography>
                            </CardContent>
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "small",
                                        display: "flex",
                                    }}
                                >
                                    $0.10
                                </Typography>{" "}
                            </CardContent>
                            <CardContent>
                                <Typography>Redeem</Typography>
                            </CardContent>
                            <Divider orientation="vertical" />
                        </CardActionArea>

                        <Divider orientation="vertical" sx={{ mb: 4 }} />
                        <CardActionArea>
                            <CardContent>
                                <Typography>Points</Typography>
                            </CardContent>
                            <CardContent>
                                <Typography
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "small",
                                        display: "flex",
                                    }}
                                >
                                    1st Position
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography
                                    onClick={() => navigate("/leaderboard")}
                                >
                                    See Leaderboard
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ height: "500px" }}>
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
                        <Button
                            onClick={handleClickOpen}
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                mr: "auto",
                            }}
                            startIcon={<TapAndPlayIcon />}
                        >
                            Redeem Bottle
                        </Button>
                    </Card>
                </Card>
            </Box>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Ready to Scan</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Hold your phone near the object to scan
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Home;
