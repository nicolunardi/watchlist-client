import TopPlayersTable from "@/components/Dashboard/TopPlayersTable";
import { getPlayers } from "@/utils/fpl/api";

export default async function Home() {
  const player = getPlayers();
  return (
    <div className="h-full">
      <h1 className="text-3xl">Dashboard</h1>

      <div className="my-10">
        {/* metrics */}
        <div>
          <h2 className="text-greenAccent-500 text-l">Metrics</h2>
          <div>
            <TopPlayersTable />
          </div>
        </div>
        {/* mylist preview */}

        <h2 className="text-greenAccent-500 text-l">Watchlist</h2>
        <div></div>
      </div>
    </div>
  );
}
