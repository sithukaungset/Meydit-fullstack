import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Container, Box, TextField, Typography, Button, FormControl, InputLabel, Select, MenuItem, TextareaAutosize, Stack } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const JobForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post('/api/jobs', data);
      alert('Job posted successfully!');
    } catch (error) {
      console.error(error);
      alert('Error posting the job. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Post a Job
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              id="firstName"
              label="First Name"
              fullWidth
              {...register('firstName', { required: true })}
              error={errors.firstName}
              helperText={errors.firstName && 'First name is required.'}
            />
            {/* Add more fields for last name, phone number, email address, address, etc. */}

            <FormControl fullWidth>
              <InputLabel id="clothingTypeLabel">Clothing Type</InputLabel>
              <Select
                labelId="clothingTypeLabel"
                id="clothingType"
                label="Clothing Type"
                {...register('clothingType', { required: true })}
                error={errors.clothingType}
              >
                <MenuItem value="">
                  <em>Select a clothing type</em>
                </MenuItem>
                <MenuItem value="Dress">Dress</MenuItem>
                <MenuItem value="Ethnic Wear - Sari / Blouse">Ethnic Wear - Sari / Blouse</MenuItem>
              </Select>
              {errors.clothingType && <p>Clothing type is required.</p>}
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
            />

            <TextField
              id="budget"
              label="Budget (optional)"
              type="number"
              fullWidth
              {...register('budget')}
            />

            {/* File input for image uploads */}
            <label htmlFor="imageUpload">
              <input
                id="imageUpload"
                type="file"
                multiple
                hidden
                {...register('images')}
              />
              <Button
                variant="outlined"
                startIcon={<PhotoCamera />}
                component="span"
              >
                Upload Images
              </Button>
            </label>

            <Button type="submit" variant="contained" fullWidth>
              Post Job
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default JobForm;
