import React, { useEffect, useState } from "react";
import Klase from "../../component/Klasemen/Klasemen.js";
import "../../component/Klasemen/Klasemen.css";
import { getKlasemenBola } from "../../api.js";

const Leagues = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // menangkap data result api
    getKlasemenBola().then((result) => {
      setDatas(result);
    });
  }, []);

  console.log(datas);

  return (
    <div>
      <h2>Leagues</h2>
      <div className="movies-container">
        {datas &&
          datas.length > 0 &&
          datas.map((data, index) => {
            return (
              <Klase
                key={index}
                id={data.id}
                name={data.name}
                slug={data.slug}
                abbr={data.abbr}
                logos={data.logos}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Leagues;