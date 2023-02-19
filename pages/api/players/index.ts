import { Player } from "fpl-ts";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const player = new Player([230]);
    const details = await player.getDetails(true, true);
    // console.log(details);
    res.status(200).json({ details });
  } catch (error) {
    throw new Error();
  }
}
