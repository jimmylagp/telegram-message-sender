import './assets/scss/app.scss'
import './assets/media/telegram-logo.png'
import LuisAvatar from './assets/media/avatar.jpg'

import React, {Component} from 'react'
import {render} from 'react-dom'

import Container from './containers/Container'
import FormContainer from './containers/FormContainer'
import TelegramIcom from './components/TelegramIcon'
import Paragraph from './components/Paragraph'
import Title from './components/Title'
import Avatar from './components/Avatar'

class Welcome extends Component {
  render () {
    return (
      <Container>
        <Avatar image={LuisAvatar} />
        <Title>Thanks for visit me</Title>
        <Paragraph>
          Please leve a message here
        </Paragraph>
        <TelegramIcom />
        <FormContainer />
      </Container>
    )
  }
}

render(<Welcome />, document.getElementById('app'))
