import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/properties');
        setProperties(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleInterest = (id) => {
    console.log(`Interested in property ${id}`);
    // Implement interest logic
  };

  const handleLike = (id) => {
    console.log(`Liked property ${id}`);
    // Implement like logic
  };

  const handleDelete = (id) => {
    console.log(`Deleted property ${id}`);
    // Implement delete logic
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      {properties.map(property => (
        <Card key={property.id} sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {property.place}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Area: {property.area} <br />
              Bedrooms: {property.bedrooms} <br />
              Bathrooms: {property.bathrooms} <br />
              Nearby Hospitals: {property.nearbyHospitals} <br />
              Nearby Colleges: {property.nearbyColleges} <br />
              Rent: ${property.rent}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleInterest(property.id)}>I'm Interested</Button>
            <Button size="small" onClick={() => handleLike(property.id)}>Like {property.likes}</Button>
            <Button size="small" onClick={() => handleDelete(property.id)}>Delete</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default PropertyList;
