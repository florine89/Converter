// == Import
import Currencies from './Currencies';
import Header from './Header';
import Result from './Result';
import './styles.css';



// == Composant
function App() {
  return (
    <div className="app">
      <Header 
        title="Converter"
        money="1 euro"
      />
      <Currencies />
      <Result />
    </div>
  );
}

// == Export
export default App;
