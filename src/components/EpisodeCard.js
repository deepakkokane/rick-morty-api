import React from "react";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5
          className="card-title d-inline-block text-truncate"
          style={{ maxWidth: "200px" }}
        >
          {episode?.name}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{episode?.episode}</h6>
      </div>
      <div className="card-body">
        <h6 className="card-title">Characters</h6>
      </div>
      <ul className="list-group list-group-flush">
        {episode?.characters?.slice(0, 3).map((character, i) => (
          <li className="list-group-item" key={i}>
            {character?.name}
          </li>
        ))}
      </ul>
      <div className="card-body">
        <Link
          to={`/episodecharacters/${episode?.id}`}
          className="card-link text-decoration-none text-info"
        >
          See all characters...
        </Link>
      </div>
    </div>
  );
};

export default EpisodeCard;
