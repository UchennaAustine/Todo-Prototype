import React, { useEffect, useState } from 'react'
import CardScreen from './CardScreen'
import styled from 'styled-components'
import { readTask } from '../utils/APIs'

const HomeScreen = () => {
    const [state, setState] = useState<any>([])
    const [stateI, setStateI] = useState<any>([])

    // useEffect(()=>{
    //     readTask().then((res))
    // })
  return (
    <div>
        <Container>
        <CardScreen
        // title=""
        />
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