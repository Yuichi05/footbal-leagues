import React from "react";
import axios from "axios";

export const getKlasemenBola = async () => {
  const leagues = await axios.get(
    `https://api-football-standings.azharimm.dev/leagues`
  );

  return leagues.data.data;
};

export const getDetailKlasemen = async (id) => {
  const league = await axios.get(
    `https://api-football-standings.azharimm.dev/leagues/${id}`
  );
  return league.data.data;
};