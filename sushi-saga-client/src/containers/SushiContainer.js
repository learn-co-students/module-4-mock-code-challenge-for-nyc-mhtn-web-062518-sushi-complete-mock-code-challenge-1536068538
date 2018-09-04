import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const URL = 'http://localhost:3000/sushis'

class SushiContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      sushis: [],
      sushiIndex: 0
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(r=>r.json())
      .then(data=>this.setState({sushis:[...data]}))
  }


  handleClick = () => {
    this.setState(...this.state, {sushiIndex: this.state.sushiIndex+4})
  }

  render(){
    // console.log(this.state.sushis)
    return (
      <Fragment>
        <div className="belt">
          <Sushi key={this.state.sushiIndex} handleSushiClick={this.props.handleSushiClick} sushi={this.state.sushis[this.state.sushiIndex]}/>
          <Sushi key={this.state.sushiIndex+1} handleSushiClick={this.props.handleSushiClick} sushi={this.state.sushis[this.state.sushiIndex+1]}/>
          <Sushi key={this.state.sushiIndex+2} handleSushiClick={this.props.handleSushiClick} sushi={this.state.sushis[this.state.sushiIndex+2]}/>
          <Sushi key={this.state.sushiIndex+3} handleSushiClick={this.props.handleSushiClick} sushi={this.state.sushis[this.state.sushiIndex+3]}/>
          <MoreButton handleClick={this.handleClick}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
