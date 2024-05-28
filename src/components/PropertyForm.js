import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";

const PropertyForm = () => {
  const [property, setProperty] = useState({
    place: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    nearbyHospitals: "",
    nearbyColleges: "",
    rent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post("https://rentify-backend-1n56.onrender.com/api/properties/add", property, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Property posted successfully!");
    } catch (error) {
      alert("Failed to post property!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Post Property
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Place"
              name="place"
              value={property.place || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Area"
              name="area"
              value={property.area || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Bedrooms"
              type="number"
              name="bedrooms"
              value={property.bedrooms || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              variant="outlined"
              label="Bathrooms"
              type="number"
              name="bathrooms"
              value={property.bathrooms || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Nearby Hospitals"
              name="nearbyHospitals"
              value={property.nearbyHospitals || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Nearby Colleges"
              name="nearbyColleges"
              value={property.nearbyColleges || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Rent"
              type="number"
              name="rent"
              value={property.rent || ""}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Post Property
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PropertyForm;
