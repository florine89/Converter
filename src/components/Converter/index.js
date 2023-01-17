import React from 'react';

import Currencies from './Currencies';
import Header from './Header';
import Result from './Result';
import Footer from './Footer';

import currencies from '../../data/currencies';
import './styles.scss';

import LifeCycle from './LifeCycle';


class Converter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      currency: {
        name: 'Canadian Dollar',
        rate: 1.459549,
      },
      baseAmount: 10,
      isLiked: false,
      search:'',
    };
  }


  componentDidMount() {
    console.log('Mounted!');
    this.pageTitleEffect();

    //j'ai accès au DOM
    document.addEventListener('keyup', this.handlekeyup);
    
  }
  componentDidUpdate(){
   

  }

  toggleCurrencies = () => {
    const { isOpen } = this.state;

    this.setState({
      isOpen: !isOpen,
    });
  };

  toggleLike = () => {
    const { isLiked } = this.state;

    this.setState({
      isLiked: !isLiked,
    });
  };

  changeCurrency = (newCurrency) => {
    this.setState({
      currency: newCurrency,
    });
  };

  makeConversion = () => {
    const { currency: { rate }, baseAmount } = this.state;

    return baseAmount * rate;
  };

  changeSearch = (newValue) => {
    this.setState({
    search: newValue,
    });
};

getCurrencies = () => {
  const {search} = this.state;

  if(!search.trim().length) { // par défaut quand on rentre rien dans la barre de recherche on retourne currencies
    return currencies;
  }

  return currencies.filter(({name}) => ( // currecnies provient de data
    name.toLowerCase().includes(search.trim().toLowerCase())

  ));

};

setAmount = (newAmount) => {
  this.setState({
    baseAmount: Number(newAmount),
  })
}

pageTitleEffect() {
  const { currency: { name } } = this.state;
  // `document.title` n'existe que sur le DOM réel
  // → on doit donc attendre la réconciliation
  document.title = `Euro to ${name} | Converter`;
}


handlekeyup = (event) => {
  console.log(event.key);
  const { baseAmount } = this.state;

  switch (event.key)
   {
    case 'Escape' :
    this.setState ({
      isOpen:false,
    });
    break;
      case '+' :
        this.setState({
          baseAmount : baseAmount + 1,
        });
        break;

        case '-':
          this.setState({
            baseAmount: baseAmount > 1 ? baseAmount - 1 : baseAmount,
          });
          break;
  

        default: 
        break;
  }
}


  render() {
    const {
      isOpen, currency, baseAmount, isLiked, search
    } = this.state;

    const convertedAmount = this.makeConversion();

    const filteredCurrencies = this.getCurrencies();
    console.log(filteredCurrencies)

    return (
      <>
        <div className="converter">
          <Header
            baseAmount={baseAmount}
            isOpen={isOpen}
            toggleCurrencies={this.toggleCurrencies}
            setAmount={this.setAmount}
          />

          {isOpen && (
          <Currencies list={filteredCurrencies} 
          changeCurrency={this.changeCurrency}
          search={search}
          changeSearch={this.changeSearch}
           />
           )}

          <Result currency={currency} amount={convertedAmount} />
        </div>

        <Footer isLiked={isLiked} toggleLike={this.toggleLike} />

        {isOpen && <LifeCycle baseAmount={baseAmount} />}
      </>
    );
  }
}

export default Converter;
