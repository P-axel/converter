import React from 'react';
import PropTypes from 'prop-types';
import './currencies.scss';

class Currencies extends React.Component {
  constructor(props) {
    super(props);

    console.log('   [Currencies] constructor');
  }

  componentDidMount() {
    console.log('   [Currencies] componentDidMount');
  }

  componentDidUpdate() {
    console.log('   [Currencies] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('   [Currencies] componentWillUnmount');
  }

  render() {
    console.log('   [Currencies] render');

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
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,

  search: PropTypes.string.isRequired,

  handleSearchChange: PropTypes.func.isRequired,
};

export default Currencies;
