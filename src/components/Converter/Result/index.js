import PropTypes from 'prop-types';

import './style.scss';

// function Result({ currency }) {
//   return (
//     <div className="result">
//       <span className="result-value">{currency.rate.toFixed(2)}</span>
//       <span className="result-currency">{currency.name}</span>
//     </div>
//   );
// }

/*
  on peut aller plus loin dans la destructuration :
  `props.currency` est un objet, on peut aussi le décomposer
  → on affecte `currency` depuis `props` (1er niveau)
  → on décompose `currency` (2e niveau)
*/
function Result({ currency: { name, rate } }) {
  return (
    <div className="result">
      <span className="result-value">{rate.toFixed(2)}</span>
      <span className="result-currency">{name}</span>
    </div>
  );
}

Result.propTypes = {
  currency: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Result;


