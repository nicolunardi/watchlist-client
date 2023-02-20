import { Player } from "fpl-ts";
import { PlayerDelegate } from "fpl-ts/lib/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const player = new Player([]);
    const details: PlayerDelegate[] = await player.getDetails();

    res.status(200).json({ details });
  } catch (error) {
    throw new Error();
  }
}
