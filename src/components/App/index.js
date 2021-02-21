// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Amount from 'src/components/Amount';
import CustomButton from 'src/components/CustomButton';

// import du fichier de données
import currenciesList from 'src/data/currencies';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log('[App] constructor');
  }

  state = {
    open: true,
    currency: 'United States Dollar',
    inputSearch: '',
    baseAmount: 1,
  };

  // componentDidMount
  componentDidMount() {
    console.log('[App] componentDidMount');

    // mise à jour du titre de la page
    document.title = `Converter - ${this.state.currency}`;
  }

  // componentDidMount
  componentDidUpdate() {
    console.log('[App] componentDidUpdate');

    document.title = `Converter - ${this.state.currency}`;
  }

  // modifier baseAmount dans le state
  setBaseAmount = (newBaseAmount) => {
    this.setState({
      baseAmount: newBaseAmount,
    });
  }

  computeAmount = () => {
    const {
      currency,
      baseAmount,
    } = this.state;

    // récupérer le taux de conversion 
    const currencyData = currenciesList.find((data) => data.name === currency);

    // multiplier le montant de base par le taux de conversion
    const convertedAmount = currencyData.rate * baseAmount;

    // limiter à deux décimales
    const roundedResult = convertedAmount.toFixed(2);

    return roundedResult;
  }

  getFilteredCurrencies = () => {
    // filtrer les devises
    const {
      inputSearch,
    } = this.state;

    const loweredSearch = inputSearch.toLowerCase();

    const filteredCurrencies = currenciesList.filter((currency) => {
      const loweredCurrencyName = currency.name.toLowerCase();
      return loweredCurrencyName.includes(loweredSearch);
    });

    return filteredCurrencies;
  }

  setSearch = (newValue) => {
    this.setState({
      inputSearch: newValue,
    });
  }

  handleClick = () => {
    console.log('clic reçu');

    const {
      open,
    } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleChangeCurrency = (newCurrencyName) => {
    this.setState({
      currency: newCurrencyName,
    });
  }

  render() {
    console.log('[App] render');

    const {
      open,
      baseAmount,
      currency,
      inputSearch,
    } = this.state;

    // calcul de la conversion
    const result = this.computeAmount();

    // filtrage des devises
    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="app">
        <Header
          baseAmount={
            baseAmount
          }
          setBaseAmount={
            this.setBaseAmount
          }
        /> <CustomButton
          open={
            open
          }
          manageClick={
            this.handleClick
          }
        /> {
          open && (
            <Currencies
              currenciesData={
                filteredCurrencies
              }
              handleClick={
                this.handleChangeCurrency
              }
              search={
                inputSearch
              }
              handleSearchChange={
                this.setSearch
              }
            />
          )
        } <Amount
          currency={
            currency
          }
          convertedAmount={
            result
          }
        />
      </div>
    );
  }
}

// == Export
export default App;
