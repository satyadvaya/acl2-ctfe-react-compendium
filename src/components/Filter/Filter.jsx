export default function Filter({
  pokedexTypes,
  selectedType,
  handleFilterChange,
}) {
  return (
    <div>
      <select
        value={selectedType}
        onChange={(event) => handleFilterChange(event.target.value)}
      >
        <option key="all" value="all">
          All
        </option>
        {pokedexTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
