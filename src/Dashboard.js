/* - provide a button that the person in charge can press every time there is a 
`strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.
*/

import React, { useState, useEffect } from "react";

// four buttons: strike, ball, foul, hit.
// Counter functions for balls and strikes.
// Current count of each sent to Display.js as props.

function Dashboard() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);


  /* 
  - balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
- balls and strikes reset to 0 when a `hit` is recorded.
- a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. 
 With 1 strike, a foul makes it 2 strikes.
 With two strikes a foul has no effect, count stays at 2 strikes.
  
  */
  function handleStrike() {
    setStrikes(strikes+1);

  }
  function handleHit() {
    setStrikes(0);
    setBalls(0);
  }
  function handleFoul() {
    if(strikes < 2){
        setStrikes(strikes+1);
    }
  }
  function handleBall() {
    setBalls(balls+1);
  }

  useEffect(()=>{
    if (strikes === 3 || balls === 4){
        setStrikes(0);
        setBalls(0);
    }
  }, [strikes, balls])


  return (
    <>
    {console.log('Strikes, Balls', strikes, balls)}
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </>
  );
}

export default Dashboard;
