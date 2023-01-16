import PropTypes from 'prop-types';
import Toggler from '../Toggler';

import './style.scss';

function Header({ baseAmount, isOpen, toggle }) {
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>

      <p className="header-amount">{baseAmount} euro</p>

      <Toggler isOpen={isOpen} toggle={toggle}/>
    </header>
  );
}

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  
};

export default Header;
