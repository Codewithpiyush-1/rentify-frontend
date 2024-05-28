import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

const UserForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'BUYER',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required'),
    role: Yup.string().required('Role is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post('http://localhost:8080/api/users/register', values);
      alert('User created successfully!');
    } catch (error) {
      alert('User creation failed!');
    }
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '20px',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            <h2>Register</h2>
            <Field as={TextField} type="text" name="firstName" label="First Name" fullWidth />
            <ErrorMessage name="firstName" component="div" />

            <Field as={TextField} type="text" name="lastName" label="Last Name" fullWidth />
            <ErrorMessage name="lastName" component="div" />

            <Field as={TextField} type="email" name="email" label="Email" fullWidth />
            <ErrorMessage name="email" component="div" />

            <Field as={TextField} type="text" name="phoneNumber" label="Phone Number" fullWidth />
            <ErrorMessage name="phoneNumber" component="div" />

            <Field as={TextField} type="password" name="password" label="Password" fullWidth />
            <ErrorMessage name="password" component="div" />

            <FormControl fullWidth>
              <InputLabel>Role</InputLabel>
              <Field as={Select} name="role">
                <MenuItem value="BUYER">Buyer</MenuItem>
                <MenuItem value="SELLER">Seller</MenuItem>
              </Field>
              <ErrorMessage name="role" component="div" />
            </FormControl>

            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting} style={{ marginTop: '20px' }}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
