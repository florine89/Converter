// == Import
import Currencies from './Currencies';
import Header from './Header';
import Result from './Result';
import './styles.css';



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
      <Currencies />
      <Result 
      currency={defaultCurrency}
       />
    </div>
  );
}

// == Export
export default App;
