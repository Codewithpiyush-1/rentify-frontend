import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear token)
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Rentify
          </Typography>
          <Button component={RouterLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={RouterLink} to="/login" color="inherit">
            Login
          </Button>
          <Button component={RouterLink} to="/property/add" color="inherit">
            PropertyAdd
          </Button>
          <Button component={RouterLink} to="/property/:id" color="inherit">
            PropertyList
          </Button>
          <Button component={RouterLink} to="/register" color="inherit">
            Register
          </Button>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
