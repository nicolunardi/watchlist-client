import { Player } from "fpl-ts";

export const getPlayers = async () => {
  const player = await fetch(`${process.env.HOSTNAME}/api/players`, {
    method: "GET",
  });
  const { details: data } = await player.json();
  return data;
};
