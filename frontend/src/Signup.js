import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
  });

  const history = useHistory();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const notifySuccess = () => {
    toast.success('Sign Up successful!', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
    });
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/users/register', user);
      console.log(response.data);
      notifySuccess();
      history.push('/consumer');
      setTimeout(() => {
        // Replace this with the actual redirection logic
        console.log('Redirecting to login page...');
      }, 3000);
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

        <Button variant="contained"
                color="primary"
                onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </Box>
              <ToastContainer />
            </Container>
          );
        };
        
        export default Signup;
