import "./App.css";
import Header from "./Componunts/Header/Header";
import MainRoutes from "./routers/MainRoutes";
import Name from "./Redux/Name";
import Display from "./Redux/Display";

function App() {
  return (
    <div className="App">
      <Header />
      <Name />
      <Display />
    </div>
  );
}

export default App;
