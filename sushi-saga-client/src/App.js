import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

class App extends Component {

  constructor(){
    super()
    this.state = {
      balance: 100
    }
  }

  handleSushiClick = (e) => {
    e.target.style.visibility = 'hidden'
    const price = parseInt(e.target.parentElement.nextElementSibling.innerText.split('-').slice(-1))
    this.setState({balance: this.state.balance - price});
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  handleSushiClick={this.handleSushiClick}/>
        <Table handleSushiClick={this.handleSushiClick} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;
