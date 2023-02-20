"use client";

import { PlayerDelegate } from "fpl-ts/lib/types";
import { DEFAULT_COLUMNS } from "@/config/fpl/config";
import { useState } from "react";

interface Props {
  players: PlayerDelegate[];
}

function TopPlayersTable({ players }: Props) {
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);

  return (
    <div className="bg-redAccent-400 w-[95%] h-96 m-auto">
      <table>
        <thead>
          <tr>
            {columns.map((column, idx) => (
              <th key={idx}>{column.col_name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.length &&
            players.map((player) => (
              <tr key={player.id}>
                {columns.map((column, idx) => (
                  <td key={idx}>{player[column.property]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopPlayersTable;
