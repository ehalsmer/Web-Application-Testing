import React, { useState, useEffect } from "react";
import Display from "./Display";
import { Button, Segment, Divider } from 'semantic-ui-react';


function Dashboard() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  function handleStrike() {
    setStrikes(strikes + 1);
  }
  function handleHit() {
    setStrikes(0);
    setBalls(0);
  }
  function handleFoul() {
    if (strikes < 2) {
      setStrikes(strikes + 1);
    }
  }
  function handleBall() {
    setBalls(balls + 1);
  }

  useEffect(() => {
    if (strikes === 3 || balls === 4) {
      setStrikes(0);
      setBalls(0);
    }
  }, [strikes, balls]);

  return (
    <Segment style={dashboardSegment} compact padded="very" raised>
      <div>
          <h1>Dashboard</h1>
        {console.log("Strikes, Balls", strikes, balls)}
        <Button inverted basic color='red' onClick={handleStrike} data-testid="Button">Strike</Button>
        <Button inverted basic color='blue' onClick={handleBall} data-testid="Button">Ball</Button>
        <Button inverted basic color='orange' onClick={handleFoul} data-testid="Button">Foul</Button>
        <Button inverted basic color='green' onClick={handleHit} data-testid="Button">Hit</Button>
      </div>
      <Divider/>
      <div>
        <Display balls={balls} strikes={strikes}/>
      </div>
    </Segment>
  );
}

const dashboardSegment = {
        backgroundColor: "rgba(19, 19, 62, 0.8)",
        color: "#e7e7eb"
}

export default Dashboard;
