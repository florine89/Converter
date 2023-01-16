import React from 'react';

import Currencies from './Currencies';
import Header from './Header';
import Result from './Result';

import currencies from '../../data/currencies';
import './styles.scss';

/**
 * On veut gérer un État pour notre application
 * Une solution (legacy) : les Composants sous forme de Classe _Class Component_
 *
 * Un composant qui gère un _state_ s'appelle un **Stateful Component**
 */
class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { // içi on dit que isopen c'est true avec this.state, puis mtn false
      isOpen: false,
        //this.defaultCurrency = {  //  içi on a le this mais qui est deja par defaut 
    //  name: 'United State Dollar',
    //  rate: 1.09,
    //};
    currency: {
      name:'Canadian Dollar',
      rate: 1.459549,
   },
  };

    this.toggleCurrencies = this.toggleCurrencies.bind(this);




  }

  //toggleCurrencies() {   // ici on fait une fonction touche sur currencies
  //  console.log(this);
  //  const { isOpen } = this.state;   // ici on dit que {isopen} est egal a this.state donc true!

  //  this.setState({   // la on fait une nouvelle state avec setstate
 //     isOpen: !isOpen, // et on dit que isOpen : c'est différent que isOpen donc pas true !
 //   });
 // }


 toggleCurrencies=() => {
  //console.log(this);
  const { isOpen } = this.state;

  this.setState({
    isOpen: !isOpen,
  })
 };

 changeCurrency = (newCurrency) => {
  this.setState({
    currency: newCurrency,
  });
 };

  render() { // la on renvoit à la vue
    const { isOpen, currency } = this.state; 

    return (
      <div className="converter">
        <Header baseAmount={32.98}
                isOpen={isOpen} 
                toggle={this.toggleCurrencies}
                />

        {isOpen && <Currencies list={currencies} change={this.changeCurrency} />} {/* donc içi on dit que isOpen qui est true est = la liste des currencies*/}

        <Result currency={currency} /> {/* la on affiche dans result le resultat par defaut donc united state dollar et 1.09*/}

        {/*<footer // on créée un footer
          onClick={() => { // une fonction de callback qui dit quand quand on clique on montre la fonction toogleeCurrencies donc une fois on ouvre une fois on cache
            this.toggleCurrencies(); //les currencies
          }}
        >
          FOOTER
        </footer>*/}



      </div>
    );
  }
}

export default Converter;
