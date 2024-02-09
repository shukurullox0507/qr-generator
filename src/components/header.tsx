// Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 3 }}>
                    QR Generator
                </Typography>
                <Button color="inherit">First Link</Button>
                <Button color="inherit">Second Link</Button>
                <Button color="inherit">Third Link</Button>
                <Button color="inherit">Fourth Link</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
