import "./App.css";
import Container from "./components/Container";
import logo from "./img/logo.png";

function App() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo" />
      <Container />
    </div>
  );
}

export default App;
