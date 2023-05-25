import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress, Button, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const dashboardStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '150vh',
};

const jumbotronStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  background: '#f5f5f5',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  borderRadius: '8px',
  width: '95%',
  height: '55%', // Increase box size by 30%
};

const dashboardTextStyle = {
  fontSize: '2.5rem', // Bigger font size
  fontWeight: 'bold',
  marginBottom: '20px',
  textAlign: 'center',
};

function Home() {
  const [stockPrice, setStockPrice] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchStockPrice = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-05-15/2023-05-15?adjusted=true&sort=asc&limit=120&apiKey=geJgfJkpETYorep3Khc2ZKfvPlpgZwUh'
      );
      console.log(response.data.results[0]['c']);
      setStockPrice(response.data.results[0]['c']);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleEmailShare = () => {
    const subject = 'Stock Price on 15th May';
    const body = `The stock price on 15th May was: ${stockPrice}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  const handleWhatsAppShare = () => {
    const text = `The stock price on 15th May was: ${stockPrice}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl);
  };

  return (
    <div style={dashboardStyles}>
      <Box style={jumbotronStyles}>
        <Typography variant="h2" component="h2" sx={dashboardTextStyle}>
          Dashboard
        </Typography>
        <Typography variant="h4" component="h4" sx={dashboardTextStyle}>
          Check stocks of Apple for 15th May (NSE)
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={fetchStockPrice}
          disabled={loading}
          sx={{ marginTop: '20px' }}
        >
          {loading ? 'Loading...' : 'Get Stock Price'}
        </Button>
        {stockPrice && (
          <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
            <Typography variant="h6" component="h2">
              The stock price on 15th May was: {stockPrice}
            </Typography>
            <Box sx={{ marginTop: '20px' }}>
              <IconButton onClick={handleEmailShare} aria-label="Email">
                <EmailIcon />
              </IconButton>
              <IconButton onClick={handleWhatsAppShare} aria-label="WhatsApp">
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Box>
        )}
      </Box>
      {loading && (
        <Box sx={{ marginTop: '20px' }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default Home;
