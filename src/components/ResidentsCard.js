import React from "react";

const ResidentsCard = ({ resident }) => {
  return (
    <div>
      <div className="card">
        <img src={resident?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{resident?.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ResidentsCard;
