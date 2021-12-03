import { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import PokemonList from "../../components/PokemonList/PokemonList";
import { fetchPokedex, fetchPokedexTypes } from "../../services/pokemon";

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokedex, setPokedex] = useState([]);
  const [pokedexTypes, setPokedexTypes] = useState({});
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    async function getPokedex() {
      const pokemonList = await fetchPokedex();
      setPokedex(pokemonList);
      setLoading(false);
    }
    getPokedex();
    // When dependency array is empty, useEffect() runs just once when component mounts
  }, []);

  useEffect(() => {
    async function getPokedexTypes() {
      const pokedexTypes = await fetchPokedexTypes();
      setPokedexTypes(pokedexTypes);
    }
    getPokedexTypes();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <Filter
        pokedexTypes={pokedexTypes}
        selectedType={selectedType}
        handleFilterChange={setSelectedType}
      />
      <PokemonList pokedex={pokedex} />
    </>
  );
}

export default Compendium;
