import './style.scss'

import PropTypes from 'prop-types';

function Result({currency}) {
  return (
    <div className="result">
      <span>{currency.rate.toFixed(2)}</span>
      <p>{currency.name}</p>
    </div>

  );
}

Result.propTypes = {

  currency : PropTypes.shape ({
    rate: PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
  }).isRequired,
}

export default Result;
