export default function D(props) {
  return (
    <div
      style={{
        height: "150px",
        width: "150px",
        boxShadow: "0 0 10px black",
      }}
    >
      <p> D componunt</p>
      <ul>
        <li> {props.Data}</li>
      </ul>
    </div>
  );
}
