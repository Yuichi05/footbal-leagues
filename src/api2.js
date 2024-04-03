import React from "react";
import axios from "axios";

export const getStandBola = async () => {
  const leagues = await axios.get(
    `https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2020&sort=asc`
  );

  return leagues.data.data.standings;
};

export const getDetailStand = async (id) => {
  const league = await axios.get(
    `https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2020&sort=asc${id}`
  );
  return league.data.data;
};