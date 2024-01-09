import C from "./C.js";
export default function B(props) {
  return (
    <div
      style={{
        height: "350px",
        width: "350px",
        boxShadow: "0 0 10px black",
      }}
    >
      <p> B Componunt</p>

      <C Data={props.Data} />
    </div>
  );
}
