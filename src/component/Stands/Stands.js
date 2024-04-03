import React, { useEffect, useState } from "react";
import Stand from "../Stand/Stand.js";
import "./Stands.css";
// import AddKlasemenForm from "../AddKlasemenForm/AddKlasemenForm.js";
import { getStandBola } from "../../api2.js";

const Standings = () => {
  const [datas, setDatas] = useState([]);

  const addStand = (stand) => {
    setDatas([...datas, stand]);
  };

  useEffect(() => {
    // menangkap data result api
    getStandBola().then((standings) => {
      setDatas(standings);
    });
  }, []);

  console.log(datas);

  return (
    <div>
      <h2>Teams</h2>
      <div className="standings-container">
        {datas &&
          datas.length > 0 &&
          datas.map((data, index) => {
            return (
              <Stand
                key={index}
                league_id={data.league_id}
                name={data.team.name}
                short={data.team.shortDisplayName}
                abbr={data.team.abbreviation}
                // logos={data.team.logos}
              />
            );
          })}
      </div>
      {/* <AddKlasemenForm onAddKlasemen={addStand} /> */}
    </div>
  );
};

export default Standings;
