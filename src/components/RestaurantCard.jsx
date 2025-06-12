function RestaurantCard({ restaurante }) {
  return (
    <div className="card mb-4 shadow-sm border-0 bg-white text-danger" style={{ borderRadius: "10px" }}>
      <img
        src={restaurante.imagen}
        className="card-img-top"
        alt={restaurante.nombre}
        style={{ borderRadius: "10px 10px 0 0", objectFit: "cover", height: "200px", width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{restaurante.nombre}</h5>
        <p className="card-text">
          <i className="bi bi-geo-alt-fill text-success me-2"></i>
          {restaurante.direccion}
        </p>
        <p className="card-text text-success">{restaurante.descripcion}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
