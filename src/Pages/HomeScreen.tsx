import React from 'react'
import CardScreen from './CardScreen'
import styled from 'styled-components'

const HomeScreen = () => {
  return (
    <div>
        <Container>
        <CardScreen/>
        </Container>
    </div>
  )
}

export default HomeScreen

const Container = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
`