import "./index.css";
import emissions from "/Users/adelinelefebvre/LeReacteur/REACT/netflix/src/emissions.json";

const Images = (props) => {
  const listItems = emissions[props.index].images.map((item) => (
    <img src={item} alt="" />
  ));
  return <div className="caroussel">{listItems}</div>;
};

export default Images;
