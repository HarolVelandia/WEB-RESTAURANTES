import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import RestaurantCard from "../components/RestaurantCard";

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "restaurants"));
        const firestoreRestaurants = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRestaurants(firestoreRestaurants);
      } catch (error) {
        console.error("Error al obtener restaurantes:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Lista de Restaurantes */}
      <div className="row">
        {restaurants.map((r) => (
          <div key={r.id} className="col-md-4 mb-4">
            <RestaurantCard restaurante={r} />
          </div>
        ))}
      </div>

      <h2 className="text-center mt-5 text-danger fw-bold">Todos los Restaurantes</h2>
    </div>
  );
}

export default Home;
