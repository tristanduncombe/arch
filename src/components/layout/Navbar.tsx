import React, { FC, ReactElement } from 'react';
import { Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { ArrowBack } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

const Navbar: FC = (): ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Box
            sx={{
                height: "auto",
                backgroundColor: "secondary.main",
            }}
        >
            <Container>
                <Toolbar disableGutters>
                    {location.pathname !== '/' && (<IconButton onClick={() => navigate('/')}>
                        <ArrowBack sx={{color: 'white'}}/>
                    </IconButton>)}
                    {location.pathname === '/' && (<img
                        src="https://wiki.installgentoo.com/images/f/f9/Arch-linux-logo.png"
                        width={30}
                        style={{marginRight: '5px'}}
                    ></img>)}

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            color: "white",
                            textTransform:'capitalize'
                        }}
                    >
                        {location.pathname === '/' ? "ARCH" : location.pathname.slice(1)}
                    </Typography>
                    <Box sx={{ alignItems: "right" }}></Box>
                    {location.pathname === '/' && (
                        <IconButton onClick={() => navigate('/account')}>
                            <Avatar sx={{width: 30, height: 30}}>J</Avatar>
                        </IconButton>
                    )}
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Navbar;
