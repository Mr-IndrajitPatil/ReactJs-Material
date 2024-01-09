export default function Card(props) {
  return (
    <div
      style={{
        height: "500px",
        width: "300px",
        border: "solid black 2px",
        backgroundColor: "lightblue",
        boxShadow: "0 0 10px black",
        textAlign: "center",
      }}
    >
      <img
        style={{
          margin: "5px",
          boxShadow: "0 0 10px black",
          border: "1px  solid white",
        }}
        src={props.image}
        height="300px"
        width="95%"
      ></img>
      <h2> {props.title}</h2>
      <p
        style={{
          wordWrap: "break-word",
          fontSize: "15px",
          fontWeight: "revert",
          border: "1px solid white",
        }}
      >
        {props.paragrapg}
      </p>

      <button
        style={{
          padding: "10px",

          color: "white",
          backgroundColor: "black",
          width: "40%",
          fontWeight: "bolder",
        }}
      >
        Profile
      </button>
    </div>
  );
}

export function Card1() {
  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
        justifyContent: "space-between",
      }}
    >
      <Card
        title={"Jackson"}
        paragrapg={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
        image={
          "https://media.istockphoto.com/id/1153206642/photo/confident-ginger-businessman-smiling-for-camera.jpg?s=612x612&w=0&k=20&c=xxN9v6-zB50n0_LW1Mi7ZiP5ilKH0Zh9sjI8G5S260c="
        }
      />
      <Card
        title={"Carter"}
        paragrapg={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
        image={
          "https://i.pinimg.com/originals/8d/c4/4f/8dc44f006ac6d7e82f1601a89e6eaeb8.png"
        }
      />
      <Card
        title={"Thomas"}
        paragrapg={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
        image={"https://image.pngaaa.com/232/4065232-middle.png"}
      />
      <Card
        title={"James"}
        paragrapg={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
        image={
          "https://c1.wallpaperflare.com/preview/472/306/455/rishi-gangoly-man-indian-professional-male-thinking-thumbnail.jpg"
        }
      />
    </div>
  );
}
