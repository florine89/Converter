// ici on recupere la lise country crée dans Country JS en l'important
// puis on créer la liste avec les <ul>
import Country from './Country';
import './style.scss'




function Currencies() {
  return (
    <>
    <div className='country'>
      <p>Currencies</p>
      <ul>
        <Country />
        <Country />
        <Country />
      </ul>
      </div>
    </>
  );
}

export default Currencies;
