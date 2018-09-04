import React, { Fragment } from 'react'

class Sushi extends React.Component {


constructor(props){
  super(props)
  this.state={
    eaten:false
  }
}

handleClick = () => {
  if (!this.state.eaten && this.props.sushiDetails.price < this.props.walletTotal){
  this.setState({eaten:true})
  this.props.plateFn()
  this.props.walletSubtract(this.props.sushiDetails.price)
  }
}

render(){
  return (
    <div key={this.props.sushiDetails.id} className="sushi">
      <div  className="plate"
           onClick={this.handleClick} null>

           {

             this.state.eaten ?
               null
             :
               <img src={this.props.sushiDetails.img_url} width="100%" />
           }
      </div>
      <h4 className="sushi-details">
        {this.props.sushiDetails.name} - ${this.props.sushiDetails.price}
      </h4>
    </div>
  )
}
}

export default Sushi
