import { useEffect, useState } from "react";
import "./PokemonList.css";
import PokemonCard from "./PokemonCard.jsx";
import { PokemonApiPokemonUrl } from "../api/PokemonApi";

function PokemonList() {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    // To Fetch pokemon.name
    const res = await fetch(`${PokemonApiPokemonUrl}?offset=0&limit=1008`);
    const data = await res.json();

    // To Fetch the data for each Pokemon
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(`${PokemonApiPokemonUrl}/${pokemon.name}`);
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="pokemon-container">
          <div className="all-container">
            {allPokemons.map((pokemonStats) => (
              <PokemonCard
                key={pokemonStats.name}
                id={pokemonStats.id.toString().padStart(3, "0")}
                idForImg={pokemonStats.id.toString()}
                name={pokemonStats.name.replace(/^./, (str) =>
                  str.toUpperCase()
                )}
                image={
                  pokemonStats.sprites.versions["generation-viii"].icons
                    .front_default
                }
                type={pokemonStats.types[0].type.name}
                weight={pokemonStats.weight}
                height={pokemonStats.height}
                stats={pokemonStats.stats
                  .map((stat) => stat.base_stat)
                  .slice(0, 3)}
                statsName={pokemonStats.stats
                  .map((stat) => stat.stat.name)
                  .slice(0, 3)}
              />
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonList;
