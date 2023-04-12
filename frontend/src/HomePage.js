import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Meyd.it
        </Typography>
        <Typography variant="body1" gutterBottom>
          Meyd.it is a digital, double-sided marketplace that connects consumers looking for tailor-made
          clothes from makers who often independently work from home and not necessarily full-time.
          Thousands of skilled tailors and designers in Sydney alone are willing to take on gig-based
          work.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Consumers
        </Typography>
        <Typography variant="body1" gutterBottom>
          Consumers can register for an account for free, create a
          “job” along with inspirations, publish the job, get quotations,
          accept quotations, make payments upfront for the entire project, acknowledge receipt of goods,
          and provide feedback on the markers or the outcome of their makings.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Makers
        </Typography>
        <Typography variant="body1" gutterBottom>
          The Markers can create an account for free, update their Ateliers, find and bid for jobs, update
          the accepted job status, and provide delivery details for shipped items.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
          <Button variant="contained" color="primary" onClick={() => handleButtonClick('/consumer')}>
            Consumer
          </Button>
          <Button variant="contained" color="secondary" onClick={() => handleButtonClick('/maker')}>
            Maker
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
