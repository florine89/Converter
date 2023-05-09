import React from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    console.log('CONSTRUCTOR');
    console.log(document.querySelector('.aside'));
  }

  componentDidMount() {
    console.log('MOUNTED');
    /*
    Le composant vient d'être rendu pour la première fois
    */
    console.log(document.querySelector('.aside'));
  }

  componentDidUpdate() {
    console.log('UPDATED');
    /*
    Le composant vient d'être mis à jour
  }

  componentWillUnmount() {
    console.log('UNMOUNTED');
    /*
    Le composant vient d'être supprimé
    */
    console.log(document.querySelector('.aside'));
  }

  render() {
    console.log('RENDER');
    console.log(document.querySelector('.aside'));

    return (
      <aside className="aside">
        <h2>Actual base amount : {this.props.baseAmount}</h2>
      </aside>
    );
  }
}

LifeCycle.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default LifeCycle;
