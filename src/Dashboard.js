/* - provide a button that the person in charge can press every time there is a 
`strike`, `ball`, `foul` or `hit`.
- there is **NO** need to specify the type of hit (single, double, etc).
- changes recorded on this component should update the information shown by the `Display` component.
*/

import React from "react";

// four buttons: strike, ball, foul, hit.
// Counter functions for balls and strikes.
// Current count of each sent to Display.js as props.

function Dashboard() {
  return (
    <>
      <button>Strike</button>
      <button>Ball</button>
      <button>Foul</button>
      <button>Hit</button>
    </>
  );
}

export default Dashboard;
