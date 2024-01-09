import D from "./D";
export default function C(props) {
  return (
    <div
      style={{
        height: "250px",
        width: "250px",
        boxShadow: "0 0 10px black",
      }}
    >
      <p> C Componunt</p>
      <D Data={props.Data} />
    </div>
  );
}
