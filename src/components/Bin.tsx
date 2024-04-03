import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import React from "react";

function Bin() {
    return (
        <Tooltip title={'ARCH Bin'}>
            <DeleteIcon
                fontSize="large"
                color="primary"
            />
        </Tooltip>
    );
}

export default Bin;