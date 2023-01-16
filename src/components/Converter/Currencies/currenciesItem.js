import PropTypes from 'prop-types';

function CurrenciesItem({ name, rate, change }) {
  const handleClick = () => {
    change({
      name,
      rate,
    });
  };
  return (
    <li className="currency"
    onClick={handleClick}
    >
    {name}
    </li>
  );
}

CurrenciesItem.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
};

export default CurrenciesItem;
