import { useState } from "react";

function Compendium() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <h1>Loading ...</h1>;
  }
}

export default Compendium;
