import React, { useState, useEffect } from "react";
import Display from "./Display";
import { Button } from 'semantic-ui-react';
import { Container, Header, Segment } from 'semantic-ui-react';


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
    <Segment compact padded="very" raised>
      <div>
          <h1>Dashboard</h1>
        {console.log("Strikes, Balls", strikes, balls)}
        <Button onClick={handleStrike} data-testid="Button">Strike</Button>
        <Button onClick={handleBall} data-testid="Button">Ball</Button>
        <Button onClick={handleFoul} data-testid="Button">Foul</Button>
        <Button onClick={handleHit} data-testid="Button">Hit</Button>
      </div>
      <div>
        <Display balls={balls} strikes={strikes}/>
      </div>
    </Segment>
  );
}

export default Dashboard;
