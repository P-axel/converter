import React from 'react';
import PropTypes from 'prop-types';

import './customButton.scss';

// événements en React : https://fr.reactjs.org/docs/events.html
// on fournit la callback à appeler quand l'événement se produit

// fonction anonyme ou fonction nommée
/*
onClick={() => {
  console.log('clic reçu');
}}
*/

/*
const handleClick = () => {
  console.log('clic reçu');
};

onClick={handleClick}
*/

const CustomButton = ({ open, manageClick }) => {
  let cssClass = 'custom-button';
  if (open) {
    // cssClass = cssClass + ' custom-button--open';
    cssClass += ' custom-button--open';
  }

  return (
    <button
      type="button"
      className={cssClass}
      onClick={manageClick}
    >
      =
    </button>
  );
};

CustomButton.propTypes = {
  // type booléen
  open: PropTypes.bool.isRequired,
  // type function (callback)
  manageClick: PropTypes.func.isRequired,
};

export default CustomButton;
