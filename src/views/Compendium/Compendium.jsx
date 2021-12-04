import { useState, useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import PokemonList from "../../components/PokemonList/PokemonList";
import {
  fetchPokedex,
  fetchPokedexTypes,
  fetchFilteredPokedex,
} from "../../services/pokemon";

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
      const pokemonTypes = await fetchPokedexTypes();
      setPokedexTypes(pokemonTypes);
    }

    getPokedexTypes();
  }, []);

  useEffect(() => {
    if (!selectedType) return;

    async function getFilteredPokedex() {
      setLoading(true);

      if (selectedType === "all") {
        const pokemonList = await fetchPokedex();
        setPokedex(pokemonList);
      } else {
        const filteredPokemon = await fetchFilteredPokedex(selectedType);
        setPokedex(filteredPokemon);
      }

      setLoading(false);
    }

    getFilteredPokedex();
    // When dependency array contains one or more dependencies, useEffect() runs when component mounts and again when any dependencies change
  }, [selectedType]);

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
