import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/users', user);
      console.log(response.data);
      // redirect to login page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 10 }}>
        <Typography variant="h4" gutterBottom>
          Sign Up
        </Typography>

        <TextField
          required
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={user.email}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          required
          name="password"
          label="Password"
          type="password"
          fullWidth
          value={user.password}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          required
          name="name"
          label="Name"
          fullWidth
          value={user.name}
          onChange={handleInputChange}
          sx={{ marginBottom: 2 }}
        />

        <Button variant="contained" color="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
