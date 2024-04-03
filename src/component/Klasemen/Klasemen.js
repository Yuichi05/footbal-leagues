import React from "react";
import  "./Klasemen.css";
import { NavLink } from "react-router-dom";

const Klasemen = (props) => {
  const { name, slug, abbr, logos, id } = props;
  return (
    <div className="klase">
      <img
        src={logos.light}
        alt="logos"
      />
      <h3 className="name">
        <NavLink to={`/detail/${id}`}>{name}</NavLink>
      </h3>
      <p className="slug">{slug}</p>
      <p className="abbr">{abbr}</p>
    </div>
  );
};

export default Klasemen;