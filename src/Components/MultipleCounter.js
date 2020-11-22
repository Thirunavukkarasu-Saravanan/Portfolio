import React from "react";
import { useEffect, useState } from "react";

// A more design oriented and generic approach to achieve reusability with stage logic and elemenets to be displayed written as individual components
//This componenent will serve as the parent component from which props will be passed to children components (state and display)
// A simple iterative counter component created with separation of concerns/ loosely coupled that displays the counter value to be incremented and result of the value
function MainMultiple() {
  //Declare use state hook
  const [counter, setCounter] = useState(0);
  //passing in value to be incremented, function should be passed as reference and not invoked
  const handlePress = (incrementValueby) =>
    setCounter(counter + incrementValueby);
  return (
    <div>
      <LogicState incrementCount={handlePress} incrementBy={1} />
      <LogicState incrementCount={handlePress} incrementBy={2} />
      <LogicState incrementCount={handlePress} incrementBy={5} />
      <LogicState incrementCount={handlePress} incrementBy={10} />
      <LogicState incrementCount={handlePress} incrementBy={50} />
      <LogicState incrementCount={handlePress} incrementBy={100} />
      <Display result={counter} />
    </div>
  );
}

//Counter is initialized here as from useState and will reflect the changes based on how the event is handled
function Display(props) {
  return <div>{props.result}</div>;
}

//event handle logic
function LogicState(props) {
  const handleLogic = () => props.incrementCount(props.incrementBy);
  return <button onClick={handleLogic}>{props.incrementBy}</button>;
}

export default MainMultiple;
