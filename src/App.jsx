import "./App.css"
import PokemonList from "./components/PokemonList"
import BottomBar from "./components/bottomBar"
import TopBar from "./components/topBar"

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
