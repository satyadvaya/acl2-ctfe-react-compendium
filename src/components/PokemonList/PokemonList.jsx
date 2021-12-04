export default function PokemonList({ pokedex }) {
  return (
    <div>
      {pokedex.map((pokemon) => (
        <h1 key={pokemon.pokemon}>{pokemon.pokemon}</h1>
      ))}
    </div>
  );
}
