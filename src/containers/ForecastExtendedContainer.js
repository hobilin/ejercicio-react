import React, { Component } from 'react';
import { connect } from 'react-redux'; //conecta con los estados (recibe dos funciones que el resultado de ellas se las agrega al componente)
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
  render() {
    return (
    this.props.city === null ? null : <ForecastExtended city = {this.props.city}></ForecastExtended>
    )
  }
}

const mapStateProps = (state) => ({
  city: state.city
});

export default connect(mapStateProps, null)(ForecastExtendedContainer);