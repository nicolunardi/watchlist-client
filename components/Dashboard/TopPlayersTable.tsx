"use client";

import { DEFAULT_COLUMNS } from "@/config/fpl/config";
import { Player } from "@/types/fpl/interface";
import { sortColumns } from "@/utils/helpers";
import { useState } from "react";

interface Props {
  players: Player[];
}

function TopPlayersTable({ players }: Props) {
  const [columns, setColumns] = useState(DEFAULT_COLUMNS);

  const handleSort = (e: MouseEvent) => {
    console.log(e.target.getAttribute(""));
  };

  return (
    <div className="w-[95%] h-96 m-auto overflow-y-auto rounded-lg">
      <table className="table-auto w-full text-left relative">
        <thead
          className="h-10 bg-primary-500  sticky top-0"
          onClick={(e) => handleSort(e)}
        >
          <tr>
            {columns.map((column) => (
              <th
                className="px-3"
                key={column.property}
                data-column={column.property}
              >
                {column.col_name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.length &&
            players.map((player) => (
              <tr
                className="even:bg-primary-500 odd:bg-primary-400 hover:bg-blueAccent-700"
                key={player.id}
              >
                {columns.map((column, idx) => (
                  <td className="px-3 " key={idx}>
                    {player[column.property as keyof Player]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopPlayersTable;
