import { Player } from "@/types/fpl/interface";

export const getPlayers = async (): Promise<Player[]> => {
  const data = await fetch(`${process.env.HOSTNAME}/api/players`, {
    method: "GET",
  });
  const { players } = await data.json();
  return players;
};
