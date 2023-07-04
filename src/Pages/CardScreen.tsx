import React from 'react'
import styled from 'styled-components'
import {IData} from "../utils/Interfaces"

const CardScreen:React.FC<IData> = ({title, data}) => {
  return (
    <div>
        <Main>
            <Title>{title}</Title>
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

const Title = styled.div`
background-color: lightcoral;
`;

const Main = styled.div`
width: 300px;
border: 1px solid black;
border-radius: 3px;
`;
