import React from "react";
import styled from "styled-components";
import { IData } from "../utils/Interfaces"
import { createDoneTask, deleteTask, readDoneTask, updateTask } from "../utils/APIs";

const CardScreen:React.FC<IData> = ({title,data}) => {
  return (
    <div>
      <Main>
        <Title>{title}</Title>

       { data?.map((props:any)=>(
        <Card key={props.id}
        bg={
            props.priority === "urgent"? "lightgreen":
            props.priority === "high"? "aqua":
            props.priority === "low"? "lightblue": "gold"
        }> 
          <Task td={props.completed ? "w": "red"}>{props?.task}</Task>
          <Move
          onClick={()=>{
            // updateTask(props.id)
            // readDoneTask(props)
            createDoneTask(props)
            deleteTask(props.id)

            window.location.reload()
          }}
          >Move to Progress</Move>
        </Card>
        ))}
      </Main>
    </div>
  );
};

export default CardScreen;

const Move = styled.div`
color: white;
background-color: black;
font-size: 12px;
font-weight: bold;
border-radius: 3px;
padding: 10px 15px;
margin-top: 15px;
width: 100px;
display:flex;
justify-content: flex;
align-items: center;
cursor: pointer
`;

const Task = styled.div<{td?: string}>`
text-decoration: ${({td}) => td ? "line-through" : "none"};
`;

const Card = styled.div<{bg: string}>`
  margin: 3px 0;
  background-color: ${({bg})=>bg};
  padding: 10px;
`;

const Title = styled.div`
  background-color: lightgrey;
  text-align: center;
  padding: 10px 0;
  text-transform: uppercase;
  font-weight: bold;
`;

const Main = styled.div`
  width: 300px;
  border: 1px solid black;
  border-radius: 3px;
`;
