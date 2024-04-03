import React, { useEffect, useState } from "react";
import Klase from "../Klasemen/Klasemen.js";
import "../Klasemen/Klasemen.css";
import AddKlasemenForm from "../AddKlasemenForm/AddKlasemenForm.js";
import { getKlasemenBola } from "../../api.js";

const Klasemen = () => {
  const [datas, setDatas] = useState([]);

  const addklasemen = (klasemen) => {
    setDatas([...datas, klasemen]);
  };

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
      <AddKlasemenForm onAddKlasemen={addklasemen} />
    </div>
  );
};

export default Klasemen;