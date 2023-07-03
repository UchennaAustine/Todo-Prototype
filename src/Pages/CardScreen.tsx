import React from 'react'
import styled from 'styled-components'

const CardScreen = () => {
  return (
    <div>
        <Main>
            <Title>Title</Title>
            <Card>
                <Task>Task</Task>
                <Move>Move to Progress</Move>
            </Card>
        </Main>
    </div>
  )
}

export default CardScreen

const Move = styled.div`

`;

const Task = styled.div`

`;

const Card = styled.div``;

const Title = styled.div``;

const Main = styled.div`
`;
