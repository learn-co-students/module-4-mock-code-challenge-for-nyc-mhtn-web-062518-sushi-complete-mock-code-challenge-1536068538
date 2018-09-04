import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import BigContainer from './containers/BigContainer'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  render() {
    return (
      <div className="app">
        <BigContainer />
      </div>
    );
  }
}

export default App;
