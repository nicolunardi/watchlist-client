import { Player } from "@/types/fpl/interface";
import { API_BASE_URL, API_URLS } from "@/utils/fpl/urls";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await (
      await fetch(`${API_BASE_URL + API_URLS["STATIC"]}`)
    ).json();

    const players: Player[] = data.elements;
    res.status(200).json({ players });
  } catch (error) {
    throw new Error();
  }
}
