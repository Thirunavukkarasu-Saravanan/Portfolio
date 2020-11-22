import React from "react";
import { useEffect, useState } from "react";

function PressButton() {
  //useState function is the infamous "Hook" in the React world
  const [counter, setCounter] = useState(5);
  return (
    <div>
      {/* setCounter i.e., the useState needs two things, an event handler and action to be done on said event,
       in this case, event is on click of the button and action to be done is to increment the counter
       takes in a reference to a function and not invoking the actual function,  */}
      <button onClick={() => setCounter(counter * 2)}>{counter}</button>
    </div>
  );
}

export default PressButton;
