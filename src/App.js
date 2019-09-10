import React from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'
import Dropzone from 'react-dropzone';
import styled from "styled-components";
import Background from './SVGs/Vector.svg';
import './App.css';
import Sizes from './pages/Sizes'

const reqSvgs = require.context ( './SVGs', true, /\.svg$/ )
const paths = reqSvgs.keys ()

const svgs = paths.map( path => reqSvgs ( path ) )


const reqSvgs2 = require.context ( './button', true, /\.svg$/ )
const paths2 = reqSvgs2.keys ()

const svgs2 = paths2.map( path => reqSvgs2 ( path ) )
console.log(svgs);

const imageClick = () => {
  console.log('Click');
  let path = '/Sizes';
  this.props.history.push(path);
} 
class App extends React.Component {
  imageClick = () => {
    console.log('Click');
    let path = '/Sizes';
    this.props.history.push(path);
  }
  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    this.imageClick();
  }
  render (){

      return(
      <div>
      <header >
        
      <section  style={ background }>
      <h1 className='headline'> Make Polaroid style retro pictures</h1>
      <Pictures>
      
      <Arrange Class='pic1' count ={1}/>
      <Arrange Class='pic10' count ={2}/>
      <Arrange Class='pic11' count ={3}/>
      <Arrange Class='pic2' count ={4}/>
      <Arrange Class='pic3' count ={5}/>
      <Arrange Class='pic4' count ={6}/>
      <Arrange Class='pic5' count ={7}/>
      <Arrange Class='pic6' count ={8}/>
      <Arrange Class='pic7' count ={9}/>
      <Arrange Class='pic8' count ={10}/>
      <Arrange Class='pic9' count ={11}/>
    
      </Pictures>
      <PButtons>
      <div className='single'>
     
      <Route path="/Sizes" component={Sizes} />
      </div>
      <div className='open'>
      <img src={svgs2[1]}  alt="open" onClick={() => this.imageClick()} />
      </div>
      <div className='create'>
      <img src={svgs2[2]}  alt="create" onClick={() => this.imageClick()} />
      </div>
      
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
      
      </header>
     
      </div>
      )     

      
    };
  

}
function Arrange(props) {
   return  <div className={props.Class}>
      <img src={svgs[props.count]}  alt="logo" />
      </div>;
  
}


export default App;
var background = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'left',
  
  backgroundRepeat: 'no-repeat',
  height: "1000px",
  width:"1440px"
 
  
};


const Pictures = styled.div`
  p {
    position: absolute;
    font-size: 26px;
  }
  img {
    
    transition: transform 0.25s;
    position: absolute;
    top:var(top);
    left:var(left);
  }
  img:hover{
    transform: scale(1.3);
  }
`;
const PButtons =styled.div`
p {
  position: absolute;
  font-size: 26px;
}
img {
  
  transition: transform 0.1s;
  position: absolute;
  top:var(top);
  left:var(left);
}
img:hover{
  transform: scale(1.05);
}
`;
