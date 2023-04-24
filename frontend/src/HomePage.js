import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ConsumerIcon from '@mui/icons-material/Person';
import MakerIcon from '@mui/icons-material/Work';
import { styled } from '@mui/system';

const Background = styled('div')({
  background: 'linear-gradient(to bottom right, #e66465, #9198e5)',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <Background>
      <Container maxWidth="md">
        <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom style={{ color: 'white', fontFamily: 'Roboto' }}>
            Welcome to Meyd.it
          </Typography>
          <Typography variant="subtitle1" gutterBottom style={{ color: 'white', fontFamily: 'Roboto', marginTop: '2rem' }}>
            Authentic, sustainable and stylish outfits require awesome creatives. Meyd.it helps source and manage slow fashion,that is made to measure and on demand.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, marginTop: '2rem' }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ConsumerIcon />}
              sx={{ fontFamily: 'Roboto', fontSize: '1.2rem', fontWeight: 'bold' }}
              onClick={() => handleButtonClick('/consumerpage')}
            >
              Consumer
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<MakerIcon />}
              sx={{ fontFamily: 'Roboto', fontSize: '1.2rem', fontWeight: 'bold' }}
              onClick={() => handleButtonClick('/maker')}
            >
              Maker
            </Button>
          </Box>
        </Box>
      </Container>
    </Background>
  );
};

export default HomePage;
