import React, { useState } from 'react';
import { TextField, Button, Grid, Card, Typography } from '@mui/material';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
    const [text, setText] = useState('');

    const downloadQRCode = () => {
        const canvas = document.querySelector('canvas');
        const qrCodeURL = canvas?.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = qrCodeURL || '';
        a.download = 'qrcode.png';
        a.click();
    };

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2} style={{ minHeight: '100vh' }}>
            <Grid item xs={12} sm={8} md={6}>
                <Card elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h4" gutterBottom>Generate QR Code</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Enter text or URL"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        sx={{ marginBottom: 2 }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => setText('')}
                        sx={{ marginBottom: 2 }}
                    >
                        Clear
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={downloadQRCode}
                    >
                        Download QR Code
                    </Button>
                </Card>
            </Grid>
            {text && (
                <Grid item xs={12} sm={8} md={6}>
                    <Card elevation={3} sx={{ padding: 3 }}>
                        <QRCode
                            value={text}
                            size={200}
                            level={"H"}
                            includeMargin={true}
                            renderAs="canvas" 
                            className="mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        />
                    </Card>
                </Grid>
            )}
        </Grid>
    );
};

export default QRCodeGenerator;
