import React, { Fragment, Component } from 'react'

class Table extends Component {
  constructor(props){
    super(props)

  }

  render(){
    const renderPlates = (array) => {
      return array.map((x, index) => {
        return <div className="empty-plate" style={{ top: -7 * index }}/>
      })
    }

    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${ this.props.balance } remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              renderPlates(this.props.plateArray)
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Table
