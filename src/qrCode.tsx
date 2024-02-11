import React, { useState } from 'react';
import { TextField, Button, Grid, Card, Typography } from '@mui/material';
import QRCode from 'qrcode.react';

const QRCodeGenerator: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [selectedStyle, setSelectedStyle] = useState<string>('style1'); // Default selected style

    const handleStyleChange = (style: string) => {
        setSelectedStyle(style);
    };

    const downloadQRCode = () => {
        const canvas = document.querySelector('canvas');
        const qrCodeURL = canvas?.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = qrCodeURL || '';
        a.download = 'qrcode.png';
        a.click();
    };

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={8} md={6}>
                <Card elevation={3} sx={{ p: 3 }}>
                    <Typography variant="h4" gutterBottom>Generate QR Code</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Enter text or URL"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => setText('')}
                        sx={{ mb: 2 }}
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
                    <Card elevation={3} sx={{ p: 3 }}>
                        <div className="qr-code-container">
                            {selectedStyle === 'style1' && (
                                <QRCode
                                    value={text}
                                    size={200}
                                    level="H"
                                    includeMargin={true}
                                    renderAs="canvas"
                                    className="qr-code-style1"
                                />
                            )}
                            {selectedStyle === 'style2' && (
                                <QRCode
                                    value={text}
                                    size={200}
                                    level="H"
                                    includeMargin={true}
                                    renderAs="canvas"
                                    style={{color:'red', background: 'red'}}

                                    className="qr-code-style2"
                                />
                            )}
                            {selectedStyle === 'style3' && (
                                <QRCode
                                    value={text}
                                    size={200}
                                    level="H"
                                    includeMargin={true}
                                    renderAs="canvas"
                                    className="qr-code-style3"
                                />
                            )}
                        </div>
                        <div className="style-selector">
                            <button onClick={() => handleStyleChange('style1')}>Style 1</button>
                            <button onClick={() => handleStyleChange('style2')}>Style 2</button>
                            <button onClick={() => handleStyleChange('style3')}>Style 3</button>
                        </div>
                    </Card>
                </Grid>
            )}
        </Grid>
    );
};

export default QRCodeGenerator;
