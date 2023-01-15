// ici on recupere la lise country crée dans Country JS en l'important
// puis on créer la liste avec les <ul>

import './style.scss'

import PropTypes from 'prop-types';

import CurrenciesItem from './currenciesItem';



function Currencies({list}) {
  const currencies = list.map(({name}) => 
  <CurrenciesItem key={name}
                  name={name}

                  />
 );

 return (
  <div className="scroller">
    <h2 className="currencies-title">Currencies</h2>

    <ul className="currencies-list">

    {currencies} 

    </ul>
    </div>
 )
}

Currencies.propTypes = {
list : PropTypes.arrayOf(
  PropTypes.shape({
  name: PropTypes.string.isRequired,
  }),
)


}
export default Currencies;
