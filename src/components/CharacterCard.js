import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character?.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{character?.name}</h5>
        <p className="card-text">
          <span className="card-text">
            <span className="fw-bold">Gender :</span> {character?.gender}
          </span>
          <br />
          <span className="card-text">
            <span className="fw-bold">Status :</span> {character?.status}
          </span>
        </p>
        <Link
          to={`/characterinfo/${character.id}`}
          className="btn btn-warning text-white"
        >
          Click For More Info
        </Link>
      </div>
    </div>
  );
};

export default CharacterCard;
