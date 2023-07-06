import React, { useEffect, useState } from "react";
import CardScreen from "./CardScreen";
import styled from "styled-components";
import { readDoneTask, readTask } from "../utils/APIs";

const HomeScreen = () => {
  const [state, setState] = useState<any>([]);
  const [progressState, setProgressState] = useState<any>([]);

  useEffect(() => {
    readTask().then((res: any) => {
      return setState(res);
    });
    
    readDoneTask().then((res: any) => {
      return setProgressState(res);
    });
  }, []);

  return (
    <div>
      <Container>
        <CardScreen title="Todo Tasks" data={state} />
        <CardScreen title="In Progress" data={progressState} />
      </Container>
    </div>
  );
};

export default HomeScreen;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
