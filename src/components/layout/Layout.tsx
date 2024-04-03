import React, { FC, ReactNode } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './Navbar.tsx';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <Navbar/>
            <Box
                sx={{
                    marginTop: '15px',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    minHeight: "100vh",
                    maxWidth: "100vw",
                    flexGrow: 1,
                }}
            >
                {children}
            </Box>
        </>
    );
};

export default Layout;
