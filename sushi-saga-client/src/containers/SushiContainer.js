import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  //Implemented everything except how to do the "more sushi" button in a non-gross way. I could have assigned a couple of range variables to BigContainer state and incremented them and looped through that way, like a "props.sushiArray.slice(a,b) kind of thing, but there must be a better way."

  const sushiList = props.sushiArray.slice(props.first, props.last).map(sushi => <Sushi sushiDetails={sushi} plateFn={props.emptyPlateFunction} walletSubtract={props.walletSubtract} walletTotal={props.walletTotal} />)

  return (
    <Fragment>
      <div className="belt">
        {
          sushiList
        }
        <MoreButton increment={props.increment}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
