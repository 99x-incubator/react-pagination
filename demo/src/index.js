import React, {Component} from 'react'
import {render} from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>pagination-react Demo</h1>
      <Example total='100' limit='10'/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
