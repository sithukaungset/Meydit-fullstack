import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  TextField,
} from '@mui/material';
import { FilterList } from '@mui/icons-material';

// This is a mock function to fetch jobs. Replace it with a real API call.
const fetchJobs = async () => {
  return [
    {
      id: 1,
      type: 'Dress',
      description: 'Sample dress',
      location: 'New York',
      quoteCount: 5,
      status: 'Open',
    },
    {
      id: 2,
      type: 'Ethnic Wear - Sari / Blouse',
      description: 'Sample sari',
      location: 'California',
      quoteCount: 3,
      status: 'Closed',
    },
  ];
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [quote, setQuote] = useState({ price: '', comment: '' });

  useEffect(() => {
    const loadJobs = async () => {
      const fetchedJobs = await fetchJobs();
      setJobs(fetchedJobs);
    };

    loadJobs();
  }, []);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleSendQuote = () => {
    // Logic to send quote goes here
    alert('Quote sent!');

    // Clear the quote form
    setQuote({ price: '', comment: '' });
  };

  const handleQuoteChange = (e) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Job List
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Quotes</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>{job.description}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.status}</TableCell>
                  <TableCell>{job.quoteCount}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleJobSelect(job)}>
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {selectedJob && (
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h6" gutterBottom>
              Job Details
            </Typography>
            <Typography>Type: {selectedJob.type}</Typography>
            <Typography>Description: {selectedJob.description}</Typography>
            <Typography>Location: {selectedJob.location}</Typography>
            <Typography>Status: {selectedJob.status}</Typography>
            <Typography>Quotes: {selectedJob.quoteCount}</Typography>

            <Box sx={{ marginTop: 2 }}>
              <Typography variant="h6" gutterBottom>
                Send Quote
              </Typography>
              <TextField
                name="price"
                label="Price"
                type="number"
                value={quote.price}
                onChange={handleQuoteChange}
                variant="outlined"
                sx={{ marginRight: 2 }}
              />
              <TextField
                name="comment"
                label="Comment"
                multiline
                rows={3}
                value={quote.comment}
                onChange={handleQuoteChange}
                variant="outlined"
                sx={{ width: '50%' }}
              />
              <Box sx={{ marginTop: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendQuote}
                >
                  Send Quote
                </Button>
              </Box>
            </Box>
          </Box>
        )}
        </Box>
      </Container>
    );
  };

  export default JobList;
