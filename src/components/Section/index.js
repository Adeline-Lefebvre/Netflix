import "./index.css";
import Images from "../Images/index.js";
import emissions from "../../emissions.json";

const Section = (props) => {
  return (
    <div>
      <h1>{emissions[props.index].category}</h1>
      <Images index={props.index}></Images>
    </div>
  );
};

export default Section;
