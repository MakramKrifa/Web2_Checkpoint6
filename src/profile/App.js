//import logo from './logo.svg';
import logo from './MootezZemmel.jpg';
import '../App.css';
import Image from './image.js';
import PropTypes from "prop-types";

function App(props) {
  const handleName=(e)=>{
    e.preventDefault();
    alert(props.user)
  }
  const styleObjDiv={display:"flex",flexDirection:"column",alignItems: "center", color:"red",textAlign:"center",fontSize:"25px"}
  const styleObjImg={width:"250px" ,height:"250px"  }
  return (
    <div style={styleObjDiv}>
      {props.fullName} <br></br>
      {props.bio} <br></br>
      {props.profession}
      <a href='#' onClick={handleName}>Click me</a>
      <Image  style={styleObjImg}>{logo}</Image>
    </div>
  );
}
App.defaultProps = {
  fullName: "John Doe",
  bio:"Somebody",
  profession:"Someting",
  user:"Someone"
};
App.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  user: PropTypes.string,
};

export default App;
