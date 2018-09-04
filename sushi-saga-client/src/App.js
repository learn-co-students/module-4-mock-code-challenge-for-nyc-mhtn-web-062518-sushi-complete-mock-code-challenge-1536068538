import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

class App extends Component {

  constructor(){
    super()
    this.state = {
      balance: 100,
      plateArray: []
    }
  }

  handleSushiClick = (e) => {
    const price = parseInt(e.target.parentElement.nextElementSibling.innerText.split('-').slice(-1))
    if (this.state.balance > price){
      e.target.style.visibility = 'hidden'

        this.setState({balance: this.state.balance - price});

      this.setState(prevState => ({
        plateArray: [
          ...prevState.plateArray,
          1
        ]
    }))
  }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  handleSushiClick={this.handleSushiClick}/>
        <Table plateArray={this.state.plateArray} balance={this.state.balance}/>
      </div>
    );
  }
}

export default App;
