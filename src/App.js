import React, { Component } from 'react';
// import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
// import { store } from '/.store';
import './App.css';

const cities = [
  'Buenos Aires, AR',
  'Bogotá, COL',
  'Santiago, SCL',
  'Ciudad de México, MX',
  'Madrid, ES',
  'Rio de Janeiro, BR'
];
/*
// función crea un objeto vacío - esta es una función pura
const store = createStore(() => {},
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
*/

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Weather Location'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}>
              </LocationListContainer>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="detail">
                  <ForecastExtendedContainer>
                  </ForecastExtendedContainer>
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

      /*<MuiThemeProvider>
        <div className="App">
          <LocationList cities = { cities }
          onSelectedLocation = {this.handleSelectionLocation}>
          </LocationList>
        </div>
      </MuiThemeProvider>*/
    );
  }
}

/*
App.propTypes = {
  setCity: PropTypes.func.isRequired,
}
*/



export default App;