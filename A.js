import B from "./B.js";
import { useState } from "react";
export default function A() {
  let [Text, setText] = useState("");
  let [Data, setData] = useState("");
  function AddData(event) {
    setText(event.target.value);
  }

  function SendData() {
    setData(Text);
  }

  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        boxShadow: "0 0 10px black",
        margin: "50px auto",
      }}
    >
      <p> A Componunt</p>
      <input type="text" onChange={AddData} />
      <button onClick={SendData}> Submit</button>

      <B Data={Data} />
    </div>
  );
}
