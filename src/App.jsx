import "./App.css"
import PokemonList from "./components/PokemonList.jsx"
import BottomBar from "./components/BottomBar.jsx"
import TopBar from "./components/TopBar.jsx"

function App() {

  return (
    <>
      <TopBar />
      <PokemonList />
      <BottomBar />
    </>
  )
}

export default App
