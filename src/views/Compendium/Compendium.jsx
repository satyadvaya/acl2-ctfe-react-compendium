import { useState, useEffect } from "react";
import { fetchPokedex } from "../../services/pokemon";

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    async function getPokedex() {
      const pokemonList = await fetchPokedex();
      setPokedex(pokemonList);
      setLoading(false);
    }
    getPokedex();
    // When dependency array is empty, useEffect() runs just once when component mounts
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  return "Pokemon Returned";
}

export default Compendium;
