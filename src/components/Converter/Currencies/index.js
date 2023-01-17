// ici on recupere la lise country crée dans Country JS en l'important
// puis on créer la liste avec les <ul>

import PropTypes from 'prop-types';

import CurrenciesItem from './currenciesItem';

import './style.scss';

function Currencies({ list, changeCurrency, search, changeSearch}) {
  const currencies = list.map(({ name, rate }) => (
    <CurrenciesItem
      key={name}
      name={name}
      rate={rate}
      changeCurrency={changeCurrency}
      
    />
  ));

  const handleChange = (event) => {
    changeSearch(event.target.value);
  };

  return (
    <div className="currencies">
       {/* <h2 className="currencies-title">Currencies</h2> */}
       <input
        className="currencies-search"
        type="search"
        placeholder="Search a currency…"
        value={search}
        onChange={handleChange}
      />

      <ul className="currencies-list">
        {currencies}
      </ul>
    </div>
  );
}

Currencies.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  changeCurrency: PropTypes.func.isRequired,
  search : PropTypes.string.isRequired,
  changeSearch: PropTypes.func.isRequired,
};

export default Currencies;
