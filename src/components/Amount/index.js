import React from 'react';
import PropTypes from 'prop-types';

import './amount.scss';

const Amount = ({ currency, convertedAmount }) => (
  <div className="amount">
    <p className="amount-value">{convertedAmount}</p>
    <p className="amount-currency">{currency}</p>
  </div>
);

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  convertedAmount: PropTypes.string.isRequired,
};

export default Amount;
