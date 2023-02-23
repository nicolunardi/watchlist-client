"use client";
import { MouseEvent } from "react";

import { DEFAULT_COLUMNS } from "@/config/fpl/config";
import { Player } from "@/types/fpl/interface";
import { sortColumns } from "@/utils/helpers";
import { useState } from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

interface Props {
  players: Player[];
}

function TopPlayersTable({ players }: Props) {
  const [data, setData] = useState(players || null);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [initCols, setInitCols] = useState(DEFAULT_COLUMNS);
  const columnHelper = createColumnHelper<Player>();

  const columns = initCols.map((col) =>
    columnHelper.accessor(col.property as keyof Player, {
      header: col.col_name,
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
    })
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const addColumn = (e: MouseEvent) => {
    const newCols = [...initCols];
    // TODO
    // allow for user to add or remove the column they want
    newCols.push({ col_name: "form", property: "form" });
    setInitCols(newCols);
  };

  return (
    <div className="w-[95%] m-auto h-96 rounded-lg">
      <table className="table-auto w-full h-80 text-left">
        <thead className="h-10 bg-primary-500">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="px-3" key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              className="even:bg-primary-500 odd:bg-primary-400 hover:bg-blueAccent-700"
              key={row.id}
            >
              {row.getVisibleCells().map((cell) => (
                <td className="px-3" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* The pagination buttons */}
      <div className="flex items-center gap-2">
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          First
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          Last
        </button>
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
      </div>
      <button onClick={(e) => addColumn(e)}>help</button>
    </div>
  );
}

export default TopPlayersTable;
