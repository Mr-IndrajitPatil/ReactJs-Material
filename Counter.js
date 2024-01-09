import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  function IncreaseCounter() {
    setCounter(counter + 1);
  }
  function DecreasCounter() {
    setCounter(counter - 1);
  }
  function ResetCounter() {
    setCounter(0);
  }

  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        border: "3px solid red",
        margin: "50px auto",
        textAlign: "center",
      }}
    >
      <h2> COUNTER IS : {counter} </h2>
      <button onClick={IncreaseCounter}> LIKE</button> &nbsp;&nbsp;&nbsp;
      <button onClick={DecreasCounter}> DISLIKE</button>&nbsp;&nbsp;&nbsp;
      <button onClick={ResetCounter}> RESET</button>&nbsp;&nbsp;&nbsp;
    </div>
  );
}
