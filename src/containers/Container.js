import styled from 'styled-components'

const Container = styled.div`
  margin: 5em auto 0 auto;
  max-width: 600px;
  ${props => props.center ? 'text-align: center;' : null}
  text-align: center;
  width: 95%;
`

export default Container
