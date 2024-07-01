import { Suspense, lazy } from "react";

import "./App.css";
// import PokemonList from "./components/PokemonList.jsx"
const PokemonList = lazy(() => import("./components/PokemonList.jsx"));
import BottomBar from "./components/BottomBar.jsx";
import TopBar from "./components/TopBar.jsx";

function App() {
  return (
    <>
      <TopBar />
      <Suspense fallback={<div>Loading...</div>}>
        <PokemonList />
      </Suspense>
      <BottomBar />
    </>
  );
}

export default App;
