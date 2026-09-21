// import React from 'react';

// import { FaUser } from "react-icons/fa6";
import type { Iplayer } from "../../types/playerType";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ players }: { players: Iplayer[] }) => {
  return (
   <div className="grid grid-cols-3 gap-4 mt-6">
      {
      players.map((player: Iplayer,ind:number) => {
        return <PlayerCard key={ind} player={player } />
      })
      }
    </div>
  );
};

export default AvailablePlayers;
