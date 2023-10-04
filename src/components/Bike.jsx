import React from "react";

const Bike = ({ bike }) => {
  return (
    <div className="text-center container mt-4">
      <h1 className="RacingSans">{bike.mark}</h1>
      <img src={bike.img_path} alt={bike.mark} className="img-fluid mb-5" />
    </div>
  );
};

export default Bike;
