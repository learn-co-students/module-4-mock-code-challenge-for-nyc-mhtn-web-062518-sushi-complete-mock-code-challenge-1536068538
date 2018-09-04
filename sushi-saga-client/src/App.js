import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sushis: [],
      startingSushiIndex: 0,
      remainingMoney: 100,
      eatenSushis: []
    }
  }

  componentDidMount() {
    fetch(API).then(resp => resp.json()).then(data => this.setState({sushis: data}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  eatenSushis={this.state.eatenSushis} eatSushi={this.eatSushi} getMoreSushis={this.getMoreSushis} sushis={this.state.sushis.slice(this.state.startingSushiIndex, this.state.startingSushiIndex + 4)} remainingMoney={this.state.remainingMoney}/>
        <Table remainingMoney={this.state.remainingMoney} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }


  getMoreSushis = () => {
    if (this.state.startingSushiIndex + 4 >=  this.state.sushis.length) {
      this.setState({...this.state, startingSushiIndex: 0})
    } else {
      this.setState({...this.state, startingSushiIndex: this.state.startingSushiIndex + 4})
    }
  }

  eatSushi = (sushi) => {
    this.setState({...this.state,
      eatenSushis: this.state.eatenSushis.concat(sushi),
      remainingMoney: this.state.remainingMoney - sushi.price})
  }


}

export default App;
