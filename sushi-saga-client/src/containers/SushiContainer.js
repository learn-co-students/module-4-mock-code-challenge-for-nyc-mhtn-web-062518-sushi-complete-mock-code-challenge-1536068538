import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} remainingMoney={props.remainingMoney} eatenSushis={props.eatenSushis}/>)}
        <MoreButton getMoreSushis={props.getMoreSushis}/>
      </div>
    </Fragment>
  )
}

SushiContainer.defaultProps = {
  sushi: []
}

export default SushiContainer
