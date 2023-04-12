import React, { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import JobForm from './JobForm';
import JobList from './JobList';

const Consumer = () => {
  const [stage, setStage] = useState(0);

  const handleJobFormSubmission = () => {
    setStage(1);
  };

  const handleJobSelection = () => {
    setStage(2);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Consumer
        </Typography>
        {stage === 0 && (
          <>
            <Typography variant="body1" gutterBottom>
              Register for an account for free, create a "job" along with inspirations, and publish
              the job.
            </Typography>
            <JobForm onFormSubmit={handleJobFormSubmission} />
          </>
        )}
        {stage === 1 && (
          <>
            <Typography variant="body1" gutterBottom>
              Get quotations, accept quotations, and make payments upfront for the entire project.
            </Typography>
            <JobList onJobSelect={handleJobSelection} />
          </>
        )}
        {stage === 2 && (
          <>
            <Typography variant="body1" gutterBottom>
              Acknowledge receipt of goods and provide feedback on the markers or the outcome of
              their makings.
            </Typography>
            {/* Add the component to handle receipt acknowledgement and feedback here */}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Consumer;
