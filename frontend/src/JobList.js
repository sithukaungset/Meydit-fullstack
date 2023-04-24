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
  InputAdornment,
  IconButton,
} from '@mui/material';
import { FilterList, Search } from '@mui/icons-material';

// This is a mock function to fetch jobs. Replace it with a real API call.
const fetchJobs = async () => {
  return [    {      id: 1,      type: 'Dress',      description: 'Sample dress',      location: 'New York',      quoteCount: 5,      status: 'Open',    },    {      id: 2,      type: 'Ethnic Wear - Sari / Blouse',      description: 'Sample sari',      location: 'California',      quoteCount: 3,      status: 'Closed',    },  ];
};

// const fetchJobs = async () => {
//   try {
//     const response = await fetch('http://localhost:4000/api/jobs'); // Change the API endpoint as needed
//     if (!response.ok) {
//       throw new Error('Failed to fetch jobs');
//     }
//     const jobs = await response.json();
//     return jobs;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [quote, setQuote] = useState({ price: '', comment: '' });
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredJobs = jobs.filter((job) =>
    job.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #e5f6fd, #80c6fd)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            Job List
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              label="Search by Type"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ width: '50%' }}
            />

            <Button variant="outlined" startIcon={<FilterList />}>
              Filter
            </Button>
          </Box>

          <TableContainer component={Paper} sx={{ marginTop: 4 , backgroundColor: 'lightblue'}}>
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
              {filteredJobs.map((job) => (
                <TableRow key={job.id} onClick={() => handleJobSelect(job)}>
                  <TableCell>{job.type}</TableCell>
                  <TableCell>{job.description}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>{job.status}</TableCell>
                  <TableCell>{job.quoteCount}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
        {/* Show no results message if there are no jobs */}
        {filteredJobs.length === 0 && (
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="body1">
              No jobs found. Please adjust your search criteria.
            </Typography>
          </Box>
        )}

        {/* Show job details and quote form if a job is selected */}
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
  </Box>
  );
};

export default JobList;

