import React from 'react';
import styled from "styled-components";
import Background from './SVGs/Vector.svg';
import './App.css';

const reqSvgs = require.context ( './SVGs', true, /\.svg$/ )
const paths = reqSvgs.keys ()

const svgs = paths.map( path => reqSvgs ( path ) )
console.log(svgs[1]);

function App() {
  return (
    <header >
        
    <section  style={ background }>
      <a className='headline'> Make Polaroid style retro pictures</a>
      <Activity>
      
     
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
     
      
      </Activity>
      </section>
      </header>
      
  );
  

}
function Arrange(props) {
   return  <div class={props.Class}>
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
var top='100px'
var left ='100px'


const Activity = styled.div`
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
  img:hover {
    transform: scale(1.3);
  }
`;
