// == Import
import Currencies from './Currencies';
import Header from './Header';
import Result from './Result';
import './styles.css';
import currencies from '../../data/currencies';


// == Composant
function App() {
  const defaultCurrency = {
    name: 'United State Dollar',
    rate: 1.09,
  }
  return (
    <div className="app">
      <Header 
        title="Converter"
        money={1}
      />
      <Currencies
      list={currencies}
       />
      <Result 
      currency={defaultCurrency}
       />
    </div>
  );
}

// == Export
export default App;
