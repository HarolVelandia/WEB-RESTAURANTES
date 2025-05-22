import { useState } from "react";
import { addRestaurant } from "../utils/storage";

function NewRestaurant() {
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    direccion: "",
    imagen: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addRestaurant(form);
    alert("Restaurante creado y guardado localmente.");
    setForm({ nombre: "", descripcion: "", direccion: "", imagen: "" });
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
