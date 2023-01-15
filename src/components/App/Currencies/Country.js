// içi on crée chaque pays individuellement pour faire la liste <li>
// puis on va l'exporter pour ensuite la faire rentrer dans la liste <ul>
// qu'il y a dans index.js
import PropTypes from 'prop-types';

function Country({name}) {
  return (
   
    <li>{name}</li>
    
  );
}

Country.propTypes = {
name: PropTypes.string.isRequired,

}

export default Country;
