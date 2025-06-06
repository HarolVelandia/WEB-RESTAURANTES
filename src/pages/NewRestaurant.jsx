import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

function NewRestaurant({onAdd}) {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    direccion: "",
    imagen: ""
  });

  
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "restaurants"), form);
      alert("Restaurante creado y guardado localmente.");
      navigate("/");
      setForm({ nombre: "", descripcion: "", direccion: "", imagen: "" });

      // Llamamos a onAdd para que Home recargue la lista
      if (onAdd) onAdd();

    } catch (error) {
      console.error("Error al agregar restaurante:", error);
      alert("Error al guardar el restaurante.");
    }
  };


  return (
    <div>
      <h2>Nuevo Restaurante</h2>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre" className="form-control mb-2" value={form.nombre} onChange={handleChange} required />
        <input name="descripcion" placeholder="Descripción" className="form-control mb-2" value={form.descripcion} onChange={handleChange} required />
        <input name="direccion" placeholder="Dirección" className="form-control mb-2" value={form.direccion} onChange={handleChange} required />
        <input name="imagen" placeholder="URL Imagen" className="form-control mb-2" value={form.imagen} onChange={handleChange} required />
        <button className="btn btn-outline-danger">Crear</button>
      </form>
    </div>
  );
}

export default NewRestaurant;
