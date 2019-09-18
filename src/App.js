import React from 'react';
import { BrowserRouter as Router,Link, Route,Switch, Redirect} from 'react-router-dom'
import Dropzone from 'react-dropzone';
import styled from "styled-components";
import Background from './SVGs/Desktop.svg';
import './App.css';
import Edit from './pages/editpage/edit'
import { connect } from 'react-redux'

const reqSvgs2 = require.context ( './button', true, /\.svg$/ )
const paths2 = reqSvgs2.keys ()
const svgs2 = paths2.map( path => reqSvgs2 ( path ) )



class App extends React.Component {
  constructor(props) {
    super(props);
    //initialise the state
    this.state = { filename: "" };
  }

  // functions used
  updateFilename = filename => {
    this.setState({ filename });
  };

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles[0].name);
    
    this.updateFilename(acceptedFiles[0].name);
    console.log("filename:",this.state.filename);
    let path = '/edit';
    
    this.props.history.push({pathname:'/edit',state:{filename:this.state.filename}});  
   
  }


  // Actual Page design
  render (){
      return(
      <section  style={ background }> 
        <h1 className='headline'> Make Polaroid style retro pictures</h1>
        <PButtons>
        <Link to="/edit">
         
            <div className='open'>
              <img src={svgs2[1]}  alt="open"  />
            </div>
            <div className='create'>
              <img src={svgs2[2]}  alt="create"  />
            </div>
           </Link>
      </PButtons>
      <div className="dropzone">
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <img src={svgs2[0]}  alt="single" />
            </div>
          )}
        </Dropzone>
            
      </div>
      </section>
      )
    };
}


//connect redux

export default App;

var background = {
   backgroundImage: `url(${Background})`,
   height: "927px",
   width:"1440px"
 };
const Pictures = styled.div`
  p {
    position: absolute;
    font-size: 26px;
  } 
`;
const PButtons =styled.div`
p {
  position: absolute;
  font-size: 26px;
}
// img {
  
//   transition: transform 0.1s;
//   position: absolute;
//   top:var(top);
//   left:var(left);
// }
// img:hover{
//   transform: scale(1.05);
// }
`;
