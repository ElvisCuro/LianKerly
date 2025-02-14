import React from 'react';
import heartImage from '../assets/heart.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 custom-header">
      <div>
        <img src={heartImage} alt="corazon" className="img-fluid" style={{ width: '50px' }} />
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link custom-link" href="/">Carta</a>
          </li>
          <li className="nav-item">
            <a className="nav-link custom-link" href="/message">Frase del Dia</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;