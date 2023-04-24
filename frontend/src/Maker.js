import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import JobList from './JobList';

const Maker = () => {
  const [stage, setStage] = useState(0);

  const handleJobFormSubmission = () => {
    setStage(1);
  };

  const handleJobSelection = () => {
    setStage(2);
  };

  return (
    <Container maxWidth="md" sx={{ bgcolor: 'black' }}>
  

        
    </Container>
  );
};

export default Maker;
