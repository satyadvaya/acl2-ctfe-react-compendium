export const fetchPokedex = async () => {
  const res = await fetch("https://pokedex-alchemy.herokuapp.com/api/pokedex");
  const pokedexData = await res.json();
  return pokedexData.results;
};
