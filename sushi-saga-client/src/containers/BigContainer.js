import React from 'react'
import SushiContainer from './SushiContainer'
import Table from './Table'


class BigContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      sushiArray: [],
      walletTotal: 100,
      emptyPlateArray: [],
      first: 0,
      last: 4
    }
  }

  randomSushi = () => {

  }

  componentDidMount(){
    fetch('http://localhost:3000/sushis').then(resp => resp.json()).then(array => this.setState({sushiArray: array}))
  }

  addToPlatePile = () => {
    this.setState( prevState => {
      prevState.emptyPlateArray.push(<div>hello</div>)
    })
  }

  increment = () => {
    this.setState(prevState => ({ first: prevState.first + 4, last:prevState.last + 4, sushiArray:prevState.sushiArray.map(sObj=>Object.assign({},sObj))}))
  }

  walletSubtract = (num) => {
    this.setState(prevState => ({walletTotal: prevState.walletTotal - num}), function(){console.log(num, this.state.walletTotal)})
  }

render(){
  return (
    <div>
      <SushiContainer sushiArray={this.state.sushiArray} emptyPlateFunction={this.addToPlatePile} walletSubtract={this.walletSubtract} walletTotal={this.state.walletTotal} first={this.state.first} last={this.state.last} increment={this.increment}/>
      <Table walletTotal={this.state.walletTotal} emptyPlates={this.state.emptyPlateArray} />

    </div>
  )
}
}
export default BigContainer
