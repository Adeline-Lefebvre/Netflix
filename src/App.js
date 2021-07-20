import "./App.css";
import emissions from "./emissions.json";
import Section from "./components/Section/index.js";
import Logo from "./img/Netflix-logo.png";

function App() {
  return (
    <div className="container">
      <img className="logo" src={Logo} alt="" />
      {emissions.map((elem, i) => (
        <Section index={i}></Section>
      ))}
    </div>
  );
}

export default App;
