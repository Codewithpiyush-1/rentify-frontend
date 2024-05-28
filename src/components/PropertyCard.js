import React from "react";
const PropertyCard = ({ property, onInterest, onLike }) => {
  return (
    <div className="property-card">
      {" "}
      <h2>{property.place}</h2> <p>Area: {property.area}</p>{" "}
      <p>Bedrooms: {property.bedrooms}</p>{" "}
      <p>Bathrooms: {property.bathrooms}</p>{" "}
      <p>Nearby Hospitals: {property.nearbyHospitals}</p>{" "}
      <p>Nearby Colleges: {property.nearbyColleges}</p>{" "}
      <p>Rent: ${property.rent}</p>{" "}
      <button onClick={() => onInterest(property.id)}>I'm Interested</button>{" "}
      <button onClick={() => onLike(property.id)}>Like</button>{" "}
      <p>Likes: {property.likes}</p>{" "}
    </div>
  );
};
export default PropertyCard;
