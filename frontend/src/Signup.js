import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [loginData, setLoginData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
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
      navigate('/consumer');
      setTimeout(() => {
        // Replace this with the actual redirection logic
        console.log('Redirecting to login page...');
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/users/login', {
        email: loginData.loginEmail,
        password: loginData.loginPassword,
      });
      console.log(response.data);
      notifySuccess();
      // Redirect to the desired page after successful login
      navigate('/consumer');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #ff512f, #dd2476)',
        fontFamily: 'Roboto',
        color: 'white',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ marginTop: 10 }}>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>

          <TextField
            required
            name="email"
            label="Email"
            //type="email"
            fullWidth
            value={user.email}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />

 
          <TextField
            required
            name="password"
            label="password"
            //type="password"
            fullWidth
            value={user.password}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
            InputProps={{
              style: {color: 'white'},
                }}
            InputLabelProps={{
                style: { color: 'white' },
                }}
            />

          <TextField
            required
            name="name"
            label="Name"
            fullWidth
            value={user.name}
            onChange={handleInputChange}
            sx={{ marginBottom: 2 }}
            InputProps={{
              style: {color: 'white'},
                }}
            InputLabelProps={{
                style: { color: 'white' },
                }}
            />
            <Typography variant="h4" gutterBottom>
            Log In
          </Typography>
    
          <TextField
            required
            name="loginEmail"
            label="Email"
            //type="email"
            fullWidth
            value={loginData.loginEmail}
            onChange={handleLoginInputChange}
            sx={{ marginBottom: 2 }}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
    
          <TextField
            required
            name="loginPassword"
            label="Password"
            //type="password"
            fullWidth
            value={loginData.loginPassword}
            onChange={handleLoginInputChange}
            sx={{ marginBottom: 2 }}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
    
          <Button variant="contained" color="primary" onClick={handleSignup} sx={{ marginRight: 2 }}>
            Sign Up
          </Button>
          <Button variant="contained" color="secondary" onClick={handleLogin}>
            Log In
          </Button>
        </Box>
        <ToastContainer />
      </Container>
    </Box>
    );
  };
  
  export default Signup;
  
  