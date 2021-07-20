import "./index.css";
import Images from "/Users/adelinelefebvre/LeReacteur/REACT/netflix/src/components/Images/index.js";
import emissions from "/Users/adelinelefebvre/LeReacteur/REACT/netflix/src/emissions.json";

const Section = (props) => {
  return (
    <div>
      <h1>{emissions[props.index].category}</h1>
      <Images index={props.index}></Images>
    </div>
  );
};

export default Section;
