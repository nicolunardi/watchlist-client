"use client";
import { Fragment, MouseEvent } from "react";

import { DEFAULT_COLUMNS } from "@/config/fpl/config";
import { Player } from "@/types/fpl/interface";
import { useState } from "react";
import {
  ArrowSmallDownIcon,
  ArrowSmallUpIcon,
} from "@heroicons/react/24/outline";

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
    initialState: {
      pagination: { pageSize: 50 },
    },
  });

  const addColumn = (e: MouseEvent) => {
    const newCols = [...initCols];
    // TODO
    // allow for user to add or remove the column they want
    newCols.push({ col_name: "form", property: "form" });
    setInitCols(newCols);
  };

  return (
    <>
      <div className="w-[95%] m-auto h-96 rounded-lg overflow-auto">
        <table className="table-auto  w-full text-left relative">
          <thead className="h-10 bg-primary-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className={`px-3 sticky top-0 bg-primary-500  ${
                      header.column.getIsSorted() ? "text-greenAccent-500" : ""
                    }`}
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none flex items-center gap-2"
                            : "flex items-center gap-2",
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <ArrowSmallUpIcon className="w-4 h-4" />,
                          desc: <ArrowSmallDownIcon className="w-4 h-4" />,
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
      </div>
      {/* The pagination buttons */}
      <div className="flex items-center gap-2 mt-6 w-80 mx-auto">
        <button
          className={`border rounded p-1 ${
            table.getCanPreviousPage() ? "hover:text-greenAccent-500" : ""
          }`}
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          First
        </button>
        <button
          className={`border rounded p-1 w-9 ${
            table.getCanPreviousPage() ? "hover:text-greenAccent-500" : ""
          }`}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </button>
        <button
          className={`border rounded p-1 w-9 ${
            table.getCanNextPage() ? "hover:text-greenAccent-500" : ""
          }`}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {">"}
        </button>
        <button
          className={`border rounded p-1 ${
            table.getCanNextPage() ? "hover:text-greenAccent-500" : ""
          }`}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          Last
        </button>
        <span className="flex items-center gap-1 mx-2">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </strong>
        </span>
      </div>
      <button
        className="border rounded p-2 hover:text-greenAccent-500"
        onClick={(e) => addColumn(e)}
      >
        Add columns
      </button>
    </>
  );
}

export default TopPlayersTable;
