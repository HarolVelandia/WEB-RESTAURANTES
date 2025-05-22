import { restaurants as sugeridos } from "../data/restaurants";
import { getRestaurants } from "../utils/storage";
import RestaurantCard from "../components/RestaurantCard";

function Home() {
  const todos = getRestaurants();
  const nuevos = todos.slice(sugeridos.length); // Solo los creados por el usuario

  return (
    <div>
      {/* Restaurantes Sugeridos */}
      <h2 className="text-center mb-4">Restaurantes Sugeridos</h2>
      <div className="row">
        {sugeridos.map((r, i) => (
          <div key={i} className="col-md-4">
            <RestaurantCard restaurante={r} />
          </div>
        ))}
      </div>

      {/* Separador */}
      <h2 className="text-center mt-5 mb-4">Todos los Restaurantes</h2>
      <div className="row">
        {nuevos.length === 0 ? (
          <p className="text-center text-muted">No hay restaurantes registrados.</p>
        ) : (
          nuevos.map((r, i) => (
            <div key={i} className="col-md-4">
              <RestaurantCard restaurante={r} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
