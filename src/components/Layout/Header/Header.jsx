import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <p>LOGO</p>
      <ul className="nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/skills">Compétences</Link>
        </li>
        <li>
          <Link to="/project">Projets</Link>
        </li>
        <li>
          <Link to="/about">Profil</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
