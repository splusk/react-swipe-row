import React, { Component } from 'react'

class Action extends Component {
  render () {
    const { children, ...props } = this.props
    return (
      <div {...props}>
        { children }
      </div>
    )
  }
}

export default Action
