import React, { Component } from 'react'
import { render } from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state={
      'selectedPage':1
    }
    this.getSelectedPage = this.getSelectedPage.bind(this)
    
  }
  getSelectedPage(k) {
    this.setState({
      'selectedPage': k
    })
  }
  render() {
    return <div>
      <h1>pagination-react Demo</h1>
      <Example total='100' limit='10' returnSelectedPage={this.getSelectedPage} />
      <br />
      <h2>{"Selected page : " + this.state.selectedPage}</h2>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
