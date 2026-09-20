import { use } from "react";
import type { Iplayer } from "../../types/playerType";
import AvailablePlayers from "./AvailablePlayers";

interface PlayersProps {
  playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: PlayersProps) => {
  const players = use(playersPromise);
  return (
    <div className="container mx-auto max-w-7xl"> 
        <div className="flex justify-between gap-4 mb-2">
            <h2 className="font-bold text-xl">Available Players</h2>
       <div className="flex gap-1">
         <button className="btn btn-active btn-success">Available</button>
        <button className="btn btn-active btn-success">Selected</button>
       </div>
        </div>
       <AvailablePlayers players={players} />
    </div>
  );
};

export default Players;
