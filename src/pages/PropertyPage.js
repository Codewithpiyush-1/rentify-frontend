import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyList from '../components/PropertyList';
import Pagination from '../components/Pagination';

const PropertyPage = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProperties, setTotalProperties] = useState(0);
  const propertiesPerPage = 5;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`/api/properties/user?page=${currentPage}&size=${propertiesPerPage}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProperties(response.data.properties);
        setTotalProperties(response.data.total);
      } catch (error) {
        console.error('Error fetching properties', error);
      }
    };

    fetchProperties();
  }, [currentPage, propertiesPerPage]);

  const handleDelete = async (propertyId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/properties/${propertyId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Re-fetch properties to update the list
      const response = await axios.get(`/api/properties/user?page=${currentPage}&size=${propertiesPerPage}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProperties(response.data.properties);
      setTotalProperties(response.data.total);
    } catch (error) {
      console.error('Error deleting property', error);
    }
  };

  const handleInterest = async (propertyId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`/api/properties/${propertyId}/interest`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Interest shown successfully!');
    } catch (error) {
      alert('Failed to show interest');
    }
  };

  const handleLike = async (propertyId) => {
    try {
      await axios.post(`/api/properties/${propertyId}/like`);
      // Re-fetch properties to update like counts
      const token = localStorage.getItem('token');
      const response = await axios.get(`/api/properties/user?page=${currentPage}&size=${propertiesPerPage}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProperties(response.data.properties);
      setTotalProperties(response.data.total);
    } catch (error) {
      console.error('Error liking property', error);
    }
  };

  return (
    <div>
      <h1>My Properties</h1>
      <PropertyList properties={properties} onInterest={handleInterest} onLike={handleLike} onDelete={handleDelete} />
      <Pagination
        totalItems={totalProperties}
        itemsPerPage={propertiesPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PropertyPage;
