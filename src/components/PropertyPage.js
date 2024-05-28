import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

const PropertyList = ({ properties, onInterest, onLike, onDelete }) => {
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
            <Button size="small" onClick={() => onInterest(property.id)}>I'm Interested</Button>
            <Button size="small" onClick={() => onLike(property.id)}>Like {property.likes}</Button>
            {onDelete && <Button size="small" onClick={() => onDelete(property.id)}>Delete</Button>}
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default PropertyList;
