import { FaBaseballBall, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import type { Iplayer } from "../../types/playerType";

interface PlayerCardProps {
  player: Iplayer;
  onChoose: (player: Iplayer) => void;
}

const PlayerCard = ({ player, onChoose }: PlayerCardProps) => {
  const initials = player.playerName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="player-card overflow-hidden rounded-3xl">
      <figure className="player-photo relative h-64">
        <span className="absolute inset-0 grid place-items-center text-6xl font-black text-white/30">
          {initials}
        </span>
        <img
          src={player.playerImg}
          alt={player.playerName}
          loading="lazy"
          className="relative z-[1] h-full w-full "
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="absolute right-4 top-4 z-[3] rounded-full bg-lime-200 px-3 py-1.5 text-xs font-black text-green-950">
          {player.playerType}
        </span>
        <div className="absolute inset-x-4 bottom-4 z-[3] text-white">
          <h2 className="flex items-center gap-2 text-xl font-black leading-tight">
            <FaUser className="text-sm text-lime-200" /> {player.playerName}
          </h2>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-white/75">
            <FaMapMarkerAlt className="text-xs" /> {player.origin}
          </p>
        </div>
      </figure>
      <div className="space-y-4 p-5">
        <div className="grid grid-cols-2 gap-3">
          <div className="stat-tile rounded-2xl p-3">
            <p className="flex items-center gap-1.5 text-xs text-[#718071]">
              <GiCricketBat /> Batting
            </p>
            <p className="mt-1 text-sm font-bold leading-5">
              {player.battingStyle}
            </p>
          </div>
          <div className="stat-tile rounded-2xl p-3">
            <p className="flex items-center gap-1.5 text-xs text-[#718071]">
              <FaBaseballBall /> Bowling
            </p>
            <p className="mt-1 text-sm font-bold leading-5">
              {player.bowlingStyle}
            </p>
          </div>
        </div>
        <div className="border-t border-[#edf0e9]" />
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#718071]">
              Price
            </p>
            <p className="text-2xl font-black text-[#17251d]">
              ${player.price.toLocaleString()}
            </p>
          </div>
          <button
            className="rounded-full bg-[#1d5836] px-4 py-3 text-xs font-black text-white transition hover:bg-[#123d25]"
            onClick={() => onChoose(player)}
          >
            + Choose
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlayerCard;
