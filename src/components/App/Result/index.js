import './style.scss'

import PropTypes from 'prop-types';

function Result({currency : {rate, name}}) {
  return (
  <div className='result'>
   <span className="result-value">{rate.toFixed(2)}</span>
  <span className="result-currency">{name}</span>
  </div>
  )
  
}

Result.propTypes = {

  currency : PropTypes.shape ({
    rate: PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
  }).isRequired,
}

export default Result;
