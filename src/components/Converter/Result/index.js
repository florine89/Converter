import PropTypes from 'prop-types';
import CountUp from 'react-countup';
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
function Result({ currency: { name } , amount  }) {
 // la on lit les props dans cette fonction
  return (
    <div className="result">
      {/*<span className="result-value">{amount.toFixed(2)}</span> {/* le tofixed sert a arrondier de deux chiffres le resultats après la virgule  */}

      <CountUp 
      className="result-value"
        start={1}
        end={amount}
        duration={0.8}
        separator=" "
        decimals={2}

      />
      <span className="result-currency">{name}</span>
    </div>
  );
}

Result.propTypes = {
  currency: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  amount: PropTypes.number.isRequired,
};

export default Result;


