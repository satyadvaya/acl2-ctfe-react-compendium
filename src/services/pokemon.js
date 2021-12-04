export const fetchPokedex = async () => {
  const res = await fetch("https://pokedex-alchemy.herokuapp.com/api/pokedex");
  const pokedexData = await res.json();
  return pokedexData.results;
};

export const fetchPokedexTypes = async () => {
  const res = await fetch(
    "https://pokedex-alchemy.herokuapp.com/api/pokedex/types"
  );
  const pokedexTypesData = await res.json();
  const pokedexTypes = pokedexTypesData.map((pokedexType) => pokedexType.type);
  return pokedexTypes;
};

export const fetchFilteredPokedex = async (pokedexType) => {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${pokedexType}`
  );
  const filteredPokedexData = await res.json();
  return filteredPokedexData.results;
};
