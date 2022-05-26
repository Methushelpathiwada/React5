import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
  render() {
      const {about="A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components."}=this.props
    return (
      <div >
         <div className='pure'> <h1> pure component.</h1></div>
          <h4 className='about'>{about}</h4>
      </div>
    )
  }
}