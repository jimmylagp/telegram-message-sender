import './assets/scss/app.scss'
import React, {Component} from 'react'
import {render} from 'react-dom'

import FormContainer from './containers/FormContainer'

class Welcome extends Component {
  render () {
    return (
      <FormContainer />
    )
  }
}

render(<Welcome />, document.getElementById('app'))
