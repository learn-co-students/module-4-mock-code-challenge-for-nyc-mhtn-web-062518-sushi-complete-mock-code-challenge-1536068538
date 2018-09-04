import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log('props is', props.sushi)
  return (
    <div className="sushi">
      <div className="plate"
           onClick={props.handleSushiClick}>
        {
          /* Tell me if this sushi has been eaten! */
          true ?
          <img src={props.sushi ? `${props.sushi.img_url}` : null} width="100%" />

          :
            <img src={props.sushi ? `${props.sushi.img_url}` : null} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi ? `${props.sushi.name} - ${props.sushi.price}` : null}
      </h4>
    </div>
  )
}

export default Sushi
