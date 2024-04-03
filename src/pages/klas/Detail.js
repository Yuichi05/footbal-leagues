import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const [league, setLeague] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-football-standings.azharimm.dev/leagues/${id}`
        );
        setLeague(response.data.data);
      } catch (error) {
        console.error("Error fetching league data: ", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="league-details-container">
      <h1 className="league-title">League Detail</h1>
      <h5 className="league-id">ID: {league.id}</h5>
      <div className="card">
        <h2 className="card-title">{league.name}</h2>
        <img src={league.logos && league.logos.light} alt={league.name} />
        <h5 className="title-1">{league.slug}</h5>
        <h5 className="title-2">{league.abbr}</h5>
      </div>
    </div>
  );
};

export default Detail;
