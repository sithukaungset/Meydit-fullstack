import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { 
  Container, 
  Box, 
  TextField, 
  Typography, 
  Button, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  TextareaAutosize, 
  Stack 
} from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import api from './api'; // Import the axios instance

const JobForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === 'images') {
          Array.from(data[key]).forEach((image, index) => {
            formData.append(`images[${index}]`, image);
          });
        } else {
          formData.append(key, data[key]);
        }
      });

      await api.post('/api/jobs', formData); // Removed "http://localhost:4000" from URL
      alert('Job posted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error posting the job. Please try again.');
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
        minWidth: '100vh',
        background: 'linear-gradient(to bottom right, #ff512f, #dd2476)',
        fontFamily: 'Roboto',
        color: 'white',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ marginTop: 10 }}>
        <Typography variant="h4" gutterBottom>
          Post a Job
        </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            id="name"
            label="Name"
            fullWidth
            {...register('name', { required: true })}
            error={errors.name}
            helperText={errors.name && 'Name is required.'}
            inputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
          {/* Add more fields for last name, phone number, email address, address, etc. */}
  
          <TextField
            id="customer_id"
            label="Customer ID"
            fullWidth
            {...register('customer_id', { required: true })}
            error={errors.customer_id}
            helperText={errors.customer_id && 'Customer ID is required.'}
            inputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
  
          <TextField
            id="job_title"
            label="Job Title"
            fullWidth
            {...register('job_title', { required: true })}
            error={errors.job_title}
            helperText={errors.job_title && 'Job title is required.'}
            inputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
  
          <TextField
            id="job_location"
            label="Job Location"
            fullWidth
            {...register('job_location', { required: true })}
            error={errors.job_location}
            helperText={errors.job_location && 'Job location is required.'}
            inputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
  
          <FormControl fullWidth>
            <InputLabel id="clothingTypeLabel">Clothing Type</InputLabel>
            <Select
              labelId="clothingTypeLabel"
              id="clothingType"
              label="Clothing Type"
              {...register('clothingType', { required: true })}
              error={errors.clothingType}
              InputProps={{
                style: { color: 'white' },
              }}
            />
          </FormControl>
          <TextField
            id="description"
            label="Description"
            multiline
            rows={4}
            fullWidth
            {...register('description', { required: true })}
            error={errors.description}
            helperText={errors.description && 'Description is required.'}
            InputProps={{
              style: { color: 'white' },
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
          />
  
          <TextField
            id="budget"
            label="Budget (optional)"
            type="number"
            fullWidth
            {...register('budget')}
            InputProps={{
              style: { color: 'white' },
            }}
            />
            {/* File input for image uploads */}
          <label htmlFor="imageUpload">
              <input type="file" name="images" multiple />

              <Button
                variant="contained"
                startIcon={<PhotoCamera />}
                component="span"
                sx={{ marginTop: 1 }}
              >
                Upload Images
              </Button>
            </label>

            <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 2 }}>
              Post Job
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  </Box>
  
    
  );
};

export default JobForm;
