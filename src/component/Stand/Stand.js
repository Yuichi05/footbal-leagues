import React from "react";
import { NavLink } from "react-router-dom";
import "./Stand.css"

const Stand = ({ id, name, short, abbr, logos }) => {
  return (
    <div className="stand">
      {/* <img src={`https://a.espncdn.com/i/teamlogos/soccer/500/${logos.href}.png`} alt={name} /> */}
      <h3 className="name">
        {/* <NavLink to={`/detail/${id}`}>{name}</NavLink> */}
        {name}
      </h3>
      <p className="short">{short}</p>
      <p className="abbr">{abbr}</p>
    </div>
  );
};

export default Stand;