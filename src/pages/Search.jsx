import { useState } from "react";
import { getRestaurants } from "../utils/storage";
import RestaurantCard from "../components/RestaurantCard";

function Search() {
  const [query, setQuery] = useState("");
  const results = getRestaurants().filter(r =>
    r.nombre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Buscar Restaurante</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="row">
        {results.map((r, i) => (
          <div key={i} className="col-md-4">
            <RestaurantCard restaurante={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
