import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const history = useNavigate();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post('https://rentify-backend-1n56.onrender.com/api/users/login', values);
      if (response.status === 200) {
        alert('Login successful!');
        history('/'); // Redirect to home page
      } else {
        alert('Login failed: Invalid credentials');
      }
    } catch (error) {
      alert('Login failed: Network error');
    }
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form>
        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" />
        
        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" />
        
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
