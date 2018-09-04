import React, { Fragment } from 'react'

class Sushi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eaten: false
    }
  }

  componentDidMount() {
    if (this.props.eatenSushis.includes(this.props.sushi)) {
      this.setState({eaten: true})
    }
  }


  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.state.eaten ? null : this.handleClick }>
          {this.state.eaten ? null : <img src={this.props.sushi.img_url} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

  handleClick = () => {
    if (this.props.sushi.price <= this.props.remainingMoney) {
      this.setState({eaten: true})
      this.props.eatSushi(this.props.sushi)
    }
  }

}

export default Sushi
