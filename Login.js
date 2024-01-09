const loginCss = {
  width: "300px",
  padding: "50px",
  textAlign: "center",
  boxShadow: "0 0 10px black",
  margin: "100px auto",
};
// export default function Login({ login }) {
//   function LoginScreen() {
//     login(true);
//   }
//   return (
//     <div style={loginCss}>
//       <h2> Login Componunt</h2>
//       <button onClick={LoginScreen}>Login</button>
//     </div>
//   );
// }

export default function Login() {
  return (
    <div style={loginCss}>
      <h2> Login Componunt</h2>
      <button>Login</button>
    </div>
  );
}
