import { useContext } from "react";
import myContext from "./context";
export function D() {
  var { data } = useContext(myContext);
  return (
    <div>
      <h2> D componunt</h2>
      <p>{data}</p>
    </div>
  );
}
