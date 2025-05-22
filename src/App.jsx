import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import NewRestaurant from './pages/NewRestaurant';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div className="container">
          <Link className="navbar-brand text-danger fw-bold" to="/">Restaurantes IUD</Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-danger">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/search" className="nav-link text-danger">Buscar</Link>
              </li>
              <li className="nav-item">
                <Link to="/new" className="nav-link text-danger">Crear</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-5 pt-5 min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/new" element={<NewRestaurant />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
