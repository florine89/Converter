import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import './style.scss';


function Result({ currency: { name } , amount  }) {
 // la on lit les props dans cette fonction
  return (
    <div className="result">
      {/*<span className="result-value">{amount.toFixed(2)}</span> 
      {/* le tofixed sert a arrondier de deux chiffres le resultats après la virgule  */}

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


