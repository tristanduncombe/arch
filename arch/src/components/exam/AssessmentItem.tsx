import React, { FC, ReactElement } from "react";
import { Box, Card, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

interface MessageProps {
    title: string;
    type: number;
    content: string;
    author: string;
    imageUrl: string;
}

export const Message: FC<MessageProps> = ({ title, type, content, author }): ReactElement => {
    
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                mt: "10",
                pt: "1",
                pb: "1",
            }}
        >
            <Card elevation={3} sx={{ py: 2, px: 2, width: '100%' }}>
            <Grid container spacing={2}>
                <Grid>
                    <Typography component="div" variant="caption">
                        {author}
                    </Typography>
                </Grid>
                <Grid xs={10}>
                    <Typography component="div" variant="caption">
                        {title}
                    </Typography>
                </Grid>
            </Grid>
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                <Typography component="div" variant="body1">
                    {content}
                </Typography>

            </Card>
        </Box>
    );
};

export default Message;