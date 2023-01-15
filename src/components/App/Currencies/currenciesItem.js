import PropTypes from 'prop-types';

function currenciesItem({name}) {
  return(
    <li className='currency'>{name}</li>

  )
};

currenciesItem.propTypes = {
  name : PropTypes.string.isRequired,
};

export default currenciesItem;

