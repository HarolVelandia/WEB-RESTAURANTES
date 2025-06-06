import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import RestaurantCard from "../components/RestaurantCard"

function Search() {
  const [query, setQuery] = useState("")
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const snapshot = await getDocs(collection(db, "restaurants")) // nombre correcto
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        setRestaurants(docs)
      } catch (error) {
        console.error("Error al obtener restaurantes:", error)
      }
    }
    fetchRestaurants()
  }, [])

  const resultados = restaurants.filter(r =>
    r.nombre.toLowerCase().includes(query.toLowerCase())
  )

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
        {resultados.length === 0 ? (
          <p className="text-muted text-center">No hay resultados.</p>
        ) : (
          resultados.map(r => (
            <div key={r.id} className="col-md-4">
              <RestaurantCard restaurante={r} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Search
