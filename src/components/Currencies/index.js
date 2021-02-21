import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

/*
https://fr.reactjs.org/docs/lists-and-keys.html#keys
key: prop spéciale qui permet à la réconcilation de React de repérer chaque
élément pour faire le diff entre DOM réel et DOM virtuel.
Nécessaire quand on a plusieurs éléments du même type qui sont frères (ici les li).
Ce qu'on utilise comme clé doit être unique et stable dans le temps :
idéalement un id, éventuellement un nom s'il est unique, mais surtout pas un
index
*/

/*
l'input est un champ contrôlé : sa valeur est le reflet du state, c'est le state
qui pilote ce qui est affiché dans l'input (but : avoir une seule source de vérité,
ne pas avoir une valeur stockée directement dans le DOM)
Quand on saisit un caractère dans l'input : avec l'evénement change on met à jour
la valeur dans le state, donc nouveau rendu de App, donc nouveau rendu de Currencies
avec la nouvelle valeur pour l'input.

Pour cela on a ajouté 2 props sur le composant qui contient l'input :
- une pour obtenir la valeur du state : search
- une qui permet de demander la mise à jour de la valeur du state : handleSearchChange

https://fr.reactjs.org/docs/forms.html#controlled-components
*/

/*
cycle de vie d'un composant : méthodes qui permettent d'exécuter un traitement à un
moment précis de la vie du composant, par exemple juste après chaque mise à jour
du composant dans le DOM
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*/

// eslint-disable-next-line react/prefer-stateless-function
class Currencies extends React.Component {
  constructor(props) {
    super(props);

    console.log('   [Currencies] constructor');
  }

  componentDidMount() {
    // bon moment pour aller récupérer des informationns depuis une API
    console.log('   [Currencies] componentDidMount');
  }

  componentDidUpdate() {
    console.log('   [Currencies] componentDidUpdate');
  }

  // appelé juste avant la destruction du composant (quand il disparaît du DOM)
  componentWillUnmount() {
    console.log('   [Currencies] componentWillUnmount');
  }

  render() {
    console.log('   [Currencies] render');

    // render : retourne le JSX

    // quand je transforme ma fonction en classe, il faut que je modifie la façon
    // d'accéder aux props
    // - soit this.props.nomDeLaProp
    // - soit destructuring : const { nomDelaProp } = this.props
    const {
      currenciesData,
      search,
      handleClick,
      handleSearchChange,
    } = this.props;

    return (
      <div className="currencies">
        <input
          className="currencies-search"
          type="text"
          placeholder="Rechercher"
          value={search}
          onChange={(event) => {
            // console.log('change : ', event.target.value);
            // j'informe App qu'il faut modifier la valeur dans le state
            handleSearchChange(event.target.value);
          }}
        />
        <ul>
          {currenciesData.map((currency) => (
            <li
              key={currency.name}
              className="currency"
              onClick={() => {
                console.log('clic sur la devise : ', currency.name);
                handleClick(currency.name);
              }}
            >
              {currency.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Currencies.propTypes = {
  currenciesData: PropTypes.arrayOf(
    PropTypes.shape({
      // facultatif de valider les informations qu'on n'utilise pas
      /* rate: PropTypes.number.isRequired, */
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
  // valeur à afficher dans l'input
  search: PropTypes.string.isRequired,
  // fonction à appeler en cas de changement de valeur de l'input
  // 1 paramètre : nouvelle valeur
  handleSearchChange: PropTypes.func.isRequired,
};

export default Currencies;
