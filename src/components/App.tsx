import { Suspense } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Players from "./players/Players";
import type { Iplayer } from "../types/playerType";

const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const playersPromise = playersFetch();

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  );
};

export default App;
