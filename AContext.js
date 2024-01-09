import B from "./BContext.js";
import { useState } from "react";
import myContext from "./context.js";
export default function A() {
  let [state, setState] = useState("");
  let [data, setData] = useState("");
  function set(event) {
    setState(event.target.value);
  }
  function sendText() {
    setData(state);
  }

  return (
    <div>
      <h2> A componunt</h2>
      <input type="text" onChange={set} />
      <button onClick={sendText}>Submit</button>
      <myContext.Provider value={data}>
        <B />
      </myContext.Provider>
    </div>
  );
}
