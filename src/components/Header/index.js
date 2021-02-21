import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

/* Conseil : placer sur l'élément de plus haut niveau de chaque composant
une classe avec le nom du composant en minuscules */

const Header = ({ baseAmount, setBaseAmount }) => (
  <header className="header">
    <h1 className="header-title">Converter</h1>
    <input
      type="text"
      className="header-input"
      value={baseAmount}
      onChange={(event) => {
        // console.log(event.target.value);

        // event.target.value est forcément un string, mais ici on veut un nombre
        // pour pouvoir faire des calculs => parseFloat
        setBaseAmount(parseFloat(event.target.value));
      }}
    />
    <p className="header-amount">euro</p>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  // pour mettre à jour la valeur dans le state de App
  // 1 paramètre : nouvelle valeur
  setBaseAmount: PropTypes.func.isRequired,
};

export default Header;
